import NavBar from "../components/nav-bar";
import MainContent from "../components/main-content";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-white flex min-h-screen w-full flex-col">
      {/* navbar */}
      <NavBar />
      {/* main content */}
      <main className="flex-1">
        <MainContent />
      </main>

      <Footer />
    </div>
  );
}
