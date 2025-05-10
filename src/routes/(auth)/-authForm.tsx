import { Link } from "@tanstack/react-router";
import { Tabs } from "radix-ui";
import Logo from "../../assets/Logo.png";
import LogoDark from "../../assets/LogoDark.png";
import LogoLight from "../../assets/LogoLight.png";
import { useAppForm } from "../../components/form";

interface AuthFormProps {
  defaultTab: string;
}

export const AuthForm = ({ defaultTab }: AuthFormProps) => {
  return (
    <main className="grid grid-cols-2 gap-8 min-h-screen items-center bg-linear-to-r dark:bg-black dark:text-white not-md:flex not-md:flex-col">
      <section className="flex flex-col h-full gap-2 text-center items-center justify-center bg-[#e3f0f9] text-[#17262f] px-8 dark:text-[#e8dad2] dark:bg-black not-md:hidden">
        <img
          src={Logo}
          alt="GainsGraphed Logo"
          className="size-50 dark:hidden"
        />
        <img
          src={LogoDark}
          alt="GainsGraphed Logo"
          className="size-50 not-dark:hidden"
        />
        <p className="text-xl">
          Track your fitness journey, monitor your nutrition, and reach your
          wellness goals.
        </p>
      </section>
      <section className="flex flex-col text-center items-center pr-4 not-md:w-105">
        <img
          src={LogoLight}
          alt="GainsGraphed Logo"
          className="size-30 md:hidden dark:hidden"
        />
        <img
          src={LogoDark}
          alt="GainsGraphed Logo"
          className="size-30 md:hidden not-dark:hidden"
        />
        <div className="flex flex-col gap-3 not-md:pb-8">
          <h1 className="text-3xl font-bold dark:text-[#fbf1ec]">
            Welcome Back
          </h1>
          <h2 className="text-gray-500 dark:text-gray-400">
            Sign in to continue to GainsGraphed
          </h2>
        </div>
        <AuthTabs defaultTab={defaultTab} />
        <div className="flex flex-col gap-8">
          <div className="flex gap-1 text-sm sm:visible">
            <span className="text-gray-500 dark:text-gray-400">
              Don't have an account sign up?
            </span>
            <Link
              to="/signup"
              className="text-[#7ac2f6] hover:underline hover:text-[#639cc5] dark:text-orange-300 dark:hover:text-orange-400"
            >
              Sign Up
            </Link>
          </div>
          <Link
            to="/"
            className="text-[#7ac2f6] hover:underline hover:text-[#639cc5] text-sm dark:text-orange-300 dark:hover:text-orange-400"
          >
            Back to Landing Page
          </Link>
        </div>
      </section>
    </main>
  );
};

interface AuthTabsProps {
  defaultTab: string;
}

const AuthTabs = ({ defaultTab }: AuthTabsProps) => {
  const loginForm = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => console.log(value),
  });
  const signUpForm = useAppForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
    },
    onSubmit: ({ value }) => console.log(value),
  });
  return (
    <Tabs.Root defaultValue={defaultTab} className="w-105">
      <Tabs.List className="flex justify-center items-center bg-gray-100 h-10 rounded-md px-1 py-1 text-sm dark:bg-[#e8dad2]">
        <Tabs.Trigger
          value="tab1"
          className="h-full w-full rounded-sm cursor-pointer text-gray-500 data-[state=active]:text-black data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:shadow-gray-200 dark:data-[state=active]:bg-[#d76a2d] dark:data-[state=active]:text-[#e7d9d1] dark:text-gray-500"
        >
          Login
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab2"
          className="h-full w-full rounded-sm cursor-pointer text-gray-500 data-[state=active]:text-black data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:shadow-gray-200 dark:data-[state=active]:bg-[#d76a2d] dark:data-[state=active]:text-[#e7d9d1] dark:text-gray-500"
        >
          Sign Up
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1" className="py-8">
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            loginForm.handleSubmit();
          }}
        >
          <loginForm.AppField
            name="email"
            children={(field) => (
              <field.TextField
                label="Email"
                type="email"
                placeholder="your.email@example.com"
              />
            )}
          />
          <loginForm.AppField
            name="password"
            children={(field) => (
              <field.TextField
                label="Password"
                type="password"
                placeholder="********"
              />
            )}
          />
          <loginForm.AppForm>
            <loginForm.SubmitBtn>
              Login
            </loginForm.SubmitBtn>
          </loginForm.AppForm>
        </form>
      </Tabs.Content>
      <Tabs.Content value="tab2" className="py-8">
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            signUpForm.handleSubmit();
          }}
        >
          <signUpForm.AppField
            name="name"
            children={(field) => (
              <field.TextField
                label="Name"
                type="text"
                placeholder="Jamie Doe"
              />
            )}
          />
          <signUpForm.AppField
            name="email"
            children={(field) => (
              <field.TextField
                label="Email"
                type="email"
                placeholder="your.email@example.com"
              />
            )}
          />
          <signUpForm.AppField
            name="password"
            children={(field) => (
              <field.TextField
                label="Password"
                type="password"
                placeholder="********"
              />
            )}
          />
          <signUpForm.AppField
            name="confirm"
            children={(field) => (
              <field.TextField
                label="Confirm Password"
                type="password"
                placeholder="********"
              />
            )}
          />
          <signUpForm.AppForm>
            <signUpForm.SubmitBtn>
              Sign Up
            </signUpForm.SubmitBtn>
          </signUpForm.AppForm>
        </form>
      </Tabs.Content>
    </Tabs.Root>
  );
};
