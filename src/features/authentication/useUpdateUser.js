import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const QueryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,

    onSuccess: ({ user }) => {
      toast.success("User Updated Successfully");
      QueryClient.setQueryData(["user"], user);
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateUser, isUpdating };
}
