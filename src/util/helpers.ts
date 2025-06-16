export const SHIPPING_COST = 50;
export const VAT_RATE = 0.2; // 20%

export const calculateSubtotal = (
  items: { price: number; quantity: number }[]
) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

export const calculateVAT = (subtotal: number) => {
  return subtotal * VAT_RATE;
};

export const calculateTotal = (subtotal: number) => {
  return subtotal + SHIPPING_COST + calculateVAT(subtotal);
};
