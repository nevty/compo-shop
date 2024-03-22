import { GoFile } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

import { cn } from "@shared/lib";

interface FooterOtherLinksProps {
  className?: string;
}

export const FooterOtherLinks = ({ className }: FooterOtherLinksProps) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center text-xs font-medium",
        className
      )}
    >
      <ul className="flex gap-5 justify-between items-center max-md:flex-wrap">
        <li>
          <a href="#" className="flex text-slate-400">
            <GoFile size="16" />
            <span className="flex-auto">PDF презентация</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-2 text-slate-400">
            <IoVideocamOutline size="16" />
            <span className="flex-auto">Видео инструкция</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-2 text-slate-400">
            <FiInfo size="16" />
            <span>FAQ</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-2 text-blue-700">
            <FaYoutube size="16" />
            <span>Мы на YouTube</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-slate-400">
            Политика конфиденциальности
          </a>
        </li>
        <li>
          <a href="#" className="text-slate-400">
            Лицензионное соглашение
          </a>
        </li>
      </ul>
    </div>
  );
};
