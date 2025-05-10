import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "./-authForm";

export const Route = createFileRoute("/(auth)/login")({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <AuthForm defaultTab="tab1" />
  );
}