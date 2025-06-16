import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentMethod: "e-Money" | "Cash on Delivery";
  eMoneyNumber?: string;
  eMoneyPIN?: string;
}

interface CheckoutState {
  data: CheckoutFormData | null;
  setData: (data: CheckoutFormData) => void;
  clear: () => void;
}

export const useCheckoutStore = create<CheckoutState>()(
  persist(
    (set) => ({
      data: null,
      setData: (data) => set({ data }),
      clear: () => set({ data: null }),
    }),
    {
      name: "checkout-storage",
    }
  )
);
