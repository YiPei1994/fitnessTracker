import supabase, { supabaseUrl } from "./supabase";

export async function getExercises() {
  const { data: exercises, error } = await supabase
    .from("exercises")
    .select("*");
  if (error) {
    console.error(error);
    throw new Error("Exercises could not be loaded");
  }

  return exercises;
}

export async function addEditExercises(newExercise, id) {
  const hasImagePath = newExercise.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newExercise.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newExercise.image
    : `${supabaseUrl}/storage/v1/object/public/exercises/${imageName}`;

  console.log(imageName);
  // query to exercise
  let query = supabase.from("exercises");

  // create exercise
  if (!id) query = query.insert([{ ...newExercise, image: imagePath }]);

  // edit exercise
  if (id)
    query = query.update({ ...newExercise, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Exercise could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("exercises")
    .upload(imageName, newExercise.image);

  // 3. Delete the exercise IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("exercises").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Exercise image could not be uploaded and the exercise was not created"
    );
  }

  return data;
}

export async function deleteExercise(id) {
  const { data, error } = await supabase
    .from("exercises")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Exercise could not be deleted");
  }

  return data;
}
