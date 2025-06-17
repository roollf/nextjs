// react
import React from "react";

// interface
interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Root = ({ children, ...rest }: RootProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-[440px] h-[460px] p-[40px] gap-[40px] rounded-bl-[10px] rounded-tl-[10px] bg-[#E1DBFF]"
      {...rest}
    >
      {children}
    </div>
  );
};
