import { cn } from "@/lib/utils";
import { Link } from "react-router";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/">
      <img
        src="/images/audiophile-logo.png"
        alt="logo"
        className={cn("w-28  object-contain", className)}
      />
    </Link>
  );
}
