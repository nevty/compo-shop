import { cn } from "../lib";

interface SwitchProps {
  className?: string;
  label?: string;
  defaultChecked?: boolean;
}

export const Switch = ({
  className,
  size = "md",
  label,
  defaultChecked,
}: SwitchProps & { size?: "sm" | "md" | "lg" }) => {
  return (
    <label className={cn("inline-flex items-center cursor-pointer", className)}>
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="sr-only peer"
      />
      <div
        className={cn(
          `${{ sm: "w-9", md: "w-11", lg: "w-14" }[size]}`,
          `${{ sm: "h-5", md: "h-6", lg: "h-7" }[size]}`,
          "relative peer peer-focus:outline-none bg-gray-200",
          "rounded-full dark:bg-slate-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full",
          "peer-checked:after:border-white after:content-[''] after:absolute",
          `${
            {
              sm: "after:top-[2px] after:start-[2px] after:h-4 after:w-4",
              md: "after:top-[2px] after:start-[2px] after:h-5 after:w-5",
              lg: "after:top-0.5 after:start-[4px] after:h-[1.52rem] after:w-[1.52rem]",
            }[size]
          }`,
          "after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all",
          "dark:border-slate-300 peer-checked:bg-blue-600"
        )}
      ></div>
      {label && (
        <span
          className={cn(
            `${{ sm: "text-sm", md: "text-base", lg: "text-lg" }[size]}`,
            "ms-3 font-medium text-gray-900"
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
};
