import { useNavigate } from "react-router";
import { useCheckoutStore } from "../store/checkout-store";
import type { CheckoutFormData } from "../schemas/checkout.schema";
import CheckoutForm from "../components/forms/checkout-form";

export default function CheckoutPage() {
  const setCheckoutData = useCheckoutStore((state) => state.setData);
  const navigate = useNavigate();

  const handleSubmit = (data: CheckoutFormData) => {
    console.log("🚀 ~ handleSubmit ~ data:", data);
    setCheckoutData(data);
    navigate("/confirmation");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <CheckoutForm onSubmit={handleSubmit} />
    </div>
  );
}
