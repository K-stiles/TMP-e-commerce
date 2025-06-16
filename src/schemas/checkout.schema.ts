import { z } from "zod";

export const checkoutSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(1, "Phone number is required"),
    address: z.string().min(1, "Address is required"),
    zip: z.string().min(1, "ZIP code is required"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
    paymentMethod: z.enum(["e-Money", "Cash on Delivery"]),
    eMoneyNumber: z.string().optional(),
    eMoneyPIN: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.paymentMethod === "e-Money") {
      if (!data.eMoneyNumber) {
        ctx.addIssue({
          code: "custom",
          message: "e-Money number is required",
          path: ["eMoneyNumber"],
        });
      }
      if (!data.eMoneyPIN) {
        ctx.addIssue({
          code: "custom",
          message: "e-Money PIN is required",
          path: ["eMoneyPIN"],
        });
      }
    }
  });

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
