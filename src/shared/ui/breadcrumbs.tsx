import { cn } from "../lib";

interface BreadCrumbsProps {
  className?: string;
  paths: string[];
}

export const BreadCrumbs = ({ className, paths }: BreadCrumbsProps) => {
  return (
    <nav className={cn("text-xs text-slate-400", className)}>
      <ol className="flex gap-1 items-center">
        {paths.map((path, i) => (
          <li key={path} className="flex gap-1 items-center">
            <a href="#" className="text-slate-400">
              {path}
            </a>
            {i !== paths.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};
