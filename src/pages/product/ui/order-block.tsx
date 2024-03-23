import { FiHeart } from "react-icons/fi";
import { ProductToCartButton } from "@features/product-add-to-cart";

import { cn } from "@shared/lib";
import { Switch } from "@shared/ui";

const ProductOrderInfo = () => {
  return (
    <div className="flex gap-4 mt-8 justify-between">
      {[
        { label: "Доставка", text: "Завтра" },
        { label: "Тарасовка", text: "7 шт." },
        { label: "Тарасовка", text: "7 шт." },
      ].map(({ label, text }, i) => (
        <div key={i} className="flex flex-col w-1/3 gap-1">
          <div className="text-sm font-bold text-ellipsis text-slate-900">
            {text}
          </div>
          <div className="text-xs text-slate-400">{label}</div>
        </div>
      ))}
    </div>
  );
};

const ProductPrice = () => {
  const DISCOUNT = "-15%";
  const PRICE_WITHOUT_DISCOUNT = "166 534.00";
  const PRICE = Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(122_566);
  const volume = 12;

  return (
    <div>
      <div className="text-sm font-semibold text-rose-500">
        {PRICE_WITHOUT_DISCOUNT} цена без скидки
      </div>
      <div className="flex gap-4 items-center mt-6 font-bold">
        <div className="text-3xl text-slate-900">{PRICE}</div>
        <div className="px-2 text-base text-white bg-rose-500 rounded">
          {DISCOUNT}
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <div className="px-2 py-1 text-sm font-bold rounded-lg bg-slate-100 text-slate-400">
          {volume} штук в уп.
        </div>
        <Switch defaultChecked label="Заказ упаковкой" />
      </div>
    </div>
  );
};

interface OrderBlockProps {
  className?: string;
}

export const OrderBlock = ({ className }: OrderBlockProps) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex flex-col grow justify-end max-md:mt-10">
        <ProductPrice />
        <div className="mt-8 w-full h-px border bg-slate-200 border-slate-200" />
        <ProductOrderInfo />
        <div className="flex w-full gap-4 mt-8">
          <ProductToCartButton className="w-full" />
          <button className="px-6 py-4 bg-blue-50 rounded-lg">
            <FiHeart size="24" className="text-blue-700" />
          </button>
        </div>
      </div>
    </div>
  );
};
