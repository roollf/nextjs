// libs
import { ZodError } from "zod";

// types
import { LoginFormFields } from "@/@shared/types/login-form-fields.type";

/**
 * @param error Erro capturado durante a validação do formulário.
 * @param fieldValues Valores dos campos do formulário de login.
 * @returns Objeto contendo a mensagem de erro, erros de validação e valores dos campos do formulário.
 */

const FormErrorHandler = (error: unknown, fieldValues: LoginFormFields) => {
  if (error instanceof ZodError) {
    const errorMap = error.flatten().fieldErrors;

    return {
      message: "error",
      errors: {
        email: errorMap["email"]?.[0] ?? "",
        password: errorMap["password"]?.[0] ?? "",
      },
      fieldValues: {
        email: fieldValues.email,
        password: fieldValues.password,
      },
    };
  } else {
    return {
      message: "error",
      errors: {
        email: "Ocorreu um erro ao processar o formulário.",
        password: "Ocorreu um erro ao processar o formulário.",
      },
      fieldValues: {
        email: fieldValues.email,
        password: fieldValues.password,
      },
    };
  }
};

export { FormErrorHandler };
