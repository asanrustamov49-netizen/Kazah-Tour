import React from "react";
import scss from "./layout.c.module.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IChildrenProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IChildrenProps) => {
  const qc = new QueryClient();
  return (
    <QueryClientProvider client={qc}>
      <div className="layout">
        {/* header */}
        <main>{children}</main>
        {/* footer  */}
      </div>
      ;
    </QueryClientProvider>
  );
};

export default Layout;
