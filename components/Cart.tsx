"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { loadCart } from "@/redux/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    const saved = localStorage.getItem("cart");

    if (saved) {
      dispatch(loadCart(JSON.parse(saved)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 sticky top-6">
      <h2 className="text-2xl font-bold mb-4">Cart ({items.length})</h2>

      {items.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <p className="text-5xl mb-3">🛒</p>
          <p>Your cart is empty</p>
          <p className="text-sm mt-2">Add some products to begin.</p>
        </div>
      ) : (
        <>
          <div className="space-y-3 mb-5">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="border-t pt-4">
            <p className="font-semibold text-lg">Total: ${total}</p>

            <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
