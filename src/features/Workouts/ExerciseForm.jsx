import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import { useAddExercise } from "./useAddExercise";

function ExerciseForm({ setShow }) {
  const { register, handleSubmit, formState, reset } = useForm();

  const { errors } = formState;

  const { addExercise, isAdding } = useAddExercise();

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    addExercise(
      { ...data, image: image },
      {
        onSuccess: (data) => {
          reset();
          setShow((show) => !show);
        },
      }
    );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          id="name"
          type="text"
          placeholder="name of exercies"
          {...register("name", { required: "This is required" })}
        />
      </FormRow>
      <FormRow label="Type">
        <Input
          id="type"
          type="text"
          placeholder="what type (push/pull/leg)"
          {...register("type")}
        />
      </FormRow>
      <FormRow label="Sets" error={errors?.sets?.message}>
        <Input
          id="sets"
          type="number"
          defaultValue={3}
          {...register("sets", { required: "This is required" })}
        />
      </FormRow>
      <FormRow label="Reps" error={errors?.reps?.message}>
        <Input
          id="reps"
          type="number"
          defaultValue={10}
          {...register("reps", { required: "This is required" })}
        />
      </FormRow>
      <FormRow label="Pause Time" error={errors?.pauseTime?.message}>
        <Input
          id="pauseTime"
          type="number"
          defaultValue={60}
          {...register("pauseTime", { required: "This is required" })}
        />
      </FormRow>
      <FormRow label="Instruction">
        <Input
          id="instruction"
          type="text"
          placeholder="short instruction for the exercise"
          {...register("instruction")}
        />
      </FormRow>
      <FormRow label="Image">
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("image")}
        />
      </FormRow>
      <Box>
        <Button type="submit" disabled={isAdding}>
          add
        </Button>
      </Box>
    </form>
  );
}

export default ExerciseForm;
