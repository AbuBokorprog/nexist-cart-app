import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Products</h2>

      <div className="grid sm:grid-cols-2 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
