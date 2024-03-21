import { IoIosArrowDown } from "react-icons/io";
import { cn } from "@shared/lib";

interface UserInfoProps {
  className?: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({ className }) => {
  const avatarUrl = "/avatar.png";
  const name = "Ермаков Е.";

  return (
    <div
      className={cn(
        "flex gap-4 justify-between items-center text-slate-900 cursor-pointer",
        className
      )}
    >
      <img src={avatarUrl} alt="avatar" className="w-8 h-8" />
      <div className="truncate">{name}</div>
      <IoIosArrowDown size="24" className="text-blue-700" />
    </div>
  );
};
