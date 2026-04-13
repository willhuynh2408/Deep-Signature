import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[#060d1f] text-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <main className="overflow-x-hidden pt-20">
        <Outlet />
      </main>
    </div>
  );
}
