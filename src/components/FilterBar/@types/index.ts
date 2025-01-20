export type FilterType = "all" | "hogwartsStudent" | "hogwartsStaff" | "favorites";

export interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export interface FilterProps {
  children: React.ReactNode;
}

export interface FilterSelectProps {
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onReset: () => void;
}