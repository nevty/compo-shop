import * as React from "react";
import { cn } from "../lib";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "px-6 py-4 text-sm rounded-lg text-white bg-blue-700",
        "hover:bg-blue-600 disabled:bg-slate-200 disabled:text-slate-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
