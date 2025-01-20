export const getHousesStyles = (house: string | undefined): string => {
  switch (house) {
    case "Gryffindor":
      return "bg-griffindor-red/50 text-griffindor-gold";
    case "Hufflepuff":
      return "bg-hufflepuff-yellow text-hufflepuff-black";
    case "Ravenclaw":
      return "bg-ravenclaw-blue text-ravenclaw-bronze";
    case "Slytherin":
      return "bg-slytherin-green text-slytherin-silver";
    default:
      return "bg-gray-800 text-gray-200";
  }
};

export const getFavoriteHousesStyles = (house: string | undefined): string => {
  switch (house) {
    case "Gryffindor":
      return "griffindor";
    case "Hufflepuff":
      return "hufflepuff text-white";
    case "Ravenclaw":
      return "ravenclaw";
    case "Slytherin":
      return "slytherin";
    default:
      return "";
  }
};