import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCharacterById } from "../../../services/getCharacterById";
import { Character } from "../../../@types/Characters";

export const useCharacterDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data: character, isLoading, isError, error } = useQuery({
    queryKey: ["character", id],
    queryFn: async () => {
      const response = await fetch(getCharacterById(id as string));
      const result = await response.json();
      return result[0] ? (result[0] as Character) : (result as Character);
    },
    enabled: !!id,
  });

  return { character, isLoading, isError, error };
};
