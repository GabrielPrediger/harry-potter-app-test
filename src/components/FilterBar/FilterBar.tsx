import { useEffect, useState } from "react";
import { FilterButtonProps, FilterProps, FilterSelectProps } from "./@types";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useIsMobile } from "../../hooks/useMobile/useMobile";

const Filter = ({ children }: FilterProps) => {
  const isMobile = useIsMobile(1023);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const toggleFiltersVisibility = () => {
    setIsFiltersVisible((prev) => !prev);
  };

  useEffect(() => {
    if (!isMobile) {
      setIsFiltersVisible(true);
    }
  }, [isMobile]);

  return (
    <div className="w-full flex flex-col mb-10">
      {isMobile && (
        <div
          onClick={() => toggleFiltersVisibility()}
          className="sm:relative w-full px-5 tablet-mm:px-12 flex items-center justify-between mx-auto tablet-mm::hidden"
        >
          <p>Filters</p>
          {isFiltersVisible ? (
            <IoMdArrowDropup size={27} />
          ) : (
            <IoMdArrowDropdown size={27} />
          )}
        </div>
      )}
      <AnimatePresence initial={false}>
        {isFiltersVisible && (
          <motion.div
            className="flex flex-col items-center desktop-p:px-0 desktop-p:w-max desktop-p:flex-row sm:w-full gap-6 px-10 desktop-p:mx-auto"
            initial={{ opacity: 0, y: -30, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -30, height: 0 }}
            transition={{
              ease: "easeInOut",
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

Filter.Button = ({ active, onClick, children }: FilterButtonProps) => (
  <button
    onClick={onClick}
    className={`bg-secondary sm:w-full desktop-p:px-5 flex items-center justify-center text-yellow-500 desktop-p:w-max py-2 rounded-full transition-all ${active ? "border-2 border-yellow-500 shadow-md" : "hover:opacity-85"}`}
  >
    {children}
  </button>
);

Filter.Select = ({ value, options, onChange, onReset }: FilterSelectProps) => (
  <div className="flex desktop-p:flex-row w-full sm:flex-col items-start sm:items-center gap-2 sm:gap-4">
    <label className="text-yellow-500 sm:w-max desktop-s:w-48 font-semibold">Filter by House:</label>
    <div className="relative flex w-full items-center">
      <div className="flex sm:w-full desktop-s:w-max items-center relative">
        <select
          value={value}
          onChange={onChange}
          className="bg-secondary text-yellow-500 rounded-full border border-yellow-500 hover:opacity-85 focus:ring-2 focus:ring-yellow-500 transition-all sm:w-full desktop-p:pr-10 px-4 py-2 desktop-p:w-max appearance-none"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="absolute sm:right-3 desktop-s:right-3 text-yellow-500 pointer-events-none">
          <IoMdArrowDropdown size={27} />
        </span>
      </div>
      {value && (
        <button
          onClick={onReset}
          className="text-white text-sm px-3 py-1 rounded-full hover:bg-yellow-600 transition-all"
        >
          Reset
        </button>
      )}
    </div>
  </div>
);

Filter.GroupLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col sm:mt-10 tablet-mm:mt-0 items-center">
    <label className="text-yellow-500 font-semibold w-max">{children}</label>
  </div>
);

export default Filter;
