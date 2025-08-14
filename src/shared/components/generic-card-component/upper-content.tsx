// react
import React from 'react';

// libs
import { twMerge } from 'tailwind-merge';

// interface
interface UpperContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const UpperContent = ({
  children,
  className,
  ...rest
}: UpperContentProps) => {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
