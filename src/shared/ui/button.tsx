import * as React from "react";
import { cn } from "../lib";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={cn(
        "px-6 py-4 text-sm rounded-lg text-white bg-blue-700",
        "hover:bg-blue-600 disabled:bg-slate-200 disabled:text-slate-300",
        className
      )}
    >
      {children}
    </button>
  );
};
