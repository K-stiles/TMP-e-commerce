import type { Product } from "@/schemas/product.schema";
import { Link } from "react-router";

export const ProductCard = ({ product }: { product: Product }) => {
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
