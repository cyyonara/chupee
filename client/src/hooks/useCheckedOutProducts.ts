import axios, { AxiosError } from "axios";
import { useQuery, UseQueryResult, QueryFunction } from "@tanstack/react-query";
import { Product } from "../types/t_product";
import { A_Error } from "../types/t_user";

interface ICheckedOut {
  data: Product[];
}

const getCheckedOutProducts: QueryFunction<ICheckedOut, [string, number[]]> = async ({
  queryKey,
}): Promise<ICheckedOut> => {
  const productIds = queryKey[1];

  const res = await axios.get(`/api/checkout?products=${productIds.join("-")}`, {
    withCredentials: true,
  });
  return res.data;
};

export const useCheckedOutProducts = (
  productIds: number[]
): UseQueryResult<ICheckedOut, A_Error> => {
  return useQuery<ICheckedOut, A_Error>({
    queryKey: ["checkout", productIds],
    queryFn: getCheckedOutProducts as any,
  });
};
