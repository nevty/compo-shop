import { cn } from "@shared/lib";

interface CharacteristicsBlockProps {
  className?: string;
}

export const CharacteristicsBlock = ({
  className,
}: CharacteristicsBlockProps) => {
  const characteristics = [
    { label: "Код поставщика", value: "ELC00696" },
    { label: "Артикул", value: "ELC0200000696" },
    { label: "Код РАЭК", value: "ELC00696" },
    { label: "Код ЕТМ", value: "ELC00696" },
    { label: "Бренд", value: "Electric used" },
    { label: "Серия", value: "ELC00696" },
    { label: "Код производителя", value: "ELC0200000696" },
  ];

  return (
    <div className={cn("flex flex-col", className)}>
      <h2 className="text-xl font-medium leading-5 text-slate-900 max-md:max-w-full">
        Характеристики
      </h2>
      <ul className="grid grid-cols-2 gap-5 mt-8">
        {characteristics.map(({ label, value }, i) => (
          <li key={i} className="flex flex-col">
            <div className="text-sm font-bold text-slate-900">{value}</div>
            <div className="mt-2 text-xs text-slate-400">{label}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
