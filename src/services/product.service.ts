import axios from "axios";
import { productListSchema, type Product } from "../schemas/product.schema";

const API_BASE_URL = "http://localhost:5000";

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return productListSchema.parse(response.data);
};

export const getProductBySlug = async (
  slug: string
): Promise<Product | undefined> => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  const parsed = productListSchema.parse(response.data);
  return parsed.find((product) => product.slug === slug);
};
