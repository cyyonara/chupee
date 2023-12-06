import { useQuery, UseQueryResult, QueryFunction } from "@tanstack/react-query";
import { A_Error } from "../types/t_user";
import { Product } from "../types/t_product";
import axios, { AxiosError } from "axios";

interface SearchedProducts {
  data: Product[];
}

const searchProducts: QueryFunction<SearchedProducts, [string, string]> = async ({
  queryKey,
}): Promise<SearchedProducts> => {
  const keyword = queryKey[1];
  const res = await axios.get<SearchedProducts>(`/api/products/search?keyword=${keyword}`, {
    withCredentials: true,
  });
  return res.data;
};

export const useSearch = (
  keyword: string
): UseQueryResult<SearchedProducts, AxiosError<A_Error>> => {
  return useQuery<SearchedProducts, AxiosError<A_Error>>({
    queryKey: ["search", keyword],
    queryFn: searchProducts as any,
  });
};
