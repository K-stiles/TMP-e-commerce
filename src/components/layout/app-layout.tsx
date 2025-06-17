import Footer from "@/components/footer";
import { Outlet } from "react-router";
import NavBar from "../nav-bar";

export default function AppLayout() {
  return (
    <div className="bg-background flex min-h-screen w-full flex-col">
      {/* navbar */}
      <NavBar />

      {/* main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
