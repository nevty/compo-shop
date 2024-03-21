import { cn } from "../lib";

interface InputProps {
  placeholder?: string;
  className?: string;
}

export const Input = ({ placeholder, className }: InputProps) => {
  return (
    <input
      type="text"
      className={cn(
        "py-2 px-4 rounded-lg border border-solid text-ellipsis bg-white text-slate-900",
        "focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent",
        " placeholder-slate-400 border-slate-200 hover:border-slate-400",
        className
      )}
      placeholder={placeholder}
    />
  );
};
