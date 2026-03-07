import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#060d1f] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
}
