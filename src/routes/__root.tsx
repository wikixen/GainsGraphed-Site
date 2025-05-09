import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { NotFoundPage } from "./-404";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
  notFoundComponent: () => (<NotFoundPage />)
});
