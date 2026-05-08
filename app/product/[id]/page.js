"use client";
import { useEffect, useState } from "react";
import { useFavs } from "@/context/FavContext";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const { id } = useParams();
  const [p, setP] = useState(null);
  const { favs, toggleFav } = useFavs();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setP(data));
  }, [id]);

  if (!p) return <p>Уншиж байна...</p>;

  const isFav = favs.some((f) => f.id === p.id);

  return (
    <div className="flex flex-col md:flex-row gap-10 bg-white p-8 rounded-2xl shadow-sm border">
      <img
        src={p.image}
        className="w-full md:w-1/3 h-80 object-contain hover:scale-110 transition"
      />
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">{p.title}</h1>
        <p className="text-gray-500 mb-6 uppercase text-xs tracking-widest">
          {p.category}
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">{p.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-blue-700">${p.price}</span>
          <button
            onClick={() => toggleFav(p)}
            className={`px-6 py-2 rounded-lg font-bold transition ${isFav ? "bg-yellow-400" : "bg-blue-600 text-white"}`}
          >
            {isFav ? "★ Хадгалсан" : "Хадгалах"}
          </button>
        </div>
      </div>
    </div>
  );
}
