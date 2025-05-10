import { ReactNode } from "react";
import { useFormContext } from ".";
import { useStore } from "@tanstack/react-form";

interface SubmitBtnProps {
  children: ReactNode;
}

export const SubmitBtn = ({ children }: SubmitBtnProps) => {
  const form = useFormContext();

  const [isSubmitting, canSubmit] = useStore(form.store, (state) => [
    state.isSubmitting,
    state.canSubmit,
  ]);

  return (
    <button
      type="submit"
      disabled={isSubmitting || !canSubmit}
      className="
  bg-sky-500 text-white rounded-md w-full px-7 py-3 text-sm cursor-pointer hover:bg-sky-700
  dark:bg-orange-500 dark:hover:bg-orange-700
  transition-colors"
    >
      {children}
    </button>
  );
};
