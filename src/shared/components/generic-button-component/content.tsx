// react
import React from 'react';

// libs
import { twMerge } from 'tailwind-merge';

// interface
interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Content = ({ children, className, ...rest }: ContentProps) => {
  return (
    <div
      className={twMerge('flex items-center justify-center', className)}
      {...rest}
    >
      {children}
    </div>
  );
};
