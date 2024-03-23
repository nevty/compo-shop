import { LuShoppingCart } from "react-icons/lu";

import { cn } from "@shared/lib";
import { Button } from "@shared/ui";

interface ProductToCartButtonProps {
  className?: string;
}

export const ProductToCartButton = ({
  className,
}: ProductToCartButtonProps) => {
  return (
    <Button className={cn("gap-4 flex justify-center items-center", className)}>
      <LuShoppingCart size="24" />
      <span>В корзину</span>
    </Button>
  );
};
