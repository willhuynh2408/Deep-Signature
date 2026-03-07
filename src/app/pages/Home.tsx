import { useState } from "react";
import { Link } from "react-router";
import {
  ShieldCheck,
  Fingerprint,
  BookOpen,
  Globe,
  Lock,
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  BadgeCheck,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
//import heroBg from "figma:asset/a6fc0b233d4c9f7e18e5e9de0e0473a1be668c7c.png";

const heroBg =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc3Mjc2NDQ3NXww&ixlib=rb-4.1.0&q=80&w=1080";
const degreeImage =
  "https://images.unsplash.com/photo-1589330694653-ded6df03f754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGRlZ3JlZSUyMGNlcnRpZmljYXRlfGVufDF8fHx8MTc3Mjc2NDQ3NXww&ixlib=rb-4.1.0&q=80&w=1080";

const universityImage =
  "https://images.unsplash.com/photo-1767969456622-801489bdc169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYWNhZGVtaWMlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI3NjQ0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080";

const steps = [
  {
    icon: <Building2 className="w-10 h-10 text-cyan-400" />,
    step: "01",
    title: "Institute Registration",
    description:
      "Accredited universities and educational institutions register their graduates' degree information through our secure portal. Each institution is vetted and onboarded by our partnership team before gaining access.",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/30",
    accent: "text-cyan-400",
    bgImage: "https://images.unsplash.com/photo-1632243649966-1d3b8e3f2748?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <Fingerprint className="w-10 h-10 text-teal-400" />,
    step: "02",
    title: "Cryptographic Signing",
    description:
      "Each degree record is signed with Deep Signature's proprietary cryptographic algorithm, creating a unique, tamper-proof digital signature. This signature is immutably linked to the graduate's personal identity.",
    color: "from-teal-500/20 to-teal-500/5",
    border: "border-teal-500/30",
    accent: "text-teal-400",
    bgImage: "https://images.unsplash.com/photo-1585079374502-415f8516dcc3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <Globe className="w-10 h-10 text-indigo-400" />,
    step: "03",
    title: "Public Verification",
    description:
      "Employers, institutions, or any member of the public can verify academic credentials instantly by submitting personal and degree details through our public portal — no account required.",
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/30",
    accent: "text-indigo-400",
    bgImage: "https://plus.unsplash.com/premium_photo-1764691322163-fc68acc8214c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <CheckCircle2 className="w-10 h-10 text-emerald-400" />,
    step: "04",
    title: "Instant Results",
    description:
      "Receive a verified or unverified result within seconds, backed by a cryptographic proof trail and full audit log. Each result includes a unique verification ID for your records.",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/30",
    accent: "text-emerald-400",
    bgImage: "https://plus.unsplash.com/premium_photo-1684341008385-31d2eb4f3afe?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const features = [
  {
    icon: <Lock className="w-6 h-6 text-cyan-400" />,
    title: "Tamper-Proof Records",
    description:
      "Every degree record is protected by multi-layer cryptographic signatures that make falsification virtually impossible.",
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Real-Time Verification",
    description:
      "Instant verification results with no waiting period. Confirm academic credentials within seconds, 24/7.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-emerald-400" />,
    title: "Global Recognition",
    description:
      "Partnered with universities worldwide. Our verification is accepted by leading employers and institutions globally.",
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-400" />,
    title: "Privacy First",
    description:
      "We never expose personal data unnecessarily. Verifiers only see a pass/fail result, protecting graduate privacy.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-rose-400" />,
    title: "Comprehensive Data",
    description:
      "Covers degree type, major, faculty, and university — leaving no gap for fraudulent misrepresentation.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
    title: "Audit Trail",
    description:
      "Every verification request is logged with a timestamped cryptographic proof, enabling accountability.",
  },
];

const stats = [
  { value: "500+", label: "Partner Universities" },
  { value: "2M+", label: "Verified Degrees" },
  { value: "98.9%", label: "Accuracy Rate" },
  { value: "150+", label: "Countries Supported" },
];

function HowItWorksSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + steps.length) % steps.length);
  const next = () => setCurrent((c) => (c + 1) % steps.length);

  const step = steps[current];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-cyan-400 text-sm uppercase tracking-widest font-medium">
          How It Works
        </span>
        <h2 className="text-white mt-3 mb-4 text-3xl md:text-4xl">
          Four steps to trust
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Our seamless process bridges institutions and the public through
          cryptographic verification technology.
        </p>
      </div>

      {/* Whole slider block */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url(${step.bgImage})`,
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-80`}
        />

        {/* Content area */}
        <div className="relative z-10 p-10 md:p-14 min-h-[420px] flex flex-col md:flex-row items-center gap-10">
          {/* Step number watermark */}
          <div
            className="absolute top-6 right-8 text-8xl font-black opacity-10 select-none text-white"
            style={{ fontFamily: "'Climate Crisis', cursive" }}
          >
            {step.step}
          </div>

          {/* Icon */}
          <div className="shrink-0 w-28 h-28 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center">
            {step.icon}
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <div className={`text-sm font-mono mb-3 ${step.accent}`}>
              Step {step.step} /{" "}
              {steps.length < 10 ? "0" + steps.length : steps.length}
            </div>

            <h3 className="text-white text-2xl md:text-3xl mb-4">
              {step.title}
            </h3>

            <p className="text-gray-200 leading-relaxed max-w-xl">
              {step.description}
            </p>
          </div>
        </div>

        {/* Navigation INSIDE the same rounded block */}
        <div className="relative z-10 flex items-center justify-between px-10 md:px-14 pb-8">
          {/* Dots */}
          <div className="flex gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current
                    ? "bg-cyan-400 w-8"
                    : "bg-white/20 w-2 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 hover:bg-cyan-500/30 hover:text-cyan-100 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image — provided Figma asset */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay to keep text readable */}
          <div className="absolute inset-0 bg-[#060d1f]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060d1f]/40 via-transparent to-[#060d1f]" />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl z-0 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl z-0 pointer-events-none" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-8">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">Trusted Academic Verification Platform</span>
          </div>

          {/* Main Title */}
          <h1
            className="mb-6 leading-none"
            style={{
              fontFamily: "'Climate Crisis', cursive",
              fontSize: "clamp(4rem, 12vw, 9rem)",
              background: "linear-gradient(135deg, #ffffff 0%, #06b6d4 35%, #6366f1 70%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 80px rgba(6,182,212,0.25)",
            }}
          >
            Deeploma
            <br />
            Verify Trust
          </h1>

          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
            The world's most secure platform for verifying academic credentials.
            Powered by cryptographic signatures — trusted by universities,
            employers, and individuals worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/verification"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40"
            >
              Verify a Degree
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/registration"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-medium transition-all"
            >
              Register Your Institute
            </Link>
          </div>
        </div>


      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/5 via-indigo-500/5 to-cyan-500/5 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-4xl text-cyan-300 mb-2"
                style={{ fontFamily: "'Climate Crisis', cursive" }}
              >
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works — Slider */}
      <HowItWorksSlider />

      {/* Features */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm uppercase tracking-widest font-medium">
              Platform Features
            </span>
            <h2 className="text-white mt-3 mb-4 text-3xl md:text-4xl">
              Built for security, built for scale
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Deep Signature is engineered with the most advanced credential
              verification technology available today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-white/15 hover:bg-white/5 transition-all group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/8 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image showcase */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-teal-400 text-sm uppercase tracking-widest font-medium">
              For Graduates & Employers
            </span>
            <h2 className="text-white mt-3 mb-4 text-3xl md:text-4xl">
              End credential fraud — forever
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Fake degrees cost businesses billions every year. Deep Signature
              creates an immutable link between a graduate's identity and their
              academic record — verified by the awarding institution itself.
            </p>
            <ul className="space-y-3">
              {[
                "Verified by the issuing university",
                "Personal identity cross-matched",
                "Degree-level and major confirmed",
                "Legally admissible audit trail",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/verification"
              className="inline-flex items-center gap-2 mt-8 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Start verifying now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-3xl" />
            <img
              src={degreeImage}
              alt="Degree verification"
              className="relative rounded-3xl w-full object-cover h-80 border border-white/10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-teal-500/20 rounded-3xl blur-3xl" />
            <img
              src={universityImage}
              alt="University campus"
              className="relative rounded-3xl w-full object-cover h-80 border border-white/10"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-indigo-400 text-sm uppercase tracking-widest font-medium">
              For Institutions
            </span>
            <h2 className="text-white mt-3 mb-4 text-3xl md:text-4xl">
              Protect your institution's reputation
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Universities and colleges register their graduates' records with
              Deep Signature, adding a layer of authority and authenticity to
              every degree they issue. Our secure portal makes the process
              simple, fast, and compliant with data protection regulations.
            </p>
            <Link
              to="/registration"
              className="inline-flex items-center gap-2 mt-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              Register your institution <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-teal-500/10 rounded-3xl blur-3xl" />
          <div className="relative bg-white/3 border border-white/10 rounded-3xl p-12 md:p-16">
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: "'Climate Crisis', cursive",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
              }}
            >
              Ready to verify?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8 text-lg">
              Join thousands of employers and individuals who trust Deep
              Signature for fast, reliable academic credential verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/verification"
                className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-cyan-500/25"
              >
                Verify a Degree <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-medium transition-all"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <span
              className="text-white"
              style={{ fontFamily: "'Climate Crisis', cursive", fontSize: "1rem" }}
            >
              Deep Signature
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Deep Signature. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
