import { useContext } from "react";
import { FavoriteHouseContext } from "../../contexts/FavorteHouseContext";
import { HouseContextType } from "../../@types/FavoriteHouseContext";

export const useFavoriteHouse = (): HouseContextType => {
  const context = useContext(FavoriteHouseContext);
  if (!context) {
    throw new Error("useHouse must be used within a HouseProvider");
  }
  return context;
};