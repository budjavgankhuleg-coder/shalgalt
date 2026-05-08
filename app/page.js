"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useFavs } from "@/context/FavContext";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const { favs, toggleFav } = useFavs();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p) => {
        const isFav = favs.some((f) => f.id === p.id);
        return (
          <div
            key={p.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md relative border"
          >
            <Link href={`/product/${p.id}`}>
              <img
                src={p.image}
                className="h-40 mx-auto object-contain mb-4"
                alt=""
              />
              <h2 className="text-sm font-medium h-10 overflow-hidden mb-2">
                {p.title}
              </h2>
              <p className="text-blue-600 font-bold">${p.price}</p>
            </Link>
            <button
              onClick={() => toggleFav(p)}
              className={`absolute top-2 right-2 p-1 rounded-full border ${isFav ? "bg-yellow-400 border-yellow-500" : "bg-gray-100"}`}
            >
              {isFav ? "★" : "☆"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
