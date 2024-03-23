import { useState } from "react";
import { LuShoppingCart, LuPlus, LuMinus } from "react-icons/lu";

import { cn } from "@shared/lib";
import { Button } from "@shared/ui";

interface ProductToCartButtonProps {
  className?: string;
}

export const ProductToCartButton = ({
  className,
}: ProductToCartButtonProps) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  if (count === 0)
    return (
      <Button
        className={cn("gap-4 flex justify-center items-center", className)}
        onClick={increment}
      >
        <LuShoppingCart size="24" />
        <span>В корзину</span>
      </Button>
    );

  return (
    <div
      className={cn(
        "gap-4 h-14 flex select-none justify-between items-center rounded-lg text-base font-medium",
        "bg-white border-2 border-blue-700 hover:bg-blue-50 drop-shadow-md text-slate-900",
        className
      )}
    >
      <LuMinus
        size="56"
        onClick={decrement}
        className="p-3 cursor-pointer hover:text-blue-700"
      />
      <span className="truncate">{count} штуки</span>
      <LuPlus
        size="56"
        onClick={increment}
        className="p-3 cursor-pointer hover:text-blue-700"
      />
    </div>
  );
};
