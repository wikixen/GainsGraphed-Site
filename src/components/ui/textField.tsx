import { useFieldContext } from "../../util/hooks/useForm/useForm";
import { FieldErrors } from "./fieldErrors";

interface TextFieldProps {
  label: string;
  hidden: boolean;
  type: string;
}

export const TextField = ({ label, hidden, type }: TextFieldProps) => {
  const field = useFieldContext<string>();

  return (
    <article className="flex flex-col gap-2">
      <label
        htmlFor={field.name}
        className="text-xl"
        hidden={hidden}
      >
        {label}
      </label>
      <input
        className="w-full h-8 p-4 border-1 rounded-md resize-none focus:outline-slate-500 focus:outline-1"
        id={field.name}
        type={type}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      <FieldErrors meta={field.state.meta} />
    </article>
  );
};