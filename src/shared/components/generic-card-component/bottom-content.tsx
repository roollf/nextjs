// react
import React from 'react';

// libs
import { twMerge } from 'tailwind-merge';

// interface
interface BottomContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BottomContent = ({
  children,
  className,
  ...rest
}: BottomContentProps) => {
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
