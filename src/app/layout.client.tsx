import LayoutSite from "@/components/layout/LayoutSite";
import ReduxProvider from "@/providers/ReduxProvider";
import React, { FC, ReactNode } from "react";

interface LayoutClientProps {
  children: ReactNode;
}
const LayoutClient: FC<LayoutClientProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <LayoutSite>{children}</LayoutSite>
    </ReduxProvider>
  );
};

export default LayoutClient;
