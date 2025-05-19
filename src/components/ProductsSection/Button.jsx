import React from "react";
import ArrowRightIcon from "../icons/ArrowRightIcon.jsx";

const Button = ({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 hover:shadow-sm focus:ring-gray-400",
    // For the orange button, using Tailwind's orange. Adjust if you have custom brand colors.
    secondary:
      "bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-500", // e.g., 'bg-brand-orange hover:bg-brand-orange-dark'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
        <ArrowRightIcon className="ml-2 w-4 h-4" />
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedClassName}
      {...props}
    >
      {children}
      <ArrowRightIcon className="ml-2 w-4 h-4" />
    </button>
  );
};

export default Button;
