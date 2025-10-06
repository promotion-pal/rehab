import { cn } from "@heroui/theme";
import { FC, ReactNode } from "react";

interface CommonWrapperProps {
  caption?: string;
  children: ReactNode;
  styleWrapper?: string;
}
const CommonWrapper: FC<CommonWrapperProps> = ({ children, styleWrapper }) => {
  return (
    <div
      className={cn(
        `relative flex items-center rounded-xl justify-center 
        bg-gradient-to-br from-blue-50 via-green-50 to-amber-50 
        dark:from-blue-950 dark:via-green-950 dark:to-amber-900 
        overflow-hidden px-3 sm:px-6 lg:px-6 py-3 sm:py-3 lg:py-4`,
        styleWrapper
      )}
    >
      {children}
    </div>
  );
};

export { CommonWrapper };
