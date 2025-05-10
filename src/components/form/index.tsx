import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { TextField } from "./textField";
import { SubmitBtn } from "./submitBtn";

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
  },
  formComponents: {
    SubmitBtn,
  },
  fieldContext,
  formContext,
});
