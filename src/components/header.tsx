import {
  ActivityLogIcon,
  BarChartIcon,
  CookieIcon,
  CounterClockwiseClockIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { NavigationMenu } from "radix-ui";
import { ReactNode, useState } from "react";
import LogoDark from "../assets/LogoDark.png";
import LogoLight from "../assets/LogoLight.png";
import { Link } from "@tanstack/react-router";

export const Header = () => {
  const logo = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ? LogoDark
    : LogoLight;

  return (
    <section className="flex flex-col gap-1 w-56 px-2 border-r-1 border-gray-300 min-h-screen items-center dark:bg-black dark:border-gray-700">
      <img src={logo} alt="GainsGraphed Logo" className="size-30 mb-2" />
      <NavMenu />
    </section>
  );
};

const NavMenu = () => {
  const [active, setActive] = useState("tab1");

  const handleTab = (val: string) => {
    setActive(val);
  };
  return (
    <NavigationMenu.Root orientation="vertical">
      <NavigationMenu.List className="flex flex-col gap-1">
        <NavigationMenu.Item onClick={() => handleTab("tab1")}>
          <Link to="/dashboard">
            <NavLink tab="tab1" active={active}>
              <ActivityLogIcon className="size-4" />
              Dashboard
            </NavLink>
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item onClick={() => handleTab("tab2")}>
          <Link to="/diary">
            <NavLink tab="tab2" active={active}>
              <CookieIcon className="size-4" />
              Food Diary
            </NavLink>
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item onClick={() => handleTab("tab3")}>
          <Link to="/history">
            <NavLink tab="tab3" active={active}>
              <CounterClockwiseClockIcon className="size-4" />
              Workout History
            </NavLink>
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item onClick={() => handleTab("tab4")}>
          <Link to="/progress">
            <NavLink tab="tab4" active={active}>
              <BarChartIcon className="size-4" />
              Progress
            </NavLink>
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item onClick={() => handleTab("tab5")}>
          <Link to="/profile">
            <NavLink tab="tab5" active={active}>
              <PersonIcon className="size-4" />
              Profile
            </NavLink>
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator className="NavigationMenuIndicator" />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

interface NavLinkProps {
  children: ReactNode;
  active: string;
  tab: string;
}

const NavLink = ({ children, active, tab }: NavLinkProps) => (
  <NavigationMenu.Link
    className={`${
      active === tab
        ? "active [&.active]:bg-blue-400 text-white dark:[&.active]:bg-orange-400"
        : ""
    } flex flex-row w-48 px-3 py-2 items-center gap-2 text-black rounded-md cursor-pointer hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition-colors`}
  >
    {children}
  </NavigationMenu.Link>
);
