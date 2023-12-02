import { useQuery } from "@tanstack/react-query";
import { getExercises } from "../../services/apiExercises";

export default function useReadExercises() {
  const {
    data: exercises,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["exercises"],
    queryFn: getExercises,
  });
  return { isLoading, exercises, error };
}
