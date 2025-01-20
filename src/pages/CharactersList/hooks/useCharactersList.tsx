import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useInView } from "react-intersection-observer";
import { useQuery } from "@tanstack/react-query";

import { getCharacters } from "../../../services/getCharacters";
import { Character } from "../../../@types/Characters";
import { useFavoriteCharactersContext } from "../../../hooks/useFavoriteCharactersContext/useFavoriteCharacters";
import { useFavoriteHouse } from "../../../hooks/useFavorteHouseContext/useFavoriteHouse";

export const useCharactersListPage = () => {
  const [visibleCharacters, setVisibleCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<"all" | "hogwartsStudent" | "hogwartsStaff" | "favorites">("all");

  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavoriteCharactersContext();
  const { favoriteHouse, setFavoriteHouse, resetFavoriteHouse } = useFavoriteHouse();
  const { ref, inView } = useInView({ threshold: 0.5 });

  const itemsPerPage = 20;
  
  const { data, isLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const response = await fetch(getCharacters);
      return (await response.json()) as Character[];
    },
  });

  useEffect(() => {
    if (data) {
      let filteredData = data;
      if (filter === "hogwartsStudent") filteredData = data.filter((char) => char.hogwartsStudent);
      if (filter === "hogwartsStaff") filteredData = data.filter((char) => char.hogwartsStaff);
      if (filter === "favorites") filteredData = data.filter((char) => favorites[char.id]);
      setVisibleCharacters(filteredData.slice(0, currentPage * itemsPerPage));
    }
  }, [data, filter, currentPage, favorites]);

  useEffect(() => {
    if (inView && !isLoading && visibleCharacters.length < (data?.length || 0)) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [inView, isLoading, visibleCharacters, data]);


return {
  filter,
  setFilter,
  navigate,
  toggleFavorite,
  favoriteHouse,
  setFavoriteHouse,
  resetFavoriteHouse,
  ref,
  inView,
  visibleCharacters,
  favorites,
}
}