// libs
import { z } from "zod";

/**
 * Schema de validação para o formulário de login.
 */

const LoginSchema = z.object({
  email: z.string().email("Email inválido."),
  password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres."),
});

export { LoginSchema };
