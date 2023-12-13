import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { A_Error } from "../types/t_user";
import axios, { AxiosError } from "axios";

interface ICheckout {
  products: { productId: number; quantity: number }[];
  total: number;
}

interface CheckoutResponse {
  success: true;
}

const checkoutOrder = async (checkoutDetails: ICheckout): Promise<CheckoutResponse> => {
  const res = await axios.post<CheckoutResponse>("/api/checkout", checkoutDetails, {
    withCredentials: true,
  });
  return res.data;
};

export const useCheckout = (): UseMutationResult<
  CheckoutResponse,
  AxiosError<A_Error>,
  ICheckout
> => {
  return useMutation<CheckoutResponse, AxiosError<A_Error>, ICheckout>({
    mutationKey: ["checkout"],
    mutationFn: checkoutOrder,
  });
};
