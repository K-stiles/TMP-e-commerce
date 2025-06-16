import axios from "axios";
import { type Product, type ProductListing } from "../schemas/product.schema";

const API_BASE_URL = "http://localhost:5000";

export const getAllProducts = async (): Promise<ProductListing> => {
  const response = await axios.get<ProductListing>(`${API_BASE_URL}/products`);
  return response.data;
};

export const getProductBySlug = async (
  slug: string
): Promise<Product | undefined> => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  const items = response.data as ProductListing;
  return items.find((product: Product) => product.slug === slug);
};
