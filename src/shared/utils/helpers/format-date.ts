/**
 * Exemplo de helper para formatação de data genérica
 * para data no estilo Brasileiro.
 */

export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('pt-BR');
};
