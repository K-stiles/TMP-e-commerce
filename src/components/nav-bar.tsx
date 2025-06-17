import { Link } from "react-router";
import { useCartStore } from "../store/cart-store";
import { Logo } from "./logo";
import NavigationLinks from "./navigation-links";
import { routesLinks } from "@/constats/route-links";

export default function NavBar() {
  const items = useCartStore((state) => state.items);
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="text-white w-full py-4 bg-background">
      <div className="max-w-6xl mx-auto w-full flex px-4 justify-between items-center border-b-[.1px] border-white/20  py-4">
        <div className="md:hidden">
          <img
            src="/images/icons/menu-icon.png"
            alt="menu icon"
            className="size-4 object-contain cursor-pointer"
          />
        </div>

        <Logo />

        <div className="gap-4 items-center hidden md:flex text-white">
          <NavigationLinks routes={routesLinks} />
        </div>
        <div>
          <Link to="/cart" className="relative">
            <img
              src="/images/icons/cart.png"
              alt="cart icon"
              className="size-5 object-contain"
            />
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
