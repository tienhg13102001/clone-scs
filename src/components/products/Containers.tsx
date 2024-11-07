import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div
      className="container max-w-[1320px]"
    >
      {children}
    </div>
  );
}