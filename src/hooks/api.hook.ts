// src/hooks/api.ts
import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getProductBySlug } from "../services/product.service";
import type { Product } from "../schemas/product.schema";

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
};

export const useProductBySlug = (slug: string | undefined) => {
  return useQuery<Product | undefined, Error>({
    queryKey: ["product", slug],
    queryFn: () => {
      if (!slug) throw new Error("Missing product slug");
      return getProductBySlug(slug);
    },
    enabled: !!slug,
  });
};
// export const useProductById = (id: number | undefined) => {
//   return useQuery<Product | undefined, Error>({
//     queryKey: ["product", id],
//     queryFn: () => {
//       if (id === undefined) throw new Error("Missing product ID");
//       return getProductBySlug(id.toString());
//     },
//     enabled: id !== undefined,
//   });
// };
