import { useContext } from "react";
import { FavoriteCharactersContext } from "../../contexts/FavoriteCharactersContext";

export const useFavoriteCharactersContext = () => {
  const context = useContext(FavoriteCharactersContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};