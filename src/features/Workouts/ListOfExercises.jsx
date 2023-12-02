import React, { useState } from "react";
import useReadExercises from "./useReadExercise";
import { Box, Button, Flex, Heading, Spinner } from "@chakra-ui/react";
import Exercise from "./Exercise";
import { AddIcon } from "@chakra-ui/icons";
import ExerciseForm from "./ExerciseForm";

function ListOfExercises() {
  const { exercises, isLoading } = useReadExercises();
  const [show, setShow] = useState(false);
  if (isLoading) return <Spinner />;
  return (
    <>
      <Flex
        flexDirection="row"
        m="5"
        p="3"
        justifyContent="space-between"
        align="center"
      >
        <Heading>List of created exercises</Heading>
        <Box>
          <Button onClick={() => setShow((show) => !show)}>
            <AddIcon />
          </Button>
        </Box>
      </Flex>
      <Flex>
        <Box w="50%" m="5" p="3">
          {exercises.map((exercise) => (
            <Exercise key={exercise.id} data={exercise} setShow={setShow} />
          ))}
        </Box>
        <Box w="50%" m="5" p="3">
          {show && <ExerciseForm setShow={setShow} />}
        </Box>
      </Flex>
    </>
  );
}

export default ListOfExercises;
