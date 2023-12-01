import supabase, { supabaseUrl } from "./supabase";

export async function getExercises() {
  const { data: excercises, error } = await supabase
    .from("excercises")
    .select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return excercises;
}

export async function addExercises({ newExercise, id }) {
  const { data, error } = await supabase
    .from("excercises")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();
}
