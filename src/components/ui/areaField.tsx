import { useFieldContext } from "../../util/hooks/useForm/useForm";
import { FieldErrors } from "./fieldErrors";

interface TextFieldProps {
  label: string;
  hidden: boolean;
}

// AreaField allows for reusable TextArea forms with Tanstack form
export const AreaField = ({ label, hidden }: TextFieldProps) => {
  const field = useFieldContext<string>();

  return (
    <article className="flex flex-col gap-2">
      <label
        hidden={hidden}
        htmlFor={field.name}
        className="text-xl"
      >
        {label}
      </label>
      <textarea
        id="body"
        className="w-full h-80 p-4 border-1 rounded-md resize-none focus:outline-slate-500 focus:outline-1"
        name="body"
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      <FieldErrors meta={field.state.meta} />
    </article>
  );
};