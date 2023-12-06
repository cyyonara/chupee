import { useQuery, UseQueryResult, QueryFunction } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { A_Error } from "../types/t_user";
import { Product } from "../types/t_product";

interface IProductRes {
  data: Product[];
  totalPages: number;
  hasNextPage: boolean;
}

const getProductList: QueryFunction<IProductRes, [string, { currentPage: number }]> = async ({
  queryKey,
}) => {
  const page = queryKey[1].currentPage;

  const res = await axios.get<IProductRes>(`/api/products?page=${page}`, { withCredentials: true });
  return res.data;
};

export const useProductList = (
  currentPage: number
): UseQueryResult<IProductRes, AxiosError<A_Error>> => {
  return useQuery<IProductRes, AxiosError<A_Error>>({
    queryKey: ["products", { currentPage }],
    queryFn: getProductList as any,
  });
};
