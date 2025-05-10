import { ReactNode } from "react";

interface DashboardCardProps {
  children: ReactNode;
}

export const DashboardCard = ({ children }: DashboardCardProps) => (
  <section className="p-4 bg-white shadow rounded-md h-80 w-full lg:w-1/2 dark:bg-gray-900">
    {children}
  </section>
);
