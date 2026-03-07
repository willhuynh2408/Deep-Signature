import { useState } from "react";
import { Building2, CheckCircle2, ChevronDown, Calendar } from "lucide-react";

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

export default function Registration() {
  const [submitted, setSubmitted] = useState(false);
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
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-white text-2xl mb-3">Registration Submitted</h2>
          <p className="text-gray-400 mb-6">
            The degree record has been submitted for cryptographic signing.
            Your institution will receive a confirmation email with the
            verification certificate within 24 hours.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", dateOfBirth: "", degreeType: "", major: "", university: "", faculty: "" }); }}
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-xl font-medium transition-all"
          >
            Register Another Graduate
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">
              For Institutes
            </span>
          </div>
          <h1
            className="text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}
          >
            Institute Registration
          </h1>
          <p className="text-gray-400">
            Register a graduate's degree record to the Deep Signature network.
            All fields are required to generate a valid cryptographic signature.
          </p>
        </div>

        {/* Form Card */}
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all text-sm"
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all text-sm"
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all text-sm [color-scheme:dark]"
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
                  className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all text-sm [color-scheme:dark]"
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
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all text-sm"
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
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all text-sm"
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
                  className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all text-sm [color-scheme:dark]"
                >
                  <option value="" disabled className="bg-[#0f172a]">Select faculty...</option>
                  {faculties.map((f) => (
                    <option key={f} value={f} className="bg-[#0f172a]">{f}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/5 pt-4">
              <p className="text-xs text-gray-500 mb-4">
                By submitting this form, your institution confirms that the
                information provided is accurate and authorised for Deep
                Signature verification.
              </p>
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-white py-4 rounded-xl font-medium transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                <Building2 className="w-4 h-4" />
                Submit Registration
              </button>
            </div>
          </form>
        </div>

        {/* Info note */}
        <div className="mt-4 flex items-start gap-3 bg-cyan-500/5 border border-cyan-500/15 rounded-xl px-4 py-3">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="text-xs text-gray-400">
            Only registered and accredited institutions may submit degree records.
            Each submission is logged and cryptographically signed within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}