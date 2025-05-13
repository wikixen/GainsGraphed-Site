import { createFileRoute } from "@tanstack/react-router";
import { DashboardTitle } from "../../../components/dashboard/dashboardTitle";
import { Card } from "../../../components/ui/card";

export const Route = createFileRoute("/_authenticated/_layout/diary")({
  component: RouteComponent,
});

function RouteComponent() {
  const date = new Date().toLocaleDateString();

  return (
    <>
      <DashboardTitle
        title="Food Diary"
        subtitle="Track your meals and nutrition intake"
      />
      <Card>
        <h1 className="text-2xl font-semibold">Macros Summary - { date }</h1>
      </Card>
      <Card>
        <h1 className="text-2xl font-semibold">Meals for { date }</h1>
      </Card>
    </>
  );
}