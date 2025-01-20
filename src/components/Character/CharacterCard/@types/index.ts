import { Character } from "../../../../@types/Characters";

export interface CharacterCardProps {
  character: Character;
  isFavorite: boolean;
  isHighlighted: boolean;
  toggleFavorite: (id: string) => void;
  onClick: () => void;
}