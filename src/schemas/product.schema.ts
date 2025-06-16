import * as z from "zod";

const CategoryImageSchema = z.object({
  mobile: z.string(),
  tablet: z.string(),
  desktop: z.string(),
});
// type CategoryImage = z.infer<typeof CategoryImageSchema>;

const GallerySchema = z.object({
  first: CategoryImageSchema,
  second: CategoryImageSchema,
  third: CategoryImageSchema,
});
// type Gallery = z.infer<typeof GallerySchema>;

const IncludeSchema = z.object({
  quantity: z.number(),
  item: z.string(),
});
// type Include = z.infer<typeof IncludeSchema>;

const OtherSchema = z.object({
  slug: z.string(),
  name: z.string(),
  image: CategoryImageSchema,
});
// type Other = z.infer<typeof OtherSchema>;

export const ProductSchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  image: CategoryImageSchema,
  category: z.string(),
  categoryImage: CategoryImageSchema,
  new: z.boolean(),
  price: z.number(),
  description: z.string(),
  features: z.string(),
  includes: z.array(IncludeSchema),
  gallery: GallerySchema,
  others: z.array(OtherSchema),
});

export type Product = z.infer<typeof ProductSchema>;

export const productListingSchema = z.array(ProductSchema);
export type ProductListing = z.infer<typeof productListingSchema>;
