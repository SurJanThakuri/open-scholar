import Select, { StylesConfig, GroupBase, MultiValue } from "react-select";
import { UseFormRegister, FieldValues, Path, Controller } from "react-hook-form";

interface DropdownOption {
  value: number | string;
  label: string;
}

interface DropdownProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  labelSecondaryText?: string;
  placeholder?: string;
  options: DropdownOption[];
  required?: boolean;
  disabled?: boolean;
  className?: string;
  labelStyle?: string;
  selectClassName?: string;
  isSearchable?: boolean;
  multiDropdown?: boolean;
  register: UseFormRegister<T>;
  control: any;
  validation?: Record<string, unknown>;
  error?: string;
}

const Dropdown = <T extends FieldValues>({
  name,
  label,
  labelSecondaryText,
  placeholder,
  options,
  required,
  disabled = false,
  className,
  labelStyle,
  selectClassName = "",
  isSearchable = true,
  multiDropdown = false,
  // register,
  control,
  validation = {},
  // error,
}: DropdownProps<T>) => {
  const customStyles: StylesConfig<DropdownOption, false | true, GroupBase<DropdownOption>> = {
    control: (base) => ({
      ...base,
      borderColor: "#4B5563", // Do not change border color on error
      backgroundColor: "#2A3236",
      color: "#E5E7EB",
      padding: "4px 10px",
      borderRadius: "8px",
      minHeight: "44px",
      "&:hover": {
        borderColor: "#6B7280",
      },
    }),
    menu: (base) => ({
      ...base,
      zIndex: 9999,
      backgroundColor: "#1E252B",
      border: "1px solid #4B5563",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    }),
    option: (base, state) => ({
      ...base,
      color: state.isSelected ? "#FFFFFF" : "#E5E7EB",
      backgroundColor: state.isSelected ? "#3B82F6" : state.isFocused ? "#12171C" : "transparent",
      padding: "10px",
      fontSize: "14px",
      fontWeight: "400",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#12171C",
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "#E5E7EB",
      fontSize: "14px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#9CA3AF",
      fontSize: "14px",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#9CA3AF",
      "&:hover": {
        color: "#E5E7EB",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    input: (base) => ({
      ...base,
      color: "#E5E7EB",
    }),
  };

  return (
    <div className={`dropdown-container relative ${className}`}>
      {label && (
        <label htmlFor={name} className={`text-sm lg:text-base font-normal text-grey ${labelStyle} flex items-center`}>
          {label}
          {required && <span className="text-red-500"> *</span>}
          {labelSecondaryText && <span className="text-grey-light text-sm ml-1">({labelSecondaryText})</span>}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({ field }) => (
          <>
            <Select
              {...field}
              options={options}
              value={
                multiDropdown
                  ? options.filter((option) => Array.isArray(field.value) && field.value.includes(option.value))
                  : options.find((option) => option.value === field.value) || null
              }
              onChange={(selectedOption) => {
                let newValue;
                if (multiDropdown) {
                  newValue = selectedOption
                    ? (selectedOption as MultiValue<DropdownOption>).map((option) => option.value)
                    : [];
                } else {
                  newValue = selectedOption ? (selectedOption as DropdownOption).value : "";
                }
                field.onChange(newValue);
              }}
              styles={customStyles}
              className={`${selectClassName}`}
              classNamePrefix="react-select"
              isSearchable={isSearchable}
              placeholder={placeholder}
              isDisabled={disabled}
              isMulti={multiDropdown}
            />
          </>
        )}
      />
    </div>
  );
};

export default Dropdown;