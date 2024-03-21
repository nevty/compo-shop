import { FiList, FiHeart } from "react-icons/fi";
import { SlBell } from "react-icons/sl";

import { Button, Input } from "@shared/ui";
import { UserCart } from "@features/user-cart";
import { UserInfo } from "@features/user-info";

export const HeaderWidget = () => {
  return (
    <header className="min-h-20 flex gap-5 px-6 py-4 bg-white max-md:flex-wrap max-md:px-5">
      <div className="flex flex-auto gap-5 justify-between max-lg:flex-wrap">
        <img src="/logo.svg" alt="Logo" className="h-7 self-center" />
        <Button className="py-3 flex items-center">
          <FiList className="h-full w-auto" />
          <span className="ml-3">Меню</span>
        </Button>
        <div className="flex flex-auto gap-5">
          <Input placeholder="Название запроса" className="w-full" />
          <span className="flex flex-auto py-3 max-md:py-1">
            <SlBell className="cursor-pointer h-full w-auto text-blue-700" />
          </span>
        </div>
      </div>
      <div className="bg-slate-200 w-px max-md:hidden" />
      <div className="flex flex-auto gap-5 justify-between flex-grow-0 max-lg:flex-wrap">
        <span className="flex flex-auto py-3">
          <FiHeart className="cursor-pointer h-full w-auto text-slate-400" />
        </span>
        <UserCart className="w-[160px]" />
        <UserInfo className="w-44" />
      </div>
    </header>
  );
};
