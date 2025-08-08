// types
import { LoginFormFields } from "./login-form-fields.type";

type LoginFormState = {
  message: string;
  errors: Record<keyof LoginFormFields, string> | undefined;
  fieldValues: LoginFormFields;
};

export type { LoginFormState };
