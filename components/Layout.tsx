import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  return (
    <>
    <div className="mb-6">
      <Navbar />
      {children}
    </div>
      <Newsletter/>
      <Footer/>
      </>
  );
};
