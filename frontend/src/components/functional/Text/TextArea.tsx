import React from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface TextareaProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  labelStyle?: string;
  register: UseFormRegister<T>;
  validation?: Record<string, unknown>;
  icon?: React.ReactNode;
  rows?: number;
  labelSecondaryText?: string;
}

const TextArea = <T extends FieldValues>({
  name,
  label,
  placeholder,
  disabled,
  className,
  labelStyle,
  register,
  icon,
  rows = 5,
  labelSecondaryText,
  required,
}: TextareaProps<T>) => {
  return (
    <div className={`input-container relative ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`block text-sm lg:text-base font-normal text-gray-300 text-nowrap ${labelStyle}`}
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
          {labelSecondaryText && (
            <span className="text-gray-400 text-sm ml-1">
              ({labelSecondaryText})
            </span>
          )}
        </label>
      )}
      <textarea
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        className={`mt-3 block w-full px-7 py-3 ${icon && "pl-14"}
          bg-[#2A3236] border border-gray-600 text-gray-300 rounded-md shadow-sm
          focus:outline-none sm:text-sm placeholder-gray-400 
          focus:border-gray-400 focus:ring-0
          disabled:bg-[#1E252B] disabled:text-gray-500 disabled:cursor-not-allowed
        `}
        {...register(name)}
        rows={rows}
      />
      {icon && (
        <div className="icon absolute left-7 top-10 cursor-pointer text-gray-400">
          {icon}
        </div>
      )}
    </div>
  );
};

export default TextArea;