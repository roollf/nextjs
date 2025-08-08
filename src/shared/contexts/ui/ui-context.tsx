'use client';

/**
 * Exemplo de contexto para gerenciar algum estado global relacionado a UI dentro da aplicação.
 * Este é um exemplo básico e pode ser expandido conforme necessário.
 */

// react
import React from 'react';

/**
 * Tipo genérico para o contexto da UI.
 * Este tipo pode ser modificado para incluir propriedades e métodos específicos
 * que você deseja expor através do contexto.
 */

// type
type GenericUIContextType = {
  genericUIState: any;
  setGenericUIState: React.Dispatch<React.SetStateAction<any>>;
  genericUIVariable: any;
  genericUIFunction: (value: any) => any;
};

const GenericUIContext = React.createContext<GenericUIContextType | undefined>(
  undefined
);

export const GenericUIProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [genericUIState, setGenericUIState] = React.useState<any | null>(null);
  const genericUIVariable: any = 'qualquer valor';
  const genericUIFunction: any = (value: any): any => {
    return value;
  };

  return (
    <GenericUIContext.Provider
      value={{
        genericUIState,
        setGenericUIState,
        genericUIVariable,
        genericUIFunction,
      }}
    >
      {children}
    </GenericUIContext.Provider>
  );
};

export const useGenericUIContext = () => {
  const context = React.useContext(GenericUIContext);
  if (!context) {
    throw new Error(
      'useGenericUIContext must be used within a GenericUIProvider'
    );
  }
  return context;
};
