import { Tabs } from "radix-ui";
import { ReactNode } from "react";

interface TabGroupProps {
  tabName: string[];
  tabChild: ReactNode[];
}

export const TabGroup = ({ tabName, tabChild }: TabGroupProps) => (
  <>
    <Tabs.List className="flex justify-center items-center bg-gray-100 h-10 rounded-md px-1 py-1 text-sm dark:bg-[#e8dad2]">
      {tabName.map((tab, i) => (
        <Tabs.Trigger
          key={i}
          value={`tab` + (i + 1)}
          className="h-full w-full rounded-sm cursor-pointer text-gray-500 data-[state=active]:text-black data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:shadow-gray-200 dark:data-[state=active]:bg-[#d76a2d] dark:data-[state=active]:text-[#e7d9d1] dark:text-gray-500"
        >
          {tab}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    {tabChild.map((tabContent, i) => (
      <Tabs.Content key={i} value={`tab` + (i + 1)} className="py-8">
        {tabContent}
      </Tabs.Content>
    ))}
  </>
);
