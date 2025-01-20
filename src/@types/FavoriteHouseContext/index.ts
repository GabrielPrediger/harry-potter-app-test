export interface HouseContextType {
  favoriteHouse: string;
  setFavoriteHouse: (house: string) => void;
  resetFavoriteHouse: () => void;
}