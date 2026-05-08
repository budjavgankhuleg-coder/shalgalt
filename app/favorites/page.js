"use client";
import { useFavs } from "@/context/FavContext";
import Link from "next/link";

export default function FavoritesPage() {
  const { favs, toggleFav } = useFavs();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Миний хадгалсан бараанууд</h1>
      {favs.length === 0 ? (
        <p className="text-gray-500">Одоогоор хадгалсан бараа байхгүй байна.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {favs.map((p) => (
            <div
              key={p.id}
              className="bg-white p-4 rounded-lg shadow border relative"
            >
              <Link href={`/product/${p.id}`}>
                <img
                  src={p.image}
                  className="h-40 mx-auto object-contain mb-4"
                />
                <h2 className="text-sm font-medium truncate">{p.title}</h2>
                <p className="text-blue-600 font-bold">${p.price}</p>
              </Link>
              <button
                onClick={() => toggleFav(p)}
                className="mt-4 w-full py-1 text-sm text-red-500 border border-red-200 rounded hover:bg-red-50"
              >
                Устгах
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
