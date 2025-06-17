/**
 * Exemplo de Server Action do NextJS
 * para realizar o login do usuário.
 */

"use server";

// next
import { revalidatePath } from "next/cache";

// utils
import { LoginSchema } from "@/utils/validations/auth/login-schema";
import { FormErrorHandler } from "@/utils/handlers/form-error-handler";

// types
import { LoginFormState } from "@/@shared/types/login-form-state.type";

/**
 * @param prevState Estado anterior do formulário de login.
 * @param formData Dados do formulário de login.
 * @returns Objeto contendo a mensagem de sucesso ou erro, erros de validação e valores dos campos do formulário.
 */

async function login(prevState: LoginFormState, formData: FormData) {
  // Adicionar um delay artificial para simular tempo de requisição.

  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Capturar valores dos campos do formulário.

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Validar campos do formulário.

  try {
    LoginSchema.parse({
      email,
      password,
    });
    console.log("Logging in with:", { email: email, password: password });
    return {
      message: "success",
      errors: undefined,
      fieldValues: {
        email: "",
        password: "",
      },
    };
    /**
     * Fazer uma revalidação da rota para redirecionar
     * o usuário para a tela que ele pode acessar após
     * realizar o login na aplicação.
     *
     * Utilizar própria revalidação do NextJS:
     * revalidatePath("/");
     */
  } catch (error) {
    return FormErrorHandler(error, { email: email, password: password });
  }
}

export { login };
