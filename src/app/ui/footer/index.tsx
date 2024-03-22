import { cn } from "@shared/lib";

import { FooterTopics } from "./topics";
import { FooterFeedback } from "./feedback";
import { FooterOtherLinks } from "./other-links";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer
      className={cn(
        "flex flex-col justify-center px-6 pb-12 w-full bg-white",
        className
      )}
    >
      <div className="mb-12 w-full h-px bg-slate-200" />
      <FooterFeedback />
      <div className="mt-12 w-full h-px bg-slate-200" />
      <FooterTopics className="mt-12" />
      <div className="mt-12 w-full h-px bg-slate-200" />
      <FooterOtherLinks className="mt-12" />
      <div className="mt-10 text-xs text-center text-slate-400">
        Настоящая Политика обработки персональных данных разработана в
        соответствии с Конституцией Российской Федерации, Трудовым кодексом
        Российской Федерации, Гражданским кодексом Российской Федерации,
        Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации,
        информационных технологиях и о защите информации",
      </div>
      <div className="flex gap-6 justify-center items-center mt-10 text-sm text-slate-400">
        <img src="/footer-logo.png" alt="logo" className="w-32" />
        <span className="font-bold">Разработка платформы</span>
      </div>
    </footer>
  );
};
