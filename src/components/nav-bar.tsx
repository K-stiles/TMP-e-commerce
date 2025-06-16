import { Link } from "react-router";
import { useCartStore } from "../store/cart-store";
import Heading from "./heading";

export default function NavBar() {
  const items = useCartStore((state) => state.items);
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  const routes = [
    { name: "home", path: "/" },
    { name: "headphones", path: "/headphones" },
    { name: "speakers", path: "/speakers" },
    { name: "earphones", path: "/earphones" },
  ];

  return (
    <div className="text-white w-full  p-4 bg-[var(--neutral-950)] ">
      <div className="max-w-7xl mx-auto flex justify-between items-center border-b border-[var(--neutral-100)] px-10 py-4">
        <div>
          <Link to="/" className="text-xl font-bold">
            <img
              src="/images/audiophile-logo.png"
              alt="logo"
              className="w-28 object-contain"
            />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          {routes.map((route) => (
            <Link
              key={route.name}
              to={route.path}
              className="text-sm font-semibold hover:text-[var(--color-primary)] transition-colors"
            >
              <Heading size={"subtitle"}>{route.name}</Heading>
            </Link>
          ))}
        </div>
        <div>
          <Link to="/cart" className="relative">
            🛒
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalQty}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
