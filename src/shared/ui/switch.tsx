import { cn } from "../lib";

interface SwitchProps {
  className?: string;
  label?: string;
}

export const Switch = ({ label }: SwitchProps) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        className={cn(
          "relative w-9 h-5 bg-gray-200",
          "peer peer-focus:outline-none",
          "rounded-full dark:bg-slate-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full",
          "peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]",
          "after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all",
          "dark:border-slate-300 peer-checked:bg-blue-600"
        )}
      ></div>
      {label && (
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </span>
      )}
    </label>
  );
};
