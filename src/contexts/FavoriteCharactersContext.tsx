import React, { createContext, useEffect, useState } from "react";
import { FavoriteCharactersContextProps } from "../@types/FavoriteCharactersContext";

export const FavoriteCharactersContext = createContext<FavoriteCharactersContextProps | undefined>(undefined);

export const FavoriteCharactersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : {};
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <FavoriteCharactersContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteCharactersContext.Provider>
  );
};