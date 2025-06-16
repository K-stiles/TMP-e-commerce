import { Link } from "react-router";
import { useCartStore } from "../store/cart-store";

export default function Header() {
  const items = useCartStore((state) => state.items);
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Shop
        </Link>

        <Link to="/cart" className="relative">
          🛒
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalQty}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

// Add to src/App.tsx or your root layout file:
// import Header and place it above your <RouterProvider /> if not already done.
// Example:
// <Header />
// <RouterProvider router={router} />
