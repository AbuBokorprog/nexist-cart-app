"use client";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10 text-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Nexist Shopping Cart
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ProductList />
          </div>

          <div>
            <Cart />
          </div>
        </div>
      </div>
    </main>
  );
}
