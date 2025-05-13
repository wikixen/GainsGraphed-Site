import { useGoogleLogin } from "@react-oauth/google";
import { Link, redirect } from "@tanstack/react-router";
import { Tabs } from "radix-ui";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/Logo.png";
import LogoDark from "../../assets/LogoDark.png";
import LogoLight from "../../assets/LogoLight.png";
import { useAppForm } from "../../components/form";
import { TabGroup } from "../../components/ui/tabGroup";

interface AuthFormProps {
  defaultTab: string;
}

export const AuthForm = ({ defaultTab }: AuthFormProps) => {
  const googleLogin = useGoogleLogin({
    onSuccess: (CredentialResponse) => {
      console.log(CredentialResponse);
      redirect({
        to: "/dashboard",
        throw: true,
      });
    },
    onError: () => console.error("Login Failed"),
  });

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
        <div className="flex flex-col gap-3 not-md:pb-8 pb-8">
          <h1 className="text-3xl font-bold dark:text-[#fbf1ec]">
            Welcome Back
          </h1>
          <h2 className="text-gray-500 dark:text-gray-400">
            Sign in to continue to GainsGraphed
          </h2>
        </div>
        <Tabs.Root defaultValue={defaultTab} className="w-105">
          <TabGroup
            tabName={["Login", "Sign Up"]}
            tabChild={[
              <LoginForm googleLogin={googleLogin} />,
              <SignUpForm googleLogin={googleLogin} />,
            ]}
          />
        </Tabs.Root>
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

const LoginForm = ({ googleLogin }: { googleLogin: () => void }) => {
  const form = useAppForm({
    defaultValues: {
      email: "",
    },
    onSubmit: ({ value }) => console.log(value),
  });

  return (
    <>
      <button
        className="flex gap-1 items-center justify-center bg-white text-black border-1 border-gray-200 rounded-md w-full px-7 py-3 text-sm cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={() => googleLogin()}
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
      <h4 className="w-full text-center border-b-1 border-b-gray-300 leading-1 my-4">
        <span className="bg-white px-2 text-gray-500 dark:bg-black dark:text-white">
          OR CONTINUE WITH
        </span>
      </h4>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.AppField
          name="email"
          children={(field) => (
            <field.TextField
              label="Email"
              type="email"
              placeholder="your.email@example.com"
            />
          )}
        />
        <form.AppForm>
          <form.SubmitBtn>
            Login
          </form.SubmitBtn>
        </form.AppForm>
      </form>
    </>
  );
};

const SignUpForm = ({ googleLogin }: { googleLogin: () => void }) => {
  const form = useAppForm({
    defaultValues: {
      name: "",
      email: "",
      confirm: "",
    },
    onSubmit: ({ value }) => console.log(value),
  });

  return (
    <>
      <button
        className="flex gap-1 items-center justify-center bg-white text-black border-1 border-gray-200 rounded-md w-full px-7 py-3 text-sm cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={() => googleLogin()}
      >
        <FcGoogle className="text-xl" />
        Sign up with Google
      </button>
      <h4 className="w-full text-center border-b-1 border-b-gray-300 leading-1 my-4">
        <span className="bg-white px-2 text-gray-500 dark:bg-black dark:text-white">
          OR SIGN UP WITH EMAIL
        </span>
      </h4>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.AppField
          name="name"
          children={(field) => (
            <field.TextField
              label="Name"
              type="text"
              placeholder="Jamie Doe"
            />
          )}
        />
        <form.AppField
          name="email"
          children={(field) => (
            <field.TextField
              label="Email"
              type="email"
              placeholder="your.email@example.com"
            />
          )}
        />
        <form.AppField
          name="confirm"
          children={(field) => (
            <field.TextField
              label="Confirm Email"
              type="email"
              placeholder="your.email@example.com"
            />
          )}
        />
        <form.AppForm>
          <form.SubmitBtn>
            Sign Up
          </form.SubmitBtn>
        </form.AppForm>
      </form>
    </>
  );
};
