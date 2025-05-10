import { createFileRoute } from "@tanstack/react-router";
import { DashboardTitle } from "../../../components/ui/dashboardTitle";

export const Route = createFileRoute("/_authenticated/_layout/history")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <DashboardTitle title="Workout History" subtitle="" />
    </>
  );
}
