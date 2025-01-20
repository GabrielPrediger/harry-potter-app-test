import { Character } from "../../../@types/Characters";

export const getCharacterInfo = (character: Character | undefined) => [
  { label: "Alternate Names", value: character?.alternate_names?.join(", ") || "-" },
  {
    label: "Wand",
    value: character?.wand
      ? `Wood: ${character?.wand.wood || "-"}, Core: ${character?.wand.core || "-"}, Length: ${character?.wand.length || "-"} cm`
      : "-",
  },
  { label: "Species", value: character?.species || "-" },
  { label: "Gender", value: character?.gender || "-" },
  { label: "House", value: character?.house || "-" },
  { label: "Date of Birth", value: character?.dateOfBirth || "-" },
  { label: "Year of Birth", value: character?.yearOfBirth || "-" },
  { label: "Wizard", value: character?.wizard !== undefined ? (character?.wizard ? "Yes" : "No") : "-" },
  { label: "Ancestry", value: character?.ancestry || "-" },
  { label: "Eye Colour", value: character?.eyeColour || "-" },
  { label: "Hair Colour", value: character?.hairColour || "-" },
  { label: "Patronus", value: character?.patronus || "-" },
  { label: "Hogwarts Student", value: character?.hogwartsStudent !== undefined ? (character?.hogwartsStudent ? "Yes" : "No") : "-" },
  { label: "Hogwarts Staff", value: character?.hogwartsStaff !== undefined ? (character?.hogwartsStaff ? "Yes" : "No") : "-" },
  { label: "Actor", value: character?.actor || "-" },
  { label: "Alternate Actors", value: character?.alternate_actors?.join(", ") || "-" },
  { label: "Alive", value: character?.alive !== undefined ? (character?.alive ? "Yes" : "No") : "-" },
];