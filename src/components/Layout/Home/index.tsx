import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full h-full bg-zinc-200 dark:bg-zinc-900">
      {/* Navbar */}
      <Navbar />

      {/* Body */}
      <div className="w-full h-auto min-h-screen">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
