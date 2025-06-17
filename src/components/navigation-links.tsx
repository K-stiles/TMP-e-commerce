import { Link } from "react-router";
import Heading from "./heading";
import { cn } from "@/lib/utils";

export interface RouteType {
  name: string;
  path: string;
}

interface NavigationLinksProps {
  routes: RouteType[];
  className?: HTMLDivElement["className"];
  linkStyles?: HTMLDivElement["className"];
}

export default function NavigationLinks({
  routes,
  className,
  linkStyles,
}: NavigationLinksProps) {
  return (
    <span className={cn(className, "flex items-center gap-4")}>
      {routes.map((route: RouteType) => (
        <Link
          key={route.name}
          to={route.path}
          className="text-sm font-semibold hover:text-primary transition-colors ease-in duration-300"
        >
          <Heading className={cn(linkStyles)} size={"nav-link"}>
            {route.name}
          </Heading>
        </Link>
      ))}
    </span>
  );
}
