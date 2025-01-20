import { getHousesStyles } from "../../../utils/housesColors";
import { CharacterInfoCardProps } from "./@types";

export const CharacterInfoCard = ({ label, value, house }: CharacterInfoCardProps) => (
  <div className={`p-4 rounded-lg shadow-md transition ${getHousesStyles(house)}`}>
    <h3 className="text-sm font-bold text-white">{label}</h3>
    <p className="text-lg font-medium">{value}</p>
  </div>
);
