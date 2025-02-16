import { Info } from "@phosphor-icons/react";
import React from "react";
import { FieldError, Merge } from "react-hook-form";

interface ErrorMessageProps {
  error?:
  | FieldError
  | Merge<FieldError, (FieldError | undefined)[]>
  | undefined
  | any;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null;

  return <span className=" text-xs">
    <Info size={18} className="inline-block mr-1 text-red-500" />
    {error.message}
    </span>;
};

export default ErrorMessage;
