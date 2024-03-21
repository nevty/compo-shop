import { FiShoppingCart } from "react-icons/fi";
import { cn } from "@shared/lib";

interface UserCartProps {
  className?: string;
}

export const UserCart: React.FC<UserCartProps> = ({ className }) => {
  const amount = 144_235;

  const price = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(amount);

  return (
    <button
      className={cn(
        "flex gap-3 justify-center items-center p-3 font-bold text-center text-blue-700 bg-blue-50 rounded-lg",
        className
      )}
    >
      <FiShoppingCart size="24" />
      {price && <div className="my-auto truncate">{price}</div>}
    </button>
  );
};
