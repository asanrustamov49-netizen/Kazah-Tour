"use client";
import React from "react";
import scss from "./layout.c.module.scss";
import Header from "./header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./footer/Footer";

interface IChildrenProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IChildrenProps) => {
  const qc = new QueryClient();
  return (
    <QueryClientProvider client={qc}>
      <div className={scss.layout}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default Layout;
