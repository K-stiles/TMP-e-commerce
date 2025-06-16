import NavBar from "../components/nav-bar";
import LandingPage from "../components/landing-page";

export default function Home() {
  return (
    <div className="bg-[var(--neutral-950)] flex min-h-screen w-full flex-col">
      {/* navbar */}
      <div className="bg-[var(--neutral-950)]/0 fixed top-0 right-0 left-0 z-50 w-full ">
        <NavBar />
      </div>
      <main className="flex-1 pt-17">
        <LandingPage />
      </main>
      LandingFooter
    </div>
  );
}
