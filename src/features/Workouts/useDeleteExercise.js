import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteExercise } from "../../services/apiExercises";

export function useDeleteExercise() {
  const queryClient = useQueryClient();
  const { mutate: deleteThisExercise, isLoading: isDeleteing } = useMutation({
    mutationFn: deleteExercise,
    onSuccess: () => {
      toast.success("Successfully deleted an exercise");
      queryClient.invalidateQueries({ queryKey: ["exercises"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteThisExercise, isDeleteing };
}
