import { createFileRoute } from "@tanstack/react-router";
import { DashboardTitle } from "../../../components/dashboard/dashboardTitle";

export const Route = createFileRoute("/_authenticated/_layout/progress")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <DashboardTitle
        title="Progress Tracking"
        subtitle="Monitor your fitness journey over time"
      />
    </>
  );
}
