import { ReactNode } from "react";
import { LuCirclePlus } from "react-icons/lu";

interface QuickAddBtnProps {
  icon: ReactNode;
  btnTitle: string;
}

export const QuickAddBtn = ({ icon, btnTitle }: QuickAddBtnProps) => (
  <button className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
    <div className="relative text-xl">
      {icon}
      <LuCirclePlus className="absolute top-0 -right-1 text-xs text-black bg-white rounded-4xl" />
    </div>
    <p className="">{btnTitle}</p>
  </button>
);
