import {
  BarChartIcon,
  CookieIcon,
  CounterClockwiseClockIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";
import { createFileRoute, Link } from "@tanstack/react-router";
import Logo from "../assets/Logo.png";
import LogoDark from "../assets/LogoDark.png";
import { PrimaryButton } from "../components/ui/primaryButton";
import { SecondaryButton } from "../components/ui/secondaryButton";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  let logo = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ? LogoDark
    : Logo;

  const cardArray = [
    {
      icon: <BarChartIcon />,
      cardTitle: "Workout Dashboard",
      cardDesc:
        "Get a comprehensive overview of your fitness journey with personalized insights",
    },
    {
      icon: <CounterClockwiseClockIcon />,
      cardTitle: "Workout History",
      cardDesc:
        "Review your past workouts and see how you've improved over time",
    },
    {
      icon: <StopwatchIcon />,
      cardTitle: "Personal Records",
      cardDesc: "Track your personal bests and celebrate your achievements",
    },
    {
      icon: <CookieIcon />,
      cardTitle: "Food Diary",
      cardDesc:
        "Log your meals and track your macros to optimize your nutrition",
    },
  ];

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] dark:bg-black">
      <header className="grid grid-cols-2 py-40 items-center bg-[#e4f0f9] dark:bg-black">
        <section className="flex flex-col gap-4 text-black px-4 dark:text-white lg:items-center">
          <h1 className="text-5xl font-bold">Track Your Fitness Journey</h1>
          <h2 className="text-xl">
            Monitor your workouts, track your meals, and achieve your fitness
            goals with our comprehensive tracking platform.
          </h2>
          <section className="flex flex-row gap-4">
            <SecondaryButton>
              <Link to="/login">
                View Your Dashboard
              </Link>
            </SecondaryButton>
          </section>
        </section>
        <section className="flex justify-center">
          <img src={logo} alt="GainsGraphed Logo" className="size-80" />
        </section>
      </header>
      <main className="flex flex-col items-center gap-8 mt-16 dark:bg-black">
        <h1 className="text-3xl font-bold">
          Everything You Need to Track Your Progress
        </h1>
        <section className="flex flex-wrap gap-8 justify-center">
          {cardArray.map((item) => (
            <article className="flex flex-col gap-3 bg-gray-50 p-6 rounded-xl h-50 w-96 hover:shadow dark:bg-orange-400 dark:hover:shadow-orange-400">
              <div className="flex bg-blue-100 size-10 items-center justify-center rounded-4xl dark:bg-transparent dark:text-white">
                {item.icon}
              </div>
              <h1 className="font-semibold text-lg dark:text-white">
                {item.cardTitle}
              </h1>
              <p className="dark:text-white">{item.cardDesc}</p>
            </article>
          ))}
        </section>
        <section className="flex flex-col bg-gray-50 gap-4 text-center items-center w-full pb-16 dark:bg-black dark:text-white">
          <h1 className="text-3xl font-bold mt-8">
            Ready to Start Your Fitness Journey?
          </h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-400">
            Join thousands of users who have transformed their fitness with
            our<br /> comprehensive tracking tools.
          </h2>
          <PrimaryButton>
            <Link to="/signup">
              Get Started Now!
            </Link>
          </PrimaryButton>
        </section>
      </main>
      <div className="bg-slate-800 dark:bg-gray-950">
        <footer className="flex flex-row justify-between h-24 items-center mx-2 text-white">
          <p className="text-2xl font-semibold">GainsGraphed</p>
          <p className="text-sm text-gray-400">
            &copy; 2025 GainsGraphed. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
