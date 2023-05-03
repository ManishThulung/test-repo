import React from "react";

type Props = {
  type?: "primary" | "secondary" | "danger" | "text";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<Props> = ({
  type = "primary",
  onClick,
  children,
  className,
}) => {
  let bgColorClass;
  let textColorClass;
  switch (type) {
    case "secondary":
      bgColorClass = "bg-gray-300 hover:bg-gray-400 focus:ring-gray-500";
      textColorClass = "text-gray-800";
      break;
    case "danger":
      bgColorClass = "bg-red-500 hover:bg-red-600 focus:ring-red-700";
      textColorClass = "text-white";
      break;
    case "text":
      bgColorClass = "bg-white-500 hover:bg-transparent-600 ";
      textColorClass = "text-black-200";
      break;
    default:
      bgColorClass = "bg-blue-500 hover:bg-blue-600 focus:ring-blue-700";
      textColorClass = "text-white";
      break;
  }
  const baseClasses =
    "px-4 py-2 font-semibold font-inter rounded focus:outline-none transition";
  const classes = `${baseClasses} ${bgColorClass} ${textColorClass} ${
    className ?? ""
  }`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
