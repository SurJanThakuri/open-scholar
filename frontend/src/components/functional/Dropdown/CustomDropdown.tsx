import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { CaretDown, MagnifyingGlass } from "@phosphor-icons/react";

interface DropdownOption {
  value: string | number;
  label: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  selectedValue: string | number | null;
  onChange: (value: string | number) => void;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  selectedValue,
  onChange,
  placeholder = "Select a community",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === selectedValue);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full max-w-xs">
      {/* Dropdown Button */}
      <button
        className="w-full flex items-center justify-between px-4 py-2 bg-gray-700 text-neutral-200 rounded-full focus:outline-none"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedOption ? (
          <span>{selectedOption.label}</span>
        ) : (
          <span className="text-neutral-400">{placeholder}</span>
        )}
        <CaretDown size={18} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="absolute mt-2 w-full bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-50"
        >
          {/* Search Input */}
          <div className="flex items-center px-3 py-2 border-b border-gray-600">
            <MagnifyingGlass size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search community..."
              className="w-full bg-transparent text-neutral-100 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Options List */}
          <ul className="max-h-60 overflow-auto">
            {options
              .filter((option) =>
                option.label.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((option) => (
                <li
                  key={option.value}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-700 text-neutral-200"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </li>
              ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default CustomDropdown;