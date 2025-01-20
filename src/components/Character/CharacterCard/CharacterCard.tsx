import { motion } from "framer-motion";
import { MdFavorite, MdFavoriteBorder, MdOutlineImageNotSupported } from "react-icons/md";
import { getFavoriteHousesStyles, getHousesStyles } from "../../../utils/housesColors";
import { CharacterCardProps } from "./@types";

export const CharacterCard = ({ character, isFavorite, isHighlighted, toggleFavorite, onClick }: CharacterCardProps) => {
  return (
    <motion.div
      className={`z-10 relative sm:w-40 tablet-mm:w-72 sm:h-full tablet-mm:h-[21rem] rounded-2xl cursor-pointer ${isHighlighted ? `animated-border ${getFavoriteHousesStyles(character.house)}` : "hover:opacity-95"
        } ${getHousesStyles(character.house)}`}
      whileHover={{ scale: isHighlighted ? 1.08 : 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      onClick={onClick}
    >
      <div className="inner">
        <p className="font-bold py-3 sm:text-base tablet-mm:text-lg text-center">{!character.house ? "No house" : character.house}</p>
        {character.image ? (
          <img
            src={character.image}
            className="mx-auto rounded-md sm:size-32 tablet-mm:size-56 object-cover"
            alt={character.name}
          />
        ) : (
          <MdOutlineImageNotSupported
            className="mx-auto rounded-md sm:size-32 tablet-mm:size-56 object-cover"
            size={192}
          />
        )}
        <div className="flex sm:pb-4 sm:flex-col tablet-mm:flex-row items-center px-7 justify-between">
          <h3 className="text-center py-2 font-semibold sm:text-base tablet-mm:text-lg">
            {character.name}
          </h3>
          <motion.div
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(character.id);
            }}
            className="cursor-pointer z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {isFavorite ? (
              <MdFavorite className="text-red-500" size={24} />
            ) : (
              <MdFavoriteBorder className="text-gray-500" size={24} />
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )

}