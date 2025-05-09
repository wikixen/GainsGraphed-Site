import { createFileRoute, Link } from "@tanstack/react-router";
import Logo from "../../assets/Logo.png";
import { Tabs } from "radix-ui";

export const Route = createFileRoute("/(auth)/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="grid grid-cols-2 gap-8 min-h-screen items-center bg-linear-to-r from-[#e3f0f9] from-50% to-white to-50%">
      <section className="flex flex-col gap-2 text-center items-center text-[#17262f] px-8">
        <img src={Logo} alt="Place" className="lg:size-80 md:size-60 sm:size-40" />
        <p className="text-xl">Track your fitness journey, monitor your nutrition, and reach your wellness goals.</p>
      </section>
      <section className="flex flex-col text-center items-center gap-4 mr-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <h2 className="text-gray-500">Sign in to continue to GainsGraphed</h2>
        </div>
        <AuthTabs />
        <div className="flex gap-1 text-sm sm:visible">
          <span className="text-gray-500">Don't have an account sign up?</span>
          <Link to="/signup" className="text-[#7ac2f6] hover:underline hover:text-[#639cc5]">Sign Up</Link>
        </div>
        <Link to="/" className="text-[#7ac2f6] hover:underline hover:text-[#639cc5] text-sm">Back to Landing Page</Link>
      </section>
    </main>
  );
}

const AuthTabs = () => {
  return (
    <Tabs.Root defaultValue="tab2">
      <Tabs.List className="flex justify-center items-center gap-2 bg-gray-100 h-11 rounded-md text-sm px-4 2xl:w-180 xl:w-150 md:w-80 sm:w-fit">
        <Tabs.Trigger value="tab1" className="h-8 rounded-sm cursor-pointer text-gray-600 data-[state=active]:text-black data-[state=active]:bg-white 2xl:w-90 xl:w-70 md:w-38 sm:w-fit">
          Login
        </Tabs.Trigger>
        <Tabs.Trigger value="tab2" className="h-8 rounded-sm cursor-pointer text-gray-600 data-[state=active]:text-black data-[state=active]:bg-white 2xl:w-90 xl:w-70 md:w-38 sm:w-fit">
          Sign Up
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        A
      </Tabs.Content>
      <Tabs.Content value="tab2">
        Y
      </Tabs.Content>
    </Tabs.Root>
  )
}