import { Link, useLocation } from "react-router";
import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { ROUTES } from "../paths";

export function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060d1f]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to={ROUTES.home} className="flex items-center gap-2 group">
          <ShieldCheck className="w-7 h-7 text-cyan-400" />
          <span
            className="text-white tracking-wide text-xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Deeploma
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {/* Registration */}
          <Link
            to={ROUTES.registration}
            className={`relative px-5 py-2 rounded-lg transition-all flex flex-col items-center ${
              isActive(ROUTES.registration)
                ? "bg-cyan-500/20 text-cyan-300"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="text-sm font-medium">Registration</span>
            <span className="text-[10px] italic text-cyan-400/80 leading-none mt-0.5">
              For Institutes
            </span>
          </Link>

          {/* Verification */}
          <Link
            to={ROUTES.verification}
            className={`relative px-5 py-2 rounded-lg transition-all flex flex-col items-center ${
              isActive(ROUTES.verification)
                ? "bg-cyan-500/20 text-cyan-300"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="text-sm font-medium">Verification</span>
            <span className="text-[10px] italic text-teal-400/80 leading-none mt-0.5">
              For Public
            </span>
          </Link>

          <Link
            to={ROUTES.bulkUpload}
            className={`relative px-5 py-2 rounded-lg transition-all flex flex-col items-center ${
              isActive(ROUTES.bulkUpload)
                ? "bg-cyan-500/20 text-cyan-300"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="text-sm font-medium">Bulk Upload</span>
            <span className="text-[10px] italic text-cyan-400/80 leading-none mt-0.5">
              For Institutes
            </span>
          </Link>

          {/* About Us */}
          <Link
            to={ROUTES.about}
            className={`px-5 py-2 rounded-lg transition-all text-sm font-medium ${
              isActive(ROUTES.about)
                ? "bg-cyan-500/20 text-cyan-300"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            About Us
          </Link>

          {/* Login */}
          <Link
            to={ROUTES.login}
            className={`ml-2 px-6 py-2 rounded-lg text-sm font-medium border transition-all ${
              isActive(ROUTES.login)
                ? "bg-cyan-500 text-white border-cyan-500"
                : "border-cyan-500/60 text-cyan-300 hover:bg-cyan-500 hover:text-white"
            }`}
          >
            Login
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-[#060d1f] border-t border-white/10 px-6 py-4 flex flex-col gap-2">
          <Link
            to={ROUTES.registration}
            onClick={() => setMenuOpen(false)}
            className="flex flex-col px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
          >
            <span className="font-medium">Registration</span>
            <span className="text-xs italic text-cyan-400/80">For Institutes</span>
          </Link>
          <Link
            to={ROUTES.verification}
            onClick={() => setMenuOpen(false)}
            className="flex flex-col px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
          >
            <span className="font-medium">Verification</span>
            <span className="text-xs italic text-teal-400/80">For Public</span>
          </Link>
          <Link
            to={ROUTES.bulkUpload}
            onClick={() => setMenuOpen(false)}
            className="flex flex-col px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
          >
            <span className="font-medium">Bulk Upload</span>
            <span className="text-xs italic text-cyan-400/80">For Institutes</span>
          </Link>
          <Link
            to={ROUTES.about}
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 font-medium"
          >
            About Us
          </Link>
          <Link
            to={ROUTES.login}
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 rounded-lg text-center border border-cyan-500/60 text-cyan-300 hover:bg-cyan-500 hover:text-white font-medium transition-all"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
