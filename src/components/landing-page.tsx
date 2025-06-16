import Heading from "./heading";
import { Button } from "./button";
import { Link } from "react-router";
import type { Product } from "../schemas/product.schema";
import { useProducts } from "../hooks/api.hook";
import OverlineText from "./overline";

export default function LandingPage() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <p className="p-4">Loading products...</p>;
  if (error) return;
  return (
    <div>
      <section className="flex items-center justify-between w-full  px-10">
        <div className="flex-1 w-1/2">
          <OverlineText className="text-white">NEW PRODUCT</OverlineText>
          <Heading size={"h2"}>XX99 Mark II Headphones</Heading>
          <p className="text-white/70 mt-4 mb-6 w-2/3">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button className={"bg-[var(--primary)]"}>See Product</Button>
        </div>
        <div className="flex-1 w-1/2 ">
          <img
            src="/public/images/Bitmap.png"
            alt="head phone image"
            className="w-full object-cover"
          />
        </div>
      </section>
      <section>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border border-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <Link to={`/products/${product.slug}`}>
        <img
          src={product.image.desktop}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            {product.category}
          </p>
          <h2 className="text-lg font-semibold mt-1">{product.name}</h2>
          <p className="text-sm text-gray-600 mt-1">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </div>
  );
};
