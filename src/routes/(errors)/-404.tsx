import { Link } from "@tanstack/react-router";
import { PrimaryButton } from "../../components/ui/primaryButton";

export const NotFoundPage = () => {
  return (
    <main className="flex flex-col gap-4 min-h-screen justify-center items-center pb-40 dark:bg-black dark:text-white">
      <h1 className="text-2xl">Oops, you've seem to have wandered off.</h1>
      <section className="flex flex-col items-center gap-2">
        <h2>The URL you provided doesn't exist.</h2>
        <PrimaryButton>
          <Link to="/">
            Go Back{/*/Landing */}
          </Link>
        </PrimaryButton>
      </section>
    </main>
  );
};
