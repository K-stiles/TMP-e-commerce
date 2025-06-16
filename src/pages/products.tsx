import { useSearchParams } from "react-router";

export default function Product() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  return <div className="p-4">Product Page - {productId}</div>;
}
