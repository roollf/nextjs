// react
import React from "react";

// interface
interface UpperContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const UpperContent = ({ children, ...rest }: UpperContentProps) => {
  return (
    <div className="flex flex-col items-center justify-center" {...rest}>
      {children}
    </div>
  );
};
