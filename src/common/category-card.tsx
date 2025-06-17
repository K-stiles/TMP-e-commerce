import { buttonVariants } from "@/components/button";
import Heading from "@/components/heading";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  path: string;
}

export default function CategoryCard({
  title,
  imageUrl,
  path,
}: CategoryCardProps) {
  return (
    <div className="h-72 items-stretch w-full flex flex-col rounded-lg  transition-transform duration-300">
      <div className="relative flex-1  flex items-center justify-center">
        <img
          src={imageUrl}
          alt="Category Card"
          className="w-50 object-contain absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4"
        />
      </div>

      <div className="flex-2/3 mt-auto self-end w-full bg-category-card-bg flex flex-col items-center justify-center gap-4 py-8 px-6 rounded-xl ">
        <Heading size={"h6"} className="pt-6">
          {title}
        </Heading>

        <Link
          to={path}
          className={cn(
            "flex items-center gap-2",
            buttonVariants({ variant: "ghost" })
          )}
        >
          <Heading size={"subtitle"} className="text-gray-400">
            Shop
          </Heading>
          <img
            src="/images/icons/btn-arrow.png"
            alt="button arrow icon"
            className="size-2 object-contain"
          />
        </Link>
      </div>
    </div>
  );
}
