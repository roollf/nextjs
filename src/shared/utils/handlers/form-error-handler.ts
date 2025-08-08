// libs
import { ZodError } from 'zod';

// interfaces
import { FormErrorResult } from '@/shared/interfaces/form-error-result';

// types
import { GenericFormValues } from '@/shared/types/generic-form-values';

function FormErrorHandler<T extends GenericFormValues>(
  error: unknown,
  fieldValues: T
): FormErrorResult<T> {
  const rawErrors = Object.keys(fieldValues).reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue as keyof T] = '';
      return accumulator;
    },
    {} as Record<keyof T, string>
  );

  const errors = Object.keys(fieldValues).reduce(
    (accumulator, currentValue) => {
      if (error instanceof ZodError) {
        const errorMap = error.flatten().fieldErrors;
        accumulator[currentValue as keyof T] =
          errorMap[currentValue]?.[0] ?? '';
      } else {
        accumulator[currentValue as keyof T] =
          'Ocorreu um error ao processar o formulário';
      }
      return accumulator;
    },
    { ...rawErrors }
  );

  return {
    message: 'error',
    errors,
    fieldValues,
  };
}

export { FormErrorHandler };
