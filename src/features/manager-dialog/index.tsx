import { AiOutlineMessage } from "react-icons/ai";

interface ManagerDialogProps {}

export const ManagerDialog: React.FC<ManagerDialogProps> = () => {
  return (
    <button className="flex gap-2 justify-center items-center px-3 py-2 bg-blue-50 rounded">
      <AiOutlineMessage size="16" />
      <span className="truncate">Ваш менеджер</span>
    </button>
  );
};
