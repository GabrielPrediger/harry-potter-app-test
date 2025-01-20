import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useCharacterDetails } from "./hooks/useCharacterDetails";
import { getHousesStyles } from "../../utils/housesColors";
import { CharacterImage, CharacterInfoList } from "../../components/Character";


export default function CharacterDetails() {
  const { character, isLoading } = useCharacterDetails();
  const navigate = useNavigate();

  const handleBackButton = () => navigate(`/characters`);

  return (
    <div>
      <div
        className={`flex relative items-center justify-center w-full h-48 rounded-b-2xl ${getHousesStyles(character?.house)}`}
      >
        <FaArrowLeft
          onClick={handleBackButton}
          className="sm:top-5 sm:left-5 absolute left-10 cursor-pointer hover:opacity-90"
          size={30}
        />
        <h1 className="font-harry pt-10 text-6xl font-bold">{character?.name}</h1>
      </div>
      <div className="flex px-4 sm:items-center tablet-mm:items-start sm:flex-col tablet-mm:flex-row justify-center my-10">
        {isLoading ? (
          <div className="flex items-center justify-center text-5xl">Loading...</div>
        ) : (
          <React.Fragment>
            <CharacterImage character={character} />
            <CharacterInfoList character={character} />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
