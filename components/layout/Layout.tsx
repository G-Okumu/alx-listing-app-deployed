import React, { ReactNode } from "react";


import {Header} from "./Header";
import {Footer} from "./Footer";
import { PropertyTypes } from "../common/PropertyTypes";
import { HeroSection } from "./Hero-Section";


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <PropertyTypes/>
      <HeroSection/>
      <main className="min-h-screen bg-background">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;