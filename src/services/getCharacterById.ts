import { API_BASE_URL } from "./api";

export const getCharacterById = (id: string) => `${API_BASE_URL}/character/${id}`;
