'use client';

/**
 * Exemplo de contexto para gerenciar algum estado global relacionado a API dentro da aplicação.
 * Este é um exemplo básico e pode ser expandido conforme necessário.
 */

// react
import React from 'react';

/**
 * Tipo genérico para o contexto da API.
 * Este tipo pode ser modificado para incluir propriedades e métodos específicos
 * que você deseja expor através do contexto.
 */

// type
type GenericAPIContextType = {
  genericAPIState: any;
  setGenericAPIState: React.Dispatch<React.SetStateAction<any>>;
  genericAPIVariable: any;
  genericAPIFunction: (value: any) => any;
};

const GenericAPIContext = React.createContext<
  GenericAPIContextType | undefined
>(undefined);

export const GenericAPIProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [genericAPIState, setGenericAPIState] = React.useState<any | null>(
    null
  );
  const genericAPIVariable: any = 'qualquer valor';
  const genericAPIFunction: any = (value: any): any => {
    return value;
  };

  return (
    <GenericAPIContext.Provider
      value={{
        genericAPIState,
        setGenericAPIState,
        genericAPIVariable,
        genericAPIFunction,
      }}
    >
      {children}
    </GenericAPIContext.Provider>
  );
};

export const useGenericAPIContext = () => {
  const context = React.useContext(GenericAPIContext);
  if (!context) {
    throw new Error(
      'useGenericAPIContext must be used within a GenericAPIProvider'
    );
  }
  return context;
};
