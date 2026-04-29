"use client";

import { Product } from "@/types/product";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { RootState } from "@/redux/store";

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const exists = cartItems.find((item) => item.id === product.id);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-5">
      <div className="h-36 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-gray-500">
        Product Image
      </div>

      <h3 className="text-lg font-semibold">{product.name}</h3>

      <p className="text-gray-500 mb-4">${product.price}</p>

      <button
        disabled={!!exists}
        onClick={() => dispatch(addToCart(product))}
        className={`w-full py-2 rounded-xl font-medium transition ${
          exists
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
        }`}
      >
        {exists ? "Already Added" : "Add to Cart"}
      </button>
    </div>
  );
}
