/**
 * Server Action genérica simples.
 * Serve apenas como exemplo para ser adaptado.
 */

'use server';

async function genericServerAction(formData: FormData) {
  // Exemplo de delay artificial para simular tempo de requisição.

  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Capturar valores dos campos do formulário.

  const exampleField = formData.get('exampleField');

  // Validação dos campos do formulário.

  try {
    // Chamada da validação para os campos do formulário.
    // ExampleSchema.parse({ exampleField });
    return { message: 'success' };
  } catch (error) {
    // Capturar o error.
    // return FormErrorHandler(error, { exampleField: exampleField });
  }
}

export { genericServerAction };
