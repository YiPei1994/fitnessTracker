import React, { useState } from "react";
import useReadExercises from "./useReadExercise";
import { Box, Button, Flex, Heading, Spinner } from "@chakra-ui/react";
import Exercise from "./Exercise";
import { AddIcon } from "@chakra-ui/icons";
import ExerciseForm from "./ExerciseForm";

function ListOfExercises() {
  const { excercises, isLoading } = useReadExercises();
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
          {excercises.map((exercise) => (
            <Exercise key={exercise.id} data={exercise} />
          ))}
        </Box>
        <Box w="50%" m="5" p="3">
          {show && <ExerciseForm />}
        </Box>
      </Flex>
    </>
  );
}

export default ListOfExercises;
