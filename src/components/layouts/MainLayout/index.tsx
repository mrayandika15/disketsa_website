import Navbar from "@/components/core/Navbar";
import React from "react";
import { MainLayoutType } from "./MainLayout.type";

const MainLayout: React.FC<MainLayoutType> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
