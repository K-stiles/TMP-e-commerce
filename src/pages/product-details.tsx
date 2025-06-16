import { useParams } from "react-router";
import { useProductBySlug } from "../hooks/api.hook";
import { useState } from "react";
import { useCartStore } from "../store/cart-store";

export default function ProductPage() {
  const { id: slug } = useParams();
  const { data: product, isLoading, error } = useProductBySlug(slug);
  const addToCart = useCartStore((state) => state.addToCart);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) return <p className="p-4">Loading product...</p>;
  if (error || !product)
    return <p className="p-4 text-red-500">Product not found.</p>;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image.desktop,
      quantity,
    });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <img
        src={product.image.desktop}
        alt={product.name}
        className="w-full h-auto rounded"
      />

      <div className="mt-4">
        {product.new && (
          <span className="text-sm text-orange-500 uppercase">New Product</span>
        )}
        <h1 className="text-2xl font-bold mt-2">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-lg font-semibold mt-4">
          ${product.price.toLocaleString()}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-20 px-2 py-1 border rounded text-center"
          />
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-4 py-2 rounded hover:bg-opacity-80"
          >
            Add to Cart
          </button>
        </div>

        <h2 className="text-xl font-semibold mt-8">Features</h2>
        <p className="text-gray-700 whitespace-pre-line mt-2">
          {product.features}
        </p>

        <h2 className="text-xl font-semibold mt-8">In the Box</h2>
        <ul className="list-disc pl-5 mt-2">
          {product.includes.map((inc, index) => (
            <li key={index} className="text-gray-600">
              <span className="font-medium">{inc.quantity}x</span> {inc.item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
