import React, { createContext, useEffect, useState } from "react";
import { HouseContextType } from "../@types/FavoriteHouseContext";

export const FavoriteHouseContext = createContext<HouseContextType | undefined>(undefined);

export const FavoriteHouseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteHouse, setFavoriteHouseState] = useState<string>(() => {
    const storedFavoritesHouses = localStorage.getItem("favoriteHouse");
    return storedFavoritesHouses ? JSON.parse(storedFavoritesHouses) : {};
  });

  const setFavoriteHouse = (house: string) => {
    setFavoriteHouseState(house);
  };

  useEffect(() => {
    localStorage.setItem("favoriteHouse", JSON.stringify(favoriteHouse));
  }, [favoriteHouse]);

  const resetFavoriteHouse = () => {
    setFavoriteHouseState("");
  };

  return (
    <FavoriteHouseContext.Provider value={{ favoriteHouse, setFavoriteHouse, resetFavoriteHouse }}>
      {children}
    </FavoriteHouseContext.Provider>
  );
};


