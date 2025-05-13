interface DashboardTitleProps {
  title: string;
  subtitle: string;
}

export const DashboardTitle = ({ title, subtitle }: DashboardTitleProps) => (
  <section className="flex flex-col text-left w-full lg:w-1/2">
    <h1 className="text-3xl font-bold">{title}</h1>
    <h2 className="text-gray-500">
      {subtitle}
    </h2>
  </section>
);
