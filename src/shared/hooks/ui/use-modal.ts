'use client';

/**
 * Exemplo de hook para gerenciar a visualização de um modal dentro da aplicação.
 * Este é um exemplo básico e pode ser expandido conforme necessário.
 */

// react
import React from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return { isOpen, open, close, toggle };
};
