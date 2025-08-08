// react
import React from "react";

// interface
interface BottomContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BottomContent = ({ children, ...rest }: BottomContentProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      {...rest}
    >
      {children}
    </div>
  );
};
