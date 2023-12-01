import { useQuery } from "@tanstack/react-query";
import { getExercises } from "../../services/apiExcercises";

export default function useReadExercises() {
  const {
    data: excercises,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["exercises"],
    queryFn: getExercises,
  });
  return { isLoading, excercises, error };
}
