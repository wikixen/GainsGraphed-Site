import { useStore } from "@tanstack/react-store";
import { useFormContext } from "../../util/hooks/useForm/useForm";

interface SubmitBtnProps {
  children: React.ReactNode;
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
      className="bg-sky-500 text-white rounded-md w-48 px-7 py-3 text-sm cursor-pointer hover:bg-sky-400
  dark:bg-orange-500 dark:hover:bg-orange-400
  transition-colors"
      disabled={isSubmitting || !canSubmit}
    >
      {children}
    </button>
  );
};