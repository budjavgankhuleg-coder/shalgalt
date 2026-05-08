"use client";
import { createContext, useContext, useEffect, useState } from "react";

const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favs") || "[]"));
  }, []);

  const toggleFav = (product) => {
    const updated = favs.find((p) => p.id === product.id)
      ? favs.filter((p) => p.id !== product.id)
      : [...favs, product];
    setFavs(updated);
    localStorage.setItem("favs", JSON.stringify(updated));
  };

  return (
    <FavContext.Provider value={{ favs, toggleFav }}>
      {children}
    </FavContext.Provider>
  );
};

export const useFavs = () => useContext(FavContext);
