"use client";

import { Product } from "@/types/product";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/cartSlice";

export default function CartItem({ item }: { item: Product }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-gray-50 rounded-xl p-3">
      <div>
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-gray-500">${item.price}</p>
      </div>

      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Remove
      </button>
    </div>
  );
}
