import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const QueryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: signOut,

    onSuccess: () => {
      QueryClient.removeQueries();
      navigate("/login", { replace: true });
      toast.success("Logout Successfull");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { logout, isLoading };
}
