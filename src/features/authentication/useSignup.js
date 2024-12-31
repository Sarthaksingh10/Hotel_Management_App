import { useMutation } from "@tanstack/react-query";

import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,

    onSuccess: (user) => {
      console.log(user);
      toast.success("New user successfully signed up");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signUp, isLoading };
}
