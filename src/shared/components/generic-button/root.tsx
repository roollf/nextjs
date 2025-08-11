// react
import React from 'react';

// interface
interface RootProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Root = ({ children, ...rest }: RootProps) => {
  return (
    <button className="flex items-center justify-center" {...rest}>
      {children}
    </button>
  );
};
