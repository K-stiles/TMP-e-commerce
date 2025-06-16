import { useParams } from "react-router";
import { useProductBySlug } from "../hooks/api.hook";

export default function ProductDetailsPage() {
  const { id: slug } = useParams();
  const { data: product, isLoading, error } = useProductBySlug(slug);

  if (isLoading) return <p className="p-4">Loading product...</p>;
  if (error || !product)
    return <p className="p-4 text-red-500">Product not found.</p>;

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
