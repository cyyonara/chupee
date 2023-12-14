import axios, { AxiosError } from "axios";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { A_Error } from "../types/t_user";

interface IAddToCartResponse {
  success: boolean;
}

interface INewCartProduct {
  productId: number;
  quantity: number;
}

const addToCart = async (cart: INewCartProduct): Promise<IAddToCartResponse> => {
  const res = await axios.post<IAddToCartResponse>("/api/cart", cart, {
    withCredentials: true,
  });
  return res.data;
};

export const useAddToCart = (): UseMutationResult<
  IAddToCartResponse,
  AxiosError<A_Error>,
  INewCartProduct
> => {
  return useMutation<IAddToCartResponse, AxiosError<A_Error>, INewCartProduct>({
    mutationKey: ["add-to-cart"],
    mutationFn: addToCart,
  });
};
