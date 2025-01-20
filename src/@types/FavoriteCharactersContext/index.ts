import { ReactNode } from "react";

export interface FavoriteCharactersContextType {
  favorites: string[];
  setFavorite: (id: string) => void;
}

export interface FavoriteCharactersContextProviderProps {
  children: ReactNode;
}

export interface FavoriteCharactersContextProps {
  favorites: Record<string, boolean>;
  toggleFavorite: (id: string) => void;
}