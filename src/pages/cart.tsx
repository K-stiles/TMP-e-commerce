import { Link } from "react-router";
import { useCartStore } from "../store/cart-store";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, total } =
    useCartStore();

  if (items.length === 0) {
    return (
      <div className="p-4 text-center">
        <p>Your cart is empty.</p>
        <Link to="/" className="text-blue-600 underline mt-2 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      <ul className="divide-y">
        {items.map((item) => (
          <li
            key={item.id}
            className="py-4 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">
                  ${item.price.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
                className="w-16 border rounded px-2 py-1 text-center"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t pt-4 text-right">
        <p className="text-lg font-semibold">
          Total: ${total().toLocaleString()}
        </p>
        <div className="mt-4 flex justify-end gap-3">
          <button onClick={clearCart} className="bg-gray-100 px-4 py-2 rounded">
            Clear Cart
          </button>
          <Link
            to="/checkout"
            className="bg-black text-white px-4 py-2 rounded hover:bg-opacity-90"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
