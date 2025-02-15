import classNames from "classnames";
import React from "react";
import { ButtonProps } from "./Schema";
import { NavLink } from "react-router-dom";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  btnType = "solid",
  isLoading = false,
  isDisabled = false,
  children,
  className,
  leftIcon,
  rightIcon,
  type = "button",
  to,
  end = false,
  ...props
}) => {
  const baseClass = `
    rounded-md transition-all ease-in-out duration-300 focus:outline-none flex items-center justify-center text-nowrap
    ${variant === "table" ? "px-2 py-2 rounded-full" : "px-4 sm:px-6 py-2 sm:py-3"}
  `;

  const variantClasses = {
    primary: `bg-primary text-text-primary border-primary ${
      !isDisabled ? "hover:bg-primary-dark" : ""
    }`,
    secondary: `bg-secondary text-primary border-secondary ${
      !isDisabled ? "hover:bg-secondary-light" : ""
    }`,
    success: `bg-success text-text-light border-success ${
      !isDisabled ? "hover:bg-opacity-80" : ""
    }`,
    danger: `bg-danger text-text-light border-danger ${
      !isDisabled ? "hover:bg-opacity-80" : ""
    }`,
    warning: `bg-warning text-primary-dark border-warning ${
      !isDisabled ? "hover:bg-opacity-80" : ""
    }`,
    table: `border-white-neutral text-primary ${
      !isDisabled ? "hover:bg-opacity-70" : ""
    }`,
  };

  const btnTypeClasses = {
    solid: "",
    outlined: "bg-transparent border",
    ghost: "bg-transparent border-none",
  };

  const conditionalClasses = {
    "cursor-not-allowed opacity-50": isDisabled,
    "cursor-wait px-8": isLoading,
    "border-white": btnType === "solid",
    "text-primary": btnType === "outlined" || btnType === "ghost",
    "text-success": (btnType === "outlined" || btnType === "ghost") && variant === "success",
    "text-danger": (btnType === "outlined" || btnType === "ghost") && variant === "danger",
    "text-warning": (btnType === "outlined" || btnType === "ghost") && variant === "warning",
    "text-secondary-dark": (btnType === "outlined" || btnType === "ghost") && variant === "secondary",
  };

  const loaderColorClass =
    isLoading && (btnType === "outlined" || btnType === "ghost")
      ? "loader-black"
      : "loader-white";

  const buttonClasses = classNames(
    baseClass,
    variantClasses[variant],
    btnTypeClasses[btnType],
    conditionalClasses,
    className
  );

  const buttonContent = (
    <>
      {isLoading ? (
        <span className={loaderColorClass}></span>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </>
  );

  if (to) {
    return (
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) =>
          classNames(buttonClasses, { active: isActive })
        }
        aria-disabled={isDisabled || isLoading}
      >
        <button disabled={isDisabled || isLoading} type={type} {...props}>
          {buttonContent}
        </button>
      </NavLink>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled || isLoading}
      type={type}
      aria-busy={isLoading}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default Button;