import { useState } from "react";
import { CaretDown, Check } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const SortDropdown = () => {
  const [selected, setSelected] = useState("Popular");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Popular", "Recent"];

  return (
    <div className="relative flex justify-center items-center">
      <p className="text-text-light text-sm text-nowrap">Sort by :</p>
      <div className="relative cursor-pointer">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-2 flex items-center gap-1 font-medium text-text-light outline-none cursor-pointer"
        >
          {selected}
          <CaretDown size={16} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -5 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              className="absolute mt-2 w-32 bg-primary-dark text-text-light shadow-lg rounded-lg overflow-hidden border border-primary-light"
            >
              {options.map((option) => (
                <div
                  key={option}
                  className={`flex justify-between items-center px-4 py-2 cursor-pointer transition-colors ${
                    selected === option
                      ? "bg-primary-light text-white"
                      : "hover:bg-primary-light/70"
                  }`}
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                  {selected === option && <Check size={16} />}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SortDropdown;