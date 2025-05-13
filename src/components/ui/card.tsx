import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <article className="p-8 bg-white shadow rounded-md min-h-80 max-h-fit w-full lg:w-1/2 dark:bg-gray-900">
    {children}
  </article>
);
