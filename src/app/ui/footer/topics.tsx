import { cn } from "@shared/lib";

const TOPICS = ["woman", "men", "kids", "sport"] as const;
type Topic = (typeof TOPICS)[number];
const TOPICS_LABELS = {
  woman: "Женщинам",
  men: "Мужчинам",
  kids: "Детям",
  sport: "Виды спорта",
} satisfies Record<Topic, string>;

const TOPIC_LINKS = {
  woman: [
    { id: 1, link: "#", label: "Одежда" },
    { id: 2, link: "#", label: "Обувь" },
    { id: 3, link: "#", label: "Аксессуары" },
    { id: 4, link: "#", label: "Белье" },
    { id: 5, link: "#", label: "Bra fitting" },
  ],
  kids: [
    { id: 1, link: "#", label: "Одежда" },
    { id: 2, link: "#", label: "Обувь" },
    { id: 3, link: "#", label: "Аксессуары" },
    { id: 4, link: "#", label: "Белье" },
    { id: 5, link: "#", label: "Игрушки" },
    { id: 6, link: "#", label: "Малыши" },
  ],
  men: [
    { id: 1, link: "#", label: "Одежда" },
    { id: 2, link: "#", label: "Обувь" },
    { id: 3, link: "#", label: "Аксессуары" },
    { id: 4, link: "#", label: "Белье" },
  ],
  sport: [
    { id: 1, link: "#", label: "Велоспорт" },
    { id: 2, link: "#", label: "Туризм" },
    { id: 3, link: "#", label: "Тренажеры и фитнес" },
    { id: 4, link: "#", label: "Командные виды спорта" },
    { id: 5, link: "#", label: "Самокаты" },
  ],
} satisfies Record<Topic, Array<{ id: number; link: string; label: string }>>;

interface FooterTopicsProps {
  className?: string;
}

export const FooterTopics = ({ className }: FooterTopicsProps) => {
  return (
    <ul
      className={cn(
        "w-full flex gap-10 max-md:flex-col max-md:gap-5",
        className
      )}
    >
      {TOPICS.map((topic) => (
        <li key={topic} className="w-1/4 max-md:w-full max-md:text-center">
          <section className="flex flex-col">
            <h2 className="text-base font-semibold">{TOPICS_LABELS[topic]}</h2>
            <ul className="flex flex-col text-sm mt-6">
              {TOPIC_LINKS[topic].map(({ id, label, link }) => (
                <li key={id} className="mb-4 last:mb-0">
                  <a href={link} className="text-slate-950">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </li>
      ))}
    </ul>
  );
};
