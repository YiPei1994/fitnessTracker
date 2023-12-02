import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Text,
  Image,
} from "@chakra-ui/react";
import { CopyIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDeleteExercise } from "./useDeleteExercise";
import ExerciseForm from "./ExerciseForm";
function Exercise({ data }) {
  const {
    id: exerciseId,
    name,
    type,
    sets,
    reps,
    pauseTime,
    instruction,
    image,
  } = data;

  const { deleteThisExercise, isDeleting } = useDeleteExercise();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>{name}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Card>
              <CardHeader>
                <Badge colorScheme="green" outline="subtle" p="1" m="1">
                  Type: {type}
                </Badge>
                <Badge colorScheme="green" outline="subtle" p="1" m="1">
                  Sets: {sets}
                </Badge>
                <Badge colorScheme="green" outline="subtle" p="1" m="1">
                  Reps: {reps}
                </Badge>
                <Badge colorScheme="green" outline="subtle" p="1" m="1">
                  Pausetime: {pauseTime}
                </Badge>
              </CardHeader>
              <CardBody>
                <Text as="b">How to perform right:</Text>
                <Text>{instruction}</Text>
                <Image m="4" src={image} />
              </CardBody>
            </Card>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              <CopyIcon />
            </Button>
            <Button
              colorScheme="red"
              mr={3}
              disabled={isDeleting}
              onClick={() => deleteThisExercise(exerciseId)}
            >
              <DeleteIcon />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Exercise;
