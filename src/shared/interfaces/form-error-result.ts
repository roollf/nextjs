// types
import { GenericFormValues } from '@/shared/types/generic-form-values';

interface FormErrorResult<T extends GenericFormValues> {
  message: string;
  errors: Record<keyof T, string>;
  fieldValues: T;
}

export type { FormErrorResult };
