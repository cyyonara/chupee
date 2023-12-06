import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { A_Error } from "../types/t_user";
import { UserCredential } from "../types/t_user";

interface ILogin {
  username: string;
  password: string;
}

export const useLogin = (): UseMutationResult<UserCredential, AxiosError<A_Error>, ILogin> => {
  return useMutation<UserCredential, AxiosError<A_Error>, ILogin>({
    mutationKey: ["login"],
    mutationFn: async (loginData: ILogin): Promise<UserCredential> => {
      const res = await axios.post("/api/auth/login", loginData, { withCredentials: true });
      return res.data;
    },
  });
};
