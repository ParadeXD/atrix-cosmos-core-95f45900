import { ReactNode } from "react";
import SidebarNav from "./SidebarNav";
import Footer from "./Footer";
import ParticleField from "./ParticleField";
import ThemeToggle from "./ThemeToggle";
import CustomCursor from "./CustomCursor";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background relative">
    <CustomCursor />
    <ParticleField />
    <SidebarNav />
    <ThemeToggle />
    <main className="relative z-10">{children}</main>
    <Footer />
  </div>
);

export default Layout;
