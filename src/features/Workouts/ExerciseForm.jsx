import React from "react";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import { Box, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import FileInput from "../ui/FileInput";

function ExerciseForm() {
  return (
    <form>
      <FormRow label="Name">
        <Input type="text" placeholder="name of exercies" />
      </FormRow>
      <FormRow label="Type">
        <Input type="text" placeholder="what type (push/pull/leg)" />
      </FormRow>
      <FormRow label="Sets">
        <Input type="number" defaultValue={3} />
      </FormRow>
      <FormRow label="Reps">
        <Input type="number" defaultValue={10} />
      </FormRow>
      <FormRow label="Break time">
        <Input type="number" defaultValue={60} />
      </FormRow>
      <FormRow label="Instructions">
        <Input type="text" placeholder="short instruction for the exercise" />
      </FormRow>
      <FormRow label="Image">
        <FileInput id="image" accept="image/*" type="file" />
      </FormRow>
      <Box>
        <Button>
          <AddIcon />
        </Button>
      </Box>
    </form>
  );
}

export default ExerciseForm;
