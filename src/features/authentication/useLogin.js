import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const QueryClient = useQueryClient();
  const { mutate: loginUsingEmail, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),

    onSuccess: (user) => {
      console.log(user);
      QueryClient.setQueryData(["user"], user.user);
      toast.success("User Login successfully");
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      console.error("Error : ", err);
      toast.error("Invalid Email or Password");
    },
  });

  return { loginUsingEmail, isLoading };
}
