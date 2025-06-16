import axios from "axios";
import {
  productListingSchema,
  type Product,
  type ProductListing,
} from "../schemas/product.schema";

const API_BASE_URL = "http://localhost:5000";

export const getAllProducts = async (): Promise<ProductListing> => {
  const response = await axios.get<ProductListing>(`${API_BASE_URL}/products`);
  return productListingSchema.parse(response.data);
};

export const getProductBySlug = async (
  slug: string
): Promise<Product | undefined> => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  const parsed = productListingSchema.parse(response.data);
  return parsed.find((product: Product) => product.slug === slug);
};
