import { ReactNode } from "react";

interface DashboardMiniCardProps {
  title: string;
  content: number;
  subContent: string;
  icon: ReactNode;
  progress: boolean;
}

export const DashboardMiniCard = (
  { title, content, subContent, icon, progress }: DashboardMiniCardProps,
) => (
  <article className="bg-white rounded-md p-4 shadow flex flex-col gap-2 lg:w-1/4 lg:justify-evenly dark:bg-gray-900">
    <section className="grid grid-cols-[1fr_auto] items-center lg:gap-2">
      <h3 className="text-gray-500 text-sm dark:text-white">{title}</h3>
      <div
        className={`${
          progress ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
        } p-2 rounded-4xl`}
      >
        {icon}
      </div>
    </section>
    <section className="flex flex-col gap-1">
      <p className="text-2xl font-semibold">{content.toLocaleString()}</p>
      <p
        className={`${
          progress
            ? "text-green-500 dark:text-green-200"
            : "text-red-500 dark:text-red-200"
        } text-xs`}
      >
        {subContent}
      </p>
    </section>
  </article>
);
