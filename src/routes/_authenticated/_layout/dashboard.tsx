import { createFileRoute } from "@tanstack/react-router";
import {
  LuApple,
  LuDrumstick,
  LuDumbbell,
  LuFlame,
  LuHeartPulse,
} from "react-icons/lu";
import { DashboardMiniCard } from "../../../components/dashboard/dashboardMiniCard";
import { DashboardTitle } from "../../../components/dashboard/dashboardTitle";
import { QuickAddBtn } from "../../../components/dashboard/quickAddBtn";
import { Card } from "../../../components/ui/card";
import { DialogComponent } from "../../../components/ui/dialog";

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
      <section className="flex flex-row justify-between items-center rounded-md shadow bg-white dark:bg-gray-900 w-1/2 h-14 p-4 not-lg:flex-col not-lg:h-24 not-lg:w-full not-lg:gap-4">
        <h3>Quick Add to Diary</h3>
        <div className="flex gap-4 not-lg:gap-8">
          <DialogComponent
            trigger={<QuickAddBtn btnTitle="Food" icon={<LuApple />} />}
            title="Add Food"
            desc="Add food to your diary"
            children={<>Coming Soon!!!</>}
          />
          <DialogComponent
            trigger={<QuickAddBtn btnTitle="Exercise" icon={<LuDumbbell />} />}
            title="Add Exercise"
            desc="Log exercise"
            children={<>Coming Soon!!!</>}
          />
          <DialogComponent
            trigger={
              <QuickAddBtn btnTitle="Biometric" icon={<LuHeartPulse />} />
            }
            title="Add Biometric"
            desc="Add biometric data to your diary"
            children={<>Coming Soon!!!</>}
          />
        </div>
      </section>
      <section className="lg:flex lg:flex-row lg:w-1/2 md:grid md:grid-cols-2 md:grid-rows-2 sm:flex sm:flex-col gap-4">
        {/* Placeholder Cards, replace with real data */}
        <DashboardMiniCard
          title={"Workouts This Week"}
          content={5}
          subContent={"+2 from last week"}
          icon={<LuHeartPulse />}
          progress={true}
        />
        <DashboardMiniCard
          title={"Calories Burned"}
          content={2835}
          subContent={"+12% from last week"}
          icon={<LuFlame />}
          progress={true}
        />
        <DashboardMiniCard
          title={"Total Weight Lifted"}
          content={12540}
          subContent={"+8% from last week"}
          icon={<LuDumbbell />}
          progress={true}
        />
        <DashboardMiniCard
          title={"Calorie Intake (Avg)"}
          content={2240}
          subContent={"-5% from last week"}
          icon={<LuDrumstick />}
          progress={false}
        />
      </section>
      <Card>
        <h2>Progress Tracking</h2>
        {/* Insert Calorie Graph Here */}
      </Card>
      <Card>
        <h2>Recent Workouts</h2>
      </Card>
      <Card>
        <h2>Personal Records</h2>
      </Card>
    </>
  );
}
