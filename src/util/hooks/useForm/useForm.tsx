import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { TextField } from "../../../components/ui/textField";
import { AreaField } from "../../../components/ui/areaField";
import { SubmitBtn } from "../../../components/ui/submitBtn";

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    AreaField,
  },
  formComponents: {
    SubmitBtn,
  },
  fieldContext,
  formContext,
});