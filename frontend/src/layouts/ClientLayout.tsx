import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import { Outlet } from "react-router-dom";

export default function ClientLayout() {
  return (
    <>
      <NavBar />
      <main className="min-h-[calc(100vh-4rem)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
