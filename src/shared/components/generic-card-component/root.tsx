// react
import React from 'react';

// interface
interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Root = ({ children, ...rest }: RootProps) => {
  return (
    <div className="flex flex-col items-center justify-center" {...rest}>
      {children}
    </div>
  );
};
