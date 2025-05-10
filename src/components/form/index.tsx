import { createFormHook, createFormHookContexts } from '@tanstack/react-form';
import { TextField } from './textField';

export const { fieldContext, useFieldContext, formContext, useFormContext } = createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
  },
  formComponents: {},
  fieldContext,
  formContext,
});