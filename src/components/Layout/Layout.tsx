import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PromoBanner from "../UI/PromoBanner";
import WhatsAppButton from "../UI/WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background smooth-scroll bottom-1000">
      <Header />
      <PromoBanner />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
