import { motion } from "framer-motion";
import Filter from "../../components/FilterBar/FilterBar";
import { useCharactersListPage } from "./hooks/useCharactersList";
import { CharacterCard, CharacterGrid } from "../../components/Character";

export default function CharactersList() {
  const { favoriteHouse, filter, navigate, ref, resetFavoriteHouse, setFavoriteHouse, setFilter, toggleFavorite, favorites, visibleCharacters } = useCharactersListPage();

  return (
    <motion.div
      className="w-full min-h-screen h-max flex flex-col items-center sm:pt-5 desktop-s:pt-20 bg-primary"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.5 }}
    >
      <Filter>
        <Filter.GroupLabel>
          Choose a Category:
        </Filter.GroupLabel>
        <Filter.Button active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </Filter.Button>
        <Filter.Button active={filter === "hogwartsStudent"} onClick={() => setFilter("hogwartsStudent")}>
          Students
        </Filter.Button>
        <Filter.Button active={filter === "hogwartsStaff"} onClick={() => setFilter("hogwartsStaff")}>
          Staff
        </Filter.Button>
        <Filter.Button active={filter === "favorites"} onClick={() => setFilter("favorites")}>
          Favorites
        </Filter.Button>
        <Filter.Select
          value={favoriteHouse}
          onChange={(e) => setFavoriteHouse(e.target.value)}
          options={["All Houses", "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]}
          onReset={() => {
            resetFavoriteHouse();
            setFilter("all");
          }}
        />
      </Filter>


      <CharacterGrid>
        {visibleCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            isFavorite={!!favorites[character.id]}
            toggleFavorite={toggleFavorite}
            onClick={() => navigate(`/character/${character.id}`)}
            isHighlighted={character.house === favoriteHouse}
          />
        ))}
      </CharacterGrid>
      <div ref={ref} className="w-full h-10 mt-4 bg-transparent" />
    </motion.div>
  );
}