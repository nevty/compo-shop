import { cn } from "@shared/lib";
import { SuggestIdeaButton } from "@features/suggest-idea-interactive";

const FEEDBACK_TECH_LINKS = [
  { id: 1, link: "tel:8 800 841-95-95", label: "8 800 841-95-95" },
  { id: 2, link: "mailto:support@sport.ru", label: "support@sport.ru" },
];

const FEEDBACK_NAV_LINKS = [
  { id: 1, link: "#", label: "Вакансии" },
  { id: 2, link: "#", label: "Блог" },
  { id: 3, link: "#", label: "Акции" },
];

interface FooterFeedbackProps {
  className?: string;
}

export const FooterFeedback = ({ className }: FooterFeedbackProps) => {
  return (
    <div
      className={cn(
        "flex gap-5 justify-between items-center w-full max-lg:flex-wrap",
        className
      )}
    >
      <div className="flex gap-14 max-lg:flex-wrap max-lg:w-full">
        <img src="/logo.svg" alt="Logo" className="h-10 self-center" />
        <ul className="flex gap-12">
          {FEEDBACK_TECH_LINKS.map((url) => (
            <li key={url.id} className="flex flex-col gap-4">
              <a href={url.link} className="text-base font-bold text-slate-950">
                {url.label}
              </a>
              <div className="text-xs text-slate-500">Служба поддержки</div>
            </li>
          ))}
        </ul>
      </div>
      <nav className="flex gap-8 justify-between items-center text-base font-bold text-center text-slate-900 max-lg:flex-wrap max-lg:w-full">
        <ul className="flex gap-8">
          {FEEDBACK_NAV_LINKS.map((url) => (
            <li key={url.id}>
              <a href={url.link} className="text-base font-bold text-slate-950">
                {url.label}
              </a>
            </li>
          ))}
        </ul>
        <SuggestIdeaButton />
      </nav>
    </div>
  );
};
