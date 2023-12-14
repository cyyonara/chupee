import axios, { AxiosError } from "axios";
import { A_Error } from "../types/t_user";
import { ICartProduct } from "../types/I_CartProduct";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface ICart {
  data: ICartProduct[];
}

const getCart = async (): Promise<ICart> => {
  const res = await axios.get<ICart>("/api/cart", { withCredentials: true });
  return res.data;
};

export const useCart = (): UseQueryResult<ICart, AxiosError<A_Error>> => {
  return useQuery<ICart, AxiosError<A_Error>>({ queryKey: ["cart"], queryFn: getCart });
};
