import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditExercises } from "../../services/apiExercises";
import toast from "react-hot-toast";

export function useAddExercise() {
  const queryClient = useQueryClient();
  const { mutate: addExercise, isLoading: isAdding } = useMutation({
    mutationFn: addEditExercises,
    onSuccess: () => {
      toast.success("New exercise added succssesful");
      queryClient.invalidateQueries({ queryKey: ["exercises"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { addExercise, isAdding };
}
