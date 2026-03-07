import { useState } from "react";
import { Search, CheckCircle2, XCircle, ChevronDown, Calendar, ShieldCheck, Fingerprint } from "lucide-react";

const degreeTypes = [
  "Bachelor of Arts (BA)",
  "Bachelor of Science (BSc)",
  "Bachelor of Engineering (BEng)",
  "Bachelor of Commerce (BCom)",
  "Master of Arts (MA)",
  "Master of Science (MSc)",
  "Master of Business Administration (MBA)",
  "Master of Engineering (MEng)",
  "Doctor of Philosophy (PhD)",
  "Doctor of Medicine (MD)",
  "Associate Degree",
  "Diploma",
  "Certificate",
];

const faculties = [
  "Faculty of Engineering",
  "Faculty of Science",
  "Faculty of Arts & Humanities",
  "Faculty of Business & Economics",
  "Faculty of Law",
  "Faculty of Medicine",
  "Faculty of Education",
  "Faculty of Architecture",
  "Faculty of Information Technology",
  "Faculty of Social Sciences",
  "Faculty of Agriculture",
  "Faculty of Fine Arts",
];

type VerificationStatus = "idle" | "loading" | "verified" | "not_found";

export default function Verification() {
  const [status, setStatus] = useState<VerificationStatus>("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    degreeType: "",
    major: "",
    university: "",
    faculty: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate verification
    setTimeout(() => {
      // Randomly verify for demo purposes
      setStatus(Math.random() > 0.4 ? "verified" : "not_found");
    }, 2000);
  };

  const resetForm = () => {
    setStatus("idle");
    setForm({ firstName: "", lastName: "", dateOfBirth: "", degreeType: "", major: "", university: "", faculty: "" });
  };

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-6">
            <Search className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 text-sm">For Public Verification</span>
          </div>
          <h1
            className="text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}
          >
            Degree Verification
          </h1>
          <p className="text-gray-400">
            Enter the individual's personal and academic information to verify
            the authenticity of their degree against our cryptographic registry.
          </p>
        </div>

        {/* Result */}
        {status === "loading" && (
          <div className="mb-8 bg-white/3 border border-white/8 rounded-2xl p-8 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-4 border-cyan-500/30 border-t-cyan-500 animate-spin mb-4" />
            <p className="text-gray-400">Searching cryptographic registry…</p>
          </div>
        )}

        {status === "verified" && (
          <div className="mb-8 bg-emerald-500/5 border border-emerald-500/30 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-emerald-300 text-lg mb-1">Degree Verified</h3>
                <p className="text-gray-400 text-sm mb-4">
                  This degree has been cryptographically verified and matches our
                  institutional registry. The record is authentic.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white/5 rounded-lg px-3 py-2">
                    <div className="text-gray-500 mb-1">Verification ID</div>
                    <div className="text-gray-300 font-mono">DS-{Math.random().toString(36).slice(2, 10).toUpperCase()}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg px-3 py-2">
                    <div className="text-gray-500 mb-1">Timestamp</div>
                    <div className="text-gray-300 font-mono">{new Date().toISOString().slice(0, 19)}</div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={resetForm}
              className="mt-6 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 py-3 rounded-xl text-sm font-medium transition-all"
            >
              Verify Another
            </button>
          </div>
        )}

        {status === "not_found" && (
          <div className="mb-8 bg-rose-500/5 border border-rose-500/30 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-rose-500/10 rounded-full flex items-center justify-center shrink-0">
                <XCircle className="w-8 h-8 text-rose-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-rose-300 text-lg mb-1">Not Verified</h3>
                <p className="text-gray-400 text-sm">
                  No matching degree record was found in our registry. This may
                  mean the degree is unregistered, the information is incorrect,
                  or the record may be fraudulent.
                </p>
              </div>
            </div>
            <button
              onClick={resetForm}
              className="mt-6 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 py-3 rounded-xl text-sm font-medium transition-all"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Form */}
        {(status === "idle" || status === "loading") && (
          <div className="bg-white/3 border border-white/8 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    First Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexandra"
                    value={form.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    disabled={status === "loading"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/60 focus:bg-white/8 transition-all text-sm disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Last Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Johnson"
                    value={form.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    disabled={status === "loading"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/60 focus:bg-white/8 transition-all text-sm disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Date of Birth <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={form.dateOfBirth}
                    onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                    disabled={status === "loading"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/60 focus:bg-white/8 transition-all text-sm [color-scheme:dark] disabled:opacity-50"
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Degree Type */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Degree Type <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={form.degreeType}
                    onChange={(e) => handleChange("degreeType", e.target.value)}
                    disabled={status === "loading"}
                    className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/60 focus:bg-white/8 transition-all text-sm [color-scheme:dark] disabled:opacity-50"
                  >
                    <option value="" disabled className="bg-[#0f172a]">Select degree type...</option>
                    {degreeTypes.map((d) => (
                      <option key={d} value={d} className="bg-[#0f172a]">{d}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Major */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Major / Field of Study <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Computer Science"
                  value={form.major}
                  onChange={(e) => handleChange("major", e.target.value)}
                  disabled={status === "loading"}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/60 focus:bg-white/8 transition-all text-sm disabled:opacity-50"
                />
              </div>

              {/* University */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  University / Institution <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Massachusetts Institute of Technology"
                  value={form.university}
                  onChange={(e) => handleChange("university", e.target.value)}
                  disabled={status === "loading"}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/60 focus:bg-white/8 transition-all text-sm disabled:opacity-50"
                />
              </div>

              {/* Faculty */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Faculty / School <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={form.faculty}
                    onChange={(e) => handleChange("faculty", e.target.value)}
                    disabled={status === "loading"}
                    className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/60 focus:bg-white/8 transition-all text-sm [color-scheme:dark] disabled:opacity-50"
                  >
                    <option value="" disabled className="bg-[#0f172a]">Select faculty...</option>
                    {faculties.map((f) => (
                      <option key={f} value={f} className="bg-[#0f172a]">{f}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div className="border-t border-white/5 pt-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-teal-500 hover:bg-teal-400 text-white py-4 rounded-xl font-medium transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Verifying…
                    </>
                  ) : (
                    <>
                      <Fingerprint className="w-4 h-4" />
                      Verify Degree
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Info note */}
        <div className="mt-4 flex items-start gap-3 bg-teal-500/5 border border-teal-500/15 rounded-xl px-4 py-3">
          <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
          <p className="text-xs text-gray-400">
            All verification queries are encrypted in transit. Personal data
            submitted for verification is not stored after the query is resolved.
          </p>
        </div>
      </div>
    </div>
  );
}