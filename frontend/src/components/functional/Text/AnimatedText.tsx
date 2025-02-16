import { FieldValues } from "react-hook-form";
import { TextProps } from "./Text";
import { useState } from "react";

const AnimatedText = <T extends FieldValues>({
    name,
    type = "text",
    placeholder,
    disabled,
    className,
    register,
    icon,
    inputClassName = "px-7 py-4",
    onClick,
    autoComplete = true,
}: TextProps<T>) => {
    const [value, setValue] = useState("");
    const isFileType = type === "file";
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const isFieldFilled = value !== "";
    

    return (
        <div className={`w-full min-w-[200px] ${className}`}>
            <div className="relative">
                <input
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    disabled={disabled}
                    onClick={onClick}
                    className={`peer w-full ${inputClassName} ${icon && "pl-14"} ${isFileType ? "" : "border border-gray-600 bg-[#2A3236]"} text-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm placeholder-transparent focus:border-gray-400 focus:ring-0 disabled:bg-[#1E252B] disabled:text-gray-500 disabled:cursor-not-allowed`}
                    {...register(name, { valueAsNumber: type === "number" })}
                    autoComplete={autoComplete ? "on" : "off"}
                    onChange={handleChange}
                />

                {placeholder && (
                    <label
                        htmlFor={name}
                        className={`absolute left-6 text-sm text-gray-400 transition-all transform origin-left 
            ${isFieldFilled ? "top-1 text-xs" : "top-4 text-sm"} 
            peer-focus:top-1 peer-focus:left-6 peer-focus:text-xs peer-focus:text-gray-400 peer-focus:scale-90 cursor-text bg-[#2A3236] px-1`}
                    >
                        {placeholder}   
                    </label>
                )}
            </div>
        </div>
    );
};

export default AnimatedText;