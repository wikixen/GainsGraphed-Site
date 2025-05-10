import { BarChartIcon } from "@radix-ui/react-icons";
import { createFileRoute } from "@tanstack/react-router";
import { ReactNode } from "react";
import { DashboardCard } from "../../../components/ui/card";
import { DashboardTitle } from "../../../components/ui/dashboardTitle";

export const Route = createFileRoute("/_authenticated/_layout/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <DashboardTitle
        title="Dashboard"
        subtitle="Track your fitness journey and progress"
      />
      <section className="lg:w-1/2 md:grid md:grid-cols-2 md:grid-rows-2 gap-4 lg:flex lg:flex-row sm:flex sm:flex-col">
        {/* Placeholder Cards, replace with real data */}
        <DashboardMiniCard
          title={"Workouts This Week"}
          content={5}
          subContent={"+2 from last week"}
          icon={<BarChartIcon />}
          progress={true}
        />
        <DashboardMiniCard
          title={"Calories Burned"}
          content={2835}
          subContent={"+12% from last week"}
          icon={<BarChartIcon />}
          progress={true}
        />
        <DashboardMiniCard
          title={"Total Weight Lifted"}
          content={12540}
          subContent={"+8% from last week"}
          icon={<BarChartIcon />}
          progress={true}
        />
        <DashboardMiniCard
          title={"Calorie Intake (Avg)"}
          content={2240}
          subContent={"-5% from last week"}
          icon={<BarChartIcon />}
          progress={false}
        />
      </section>
      <DashboardCard>
        <h2>Personal Records</h2>
      </DashboardCard>
    </>
  );
}

interface DashboardMiniCardProps {
  title: string;
  content: number;
  subContent: string;
  icon: ReactNode;
  progress: boolean;
}

const DashboardMiniCard = (
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
