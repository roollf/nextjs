// react
import React from 'react';

// interface
interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Content = ({ children, ...rest }: ContentProps) => {
  return (
    <div
      className="flex items-center justify-center"
      {...rest}
    >
      {children}
    </div>
  );
};
