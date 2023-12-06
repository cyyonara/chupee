import { Product } from "../types/t_product";
import axios, { AxiosError } from "axios";
import { A_Error } from "../types/t_user";
import { useQuery, UseQueryResult, QueryFunction } from "@tanstack/react-query";

interface IProduct {
  data: Product;
}

const getSingleProduct: QueryFunction<IProduct, [string, number]> = async ({
  queryKey,
}): Promise<IProduct> => {
  const id = queryKey[1];
  const res = await axios.get<IProduct>(`/api/products/${id}`, { withCredentials: true });
  return res.data;
};

export const useProduct = (id: number): UseQueryResult<IProduct, AxiosError<A_Error>> => {
  return useQuery<IProduct, AxiosError<A_Error>>({
    queryKey: ["product", id],
    queryFn: getSingleProduct as any,
  });
};
