import React from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

export interface TextProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  labelSecondaryText?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  labelStyle?: string;
  seePassword?: () => void;
  inputClassName?: string;
  register: UseFormRegister<T>;
  validation?: Record<string, unknown>;
  icon?: React.ReactNode;
  eye?: React.ReactNode;
  inputBg?: string;
  onClick?: () => void;
  autoComplete?: boolean;
}

const Text = <T extends FieldValues>({
  name,
  label,
  labelSecondaryText,
  type = "text",
  placeholder,
  disabled,
  className,
  labelStyle,
  seePassword,
  register,
  required,
  icon,
  eye,
  inputClassName = "mt-3 px-7 py-3",
  onClick,
  autoComplete = true,
}: TextProps<T>) => {
  const isFileType = type === "file";

  return (
    <div className={`input-container relative ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`text-sm lg:text-base font-normal text-gray-300 text-nowrap flex ${labelStyle} items-center`}
        >
          {label}
          {required && <p className="text-red-500"> *</p>}
          {labelSecondaryText && (
            <span className="text-gray-400 text-sm ml-1">
              ({labelSecondaryText})
            </span>
          )}
        </label>
      )}

      <input
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        onClick={onClick}
        className={`
          block w-full ${className} ${inputClassName} ${icon && "pl-14"}
          ${isFileType ? "" : `border border-gray-600 bg-[#2A3236]`}
          text-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm
          placeholder-gray-400 
          focus:border-gray-400 focus:ring-0
          disabled:bg-[#1E252B] disabled:text-gray-500 disabled:cursor-not-allowed
        `}
        {...register(name, { valueAsNumber: type === "number" })}
        autoComplete={autoComplete ? "on" : "off"}
      />

      {icon && (
        <div className="icon absolute left-5 top-[49px] cursor-pointer text-gray-400">
          {icon}
        </div>
      )}

      {eye && (
        <button
          type="button"
          onClick={seePassword}
          className="icon absolute right-6 top-[50px] cursor-pointer text-gray-400"
        >
          {eye}
        </button>
      )}
    </div>
  );
};

export default Text;