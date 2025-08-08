'use client';

/**
 * Exemplo de hook para gerenciar a visualização dos erros no forumlário de login.
 * Consiste no gerenciamento do elemento no DOM através do useRef,
 * fazendo com que a transição entre elementos seja suavizada.
 * Este é um exemplo básico e pode ser expandido conforme necessário.
 */

// react
import React from 'react';

export function useAnimatedError(errorMessage?: string | null) {
  const ref = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (errorMessage) {
      element.textContent = errorMessage;
      element.classList.remove('opacity-0');
      element.classList.add('opacity-100');
    } else {
      element.classList.remove('opacity-100');
      element.classList.add('opacity-0');

      const timeout = setTimeout(() => {
        if (element) element.textContent = '';
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [errorMessage]);

  return ref;
}
