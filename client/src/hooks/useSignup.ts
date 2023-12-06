import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { A_Error, UserCredential } from "../types/t_user";
import axios, { AxiosError } from "axios";

interface I_Signup {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export const useSignup = (): UseMutationResult<UserCredential, AxiosError<A_Error>, I_Signup> => {
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: async (signupData: I_Signup): Promise<UserCredential> => {
      const res = await axios.post<UserCredential>("/api/auth/signup", signupData, {
        withCredentials: true,
      });
      return res.data;
    },
  });
};
