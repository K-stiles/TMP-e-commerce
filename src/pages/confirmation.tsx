import { Link, useNavigate } from "react-router";
import { useCheckoutStore } from "../store/checkout-store";
import { useCartStore } from "../store/cart-store";

export default function ConfirmationPage() {
  const { data, clear: clearCheckout } = useCheckoutStore();
  const { items, total, clearCart } = useCartStore();

  const navigate = useNavigate();

  function backToHome() {
    clearCart();
    clearCheckout();
    navigate("/");
  }

  if (!data) {
    return (
      <div className="p-4 text-center">
        <p>Order not found.</p>
        <Link to="/" className="text-blue-600 underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold text-green-600 mb-2">
        Thank you for your order!
      </h1>
      <p className="text-gray-600 mb-4">
        Your order has been successfully placed.
      </p>

      <div className="border rounded-lg overflow-hidden shadow-sm">
        <div className="bg-gray-100 p-4 text-left">
          <h2 className="font-semibold mb-2">Order Summary</h2>
          <ul className="text-sm space-y-2">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>${(item.price * item.quantity).toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white px-4 py-3 border-t text-right">
          <p className="text-sm text-gray-600">
            Total: <strong>${total().toLocaleString()}</strong>
          </p>
        </div>
      </div>

      <Link
        to="/"
        className="inline-block mt-6 bg-black text-white px-6 py-2 rounded hover:bg-opacity-90"
      >
        <button
          onClick={backToHome}
          type="button"
          className="focus:outline-none"
        >
          Back to Home
        </button>
      </Link>
    </div>
  );
}
