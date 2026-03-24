import { useState } from "react";
import { Link } from "react-router";
import { ShieldCheck, Eye, EyeOff, Mail, Lock, AlertTriangle, X } from "lucide-react";

// Google SVG icon
function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

// LinkedIn SVG icon
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [showSoonPopup, setShowSoonPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder login logic
    alert("Login submitted! (Demo mode — no backend connected)");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ShieldCheck className="w-8 h-8 text-cyan-400" />
              <span
                className="text-white text-2xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Deeploma
              </span>
            </div>
            <h1 className="text-white text-2xl mb-1">Welcome back</h1>
            <p className="text-gray-500 text-sm">Sign in to your account to continue</p>
          </div>

          {/* Card */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-8">
            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm text-gray-400">Password</label>
                  <a href="#" className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-11 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Sign in button */}
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-white py-3 rounded-xl font-medium transition-all shadow-lg shadow-cyan-500/20"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/8" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#0a1225] px-4 text-xs text-gray-500">
                  or continue with
                </span>
              </div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              onClick={() => setShowSoonPopup(true)}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-800 py-3 rounded-xl font-medium transition-all border border-gray-200 shadow-sm mb-3"
            >
              <GoogleIcon />
              <span>
                Continue with <strong>Google</strong>
              </span>
            </button>

            {/* LinkedIn Login */}
            <button
              type="button"
              onClick={() => setShowSoonPopup(true)}
              className="w-full flex items-center justify-center gap-3 bg-[#0077b5] hover:bg-[#006097] text-white py-3 rounded-xl font-medium transition-all shadow-sm"
            >
              <LinkedInIcon />
              <span>
                Continue with <strong>LinkedIn</strong>
              </span>
            </button>
          </div>

          {/* Sign up link */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Don't have an account?{" "}
            <Link
              to="/registration"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Register your institution
            </Link>
          </p>
        </div>
      </div>
      {showSoonPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20">
          <div className="bg-[#0a1225] border border-white/10 rounded-xl p-6 w-full max-w-sm text-center relative">
            <button
              onClick={() => setShowSoonPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <AlertTriangle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-white text-lg mb-2">Coming Soon</h2>
            <p className="text-gray-400 text-sm">
              Social login options will be available in a future update. Sorry for the inconvenience.
            </p>
            <button
              onClick={() => setShowSoonPopup(false)}
              className="mt-3 px-5 py-2.5 rounded-lg bg-blue-500/20 border border-blue-400/40 text-blue-300 hover:bg-blue-500/30 transition"
            >
              Try again
            </button>
          </div>
        </div>
      )}
    </>
  );
}
