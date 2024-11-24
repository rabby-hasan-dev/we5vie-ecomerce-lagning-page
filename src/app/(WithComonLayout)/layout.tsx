
import Footer from "@/Components/module/Footer/Footer";
import Navbar from "@/Components/module/Navbar/Navbar";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
