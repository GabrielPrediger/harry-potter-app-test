import { MdOutlineImageNotSupported } from "react-icons/md";
import { CharacterImageProps } from "./@types";

export const CharacterImage = ({ character }: CharacterImageProps) => {
  return character?.image ? (
    <img
      src={character?.image}
      className="sm:w-52 sm:h-52 sm:mb-10 px-4 tablet-mm:w-80 tablet-mm:h-80 object-cover rounded-lg shadow-lg"
      alt={`${character?.name}`}
    />
  ) : (
    <MdOutlineImageNotSupported className="rounded-md object-cover" size={320} />
  );
};
