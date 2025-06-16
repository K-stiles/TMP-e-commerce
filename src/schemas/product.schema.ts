import { z } from "zod";

export const imageSetSchema = z.object({
  mobile: z.string(),
  tablet: z.string(),
  desktop: z.string(),
});

export const includeItemSchema = z.object({
  quantity: z.number(),
  item: z.string(),
});

export const productSchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  image: imageSetSchema,
  category: z.string(),
  categoryImage: imageSetSchema,
  new: z.boolean(),
  price: z.number(),
  description: z.string(),
  features: z.string(),
  includes: z.array(includeItemSchema),
  gallery: z.object({
    first: imageSetSchema,
    second: imageSetSchema,
    third: imageSetSchema,
  }),
  others: z.array(
    z.object({
      slug: z.string(),
      name: z.string(),
      image: imageSetSchema,
    })
  ),
});

export const productListSchema = z.array(productSchema);
export type Product = z.infer<typeof productSchema>;
