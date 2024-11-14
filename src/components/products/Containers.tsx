import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("container mx-auto max-w-[1320px]", className)}>
      {children}
    </div>
  );
}
