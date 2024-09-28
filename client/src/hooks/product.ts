import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "../api/app.ts";
import { GetAllProducts } from "../graphql/product";

export const useAllProduct = () => {
  const query = useQuery({
    queryKey: ["Get_all_products"],
    queryFn: () => graphqlClient.request(GetAllProducts),
  });

  return { ...query, product: query.data };
};
