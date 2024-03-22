import { FiPercent } from "react-icons/fi";

import { ManagerDialog } from "@features/manager-dialog";

const NAVIGATION_LINKS = [
  { id: 1, link: "#", label: "Мои заказы" },
  { id: 2, link: "#", label: "Сотрудники" },
  { id: 3, link: "#", label: "Шаблоны заказов" },
  { id: 4, link: "#", label: "Обращения" },
];

export const Navigation = () => {
  return (
    <div className="py-3 px-6 w-full bg-white text-slate-900 max-md:max-w-full">
      <nav className="flex justify-between gap-4 max-md:flex-wrap">
        <ul className="flex gap-5 items-center max-md:flex-wrap">
          {NAVIGATION_LINKS.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="text-slate-900">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-5 justify-between items-center text-blue-700">
          <ManagerDialog />
          <a href="#" className="flex items-center gap-4 text-blue-700">
            <FiPercent size="14" />
            <span>Акции</span>
          </a>
          <a href="#" className="text-blue-700">
            Блог
          </a>
        </div>
      </nav>
    </div>
  );
};
