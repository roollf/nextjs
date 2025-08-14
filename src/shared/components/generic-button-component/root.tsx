// react
import React from 'react';

// libs
import { twMerge } from 'tailwind-merge';

// interface
interface RootProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Root = ({ children, className, ...rest }: RootProps) => {
  return (
    <button
      className={twMerge('flex items-center justify-center', className)}
      {...rest}
    >
      {children}
    </button>
  );
};
