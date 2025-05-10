import { AnyFieldMeta } from "@tanstack/react-form";

interface FieldErrorProps {
  meta: AnyFieldMeta;
}

export const FieldError = ({ meta }: FieldErrorProps) => {
  if (!meta.isTouched) return null;

  return meta.errors.map(({ msg }, index) => (
    <p key={index} className="text-red-400 text-sm">
      {msg}
    </p>
  ));
};
