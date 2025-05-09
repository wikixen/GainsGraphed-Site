import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const SecondaryButton = ({ children }: ButtonProps) => (
  <button className="
  bg-white text-slate-700 rounded-md w-fit px-8 py-3 text-sm cursor-pointer hover:bg-slate-700 hover:text-slate-200 
  dark:bg-orange-400 dark:text-white dark:hover:bg-orange-600  
  transition-colors">
    {children}
  </button>
);
