import React from "react";
import MovieTab from "../../MovieTab";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full h-full bg-zinc-200 dark:bg-zinc-900">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar & Body */}
      <div className="flex w-full h-full relative">
        <Sidebar />

        <div className="px-2 w-[calc(100%_-_240px)] lg:w-[calc(100%_-_256px)] md:px-4 lg:px-8 grow ml-60 lg:ml-64 mt-20">
          {/* Movie Tab */}
          <MovieTab />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
