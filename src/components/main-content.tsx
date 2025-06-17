import { Link } from "react-router";
import type { Product } from "../schemas/product.schema";
import { useProducts } from "../hooks/api.hook";
import Landing from "./landing-page copy";

export default function MainContent() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <p className="p-4">Loading products...</p>;
  if (error) return;
  return (
    <>
      <section className="flex items-center lg:items-start min-h-screen justify-between w-full px-0 md:px-10 bg-background">
        <Landing />
      </section>

      <section>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
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
