import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const PrimaryButton = ({ children }: ButtonProps) => (
  <button className="
  bg-sky-500 text-white rounded-md w-48 px-7 py-3 text-sm cursor-pointer hover:bg-sky-400
  dark:bg-orange-500 dark:hover:bg-orange-400
  transition-colors">
    {children}
  </button>
);
