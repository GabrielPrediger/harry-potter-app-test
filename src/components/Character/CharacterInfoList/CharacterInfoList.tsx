import { CharacterInfoCard } from "../CharacterInfoCard";
import { CharacterInfoListProps } from "./@types";
import { getCharacterInfo } from "./utils/characterInfo";

export const CharacterInfoList = ({ character }: CharacterInfoListProps) => {
  const characterInfo = getCharacterInfo(character);

  return (
    <div className="character-info grid grid-cols-2 gap-6">
      {characterInfo.map((info, index) => (
        <CharacterInfoCard key={index} label={info.label} value={String(info.value)} house={character?.house} />
      ))}
    </div>
  );
};
