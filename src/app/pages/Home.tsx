import { useEffect, useRef, useState } from "react";
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
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
//import heroBg from "figma:asset/a6fc0b233d4c9f7e18e5e9de0e0473a1be668c7c.png";

const heroBg =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc3Mjc2NDQ3NXww&ixlib=rb-4.1.0&q=80&w=1080";
const degreeImage =
  "https://images.unsplash.com/photo-1589330694653-ded6df03f754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGRlZ3JlZSUyMGNlcnRpZmljYXRlfGVufDF8fHx8MTc3Mjc2NDQ3NXww&ixlib=rb-4.1.0&q=80&w=1080";

const universityImage =
  "https://images.unsplash.com/photo-1767969456622-801489bdc169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYWNhZGVtaWMlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI3NjQ0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080";

const revealUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const heroHighlightAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
};

const heroHighlightTransition = {
  duration: 7,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

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
      "Each degree record is signed with Deeploma's proprietary cryptographic algorithm, creating a unique, tamper-proof digital signature. This signature is immutably linked to the graduate's personal identity.",
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
  {
    value: "500+",
    label: "Partner Universities",
    detail: "Trusted academic institutions actively issuing verified credentials.",
    accent:
      "bg-[radial-gradient(circle_at_100%_100%,rgba(34,211,238,0.34),rgba(103,232,249,0.14)_28%,rgba(2,6,23,0)_72%)]",
    glow: "shadow-[0_30px_80px_rgba(34,211,238,0.14)]",
    drift: { x: [0, -10, 0], y: [0, -14, 0] },
    delay: 0.1,
  },
  {
    value: "2M+",
    label: "Verified Degrees",
    detail: "Signed records verified instantly by employers, institutions, and graduates.",
    accent:
      "bg-[radial-gradient(circle_at_0%_100%,rgba(52,211,153,0.34),rgba(110,231,183,0.14)_28%,rgba(2,6,23,0)_72%)]",
    glow: "shadow-[0_30px_80px_rgba(52,211,153,0.14)]",
    drift: { x: [0, 10, 0], y: [0, -14, 0] },
    delay: 0.35,
  },
  {
    value: "98.9%",
    label: "Accuracy Rate",
    detail: "High-confidence matching across institutional records and verification requests.",
    accent:
      "bg-[radial-gradient(circle_at_100%_0%,rgba(251,191,36,0.34),rgba(253,224,71,0.14)_28%,rgba(2,6,23,0)_72%)]",
    glow: "shadow-[0_30px_80px_rgba(251,191,36,0.14)]",
    drift: { x: [0, -10, 0], y: [0, 14, 0] },
    delay: 0.2,
  },
  {
    value: "150+",
    label: "Countries Supported",
    detail: "A global verification network designed for cross-border hiring and admissions.",
    accent:
      "bg-[radial-gradient(circle_at_0%_0%,rgba(96,165,250,0.34),rgba(125,211,252,0.14)_28%,rgba(2,6,23,0)_72%)]",
    glow: "shadow-[0_30px_80px_rgba(96,165,250,0.14)]",
    drift: { x: [0, 10, 0], y: [0, 14, 0] },
    delay: 0.45,
  },
];

function GlobePanel() {
  return (
    <motion.div
      className="absolute inset-[30%] mx-auto my-[10%] flex h-[300px] w-[300px] items-center justify-center md:h-[370px] md:w-[370px] lg:h-[410px] lg:w-[410px]"
      animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.16),transparent_62%)] blur-3xl" />
      <div className="absolute inset-[6%] rounded-full border border-white/8" />
      <motion.div
        className="absolute inset-[2%] rounded-full border border-cyan-300/14"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-[14%] rounded-full border border-white/8"
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 h-[78%] w-[78%] overflow-hidden rounded-full border border-white/15 bg-[#07111f] shadow-[0_28px_120px_rgba(8,145,178,0.28)]">
        <motion.img
          src="/textures/earth.jpg"
          alt="Earth visualization"
          className="absolute inset-0 h-full w-full scale-[1.16] object-cover"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.35),transparent_24%),radial-gradient(circle_at_50%_50%,transparent_45%,rgba(3,7,18,0.12)_72%,rgba(2,6,23,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.04),transparent_32%,rgba(14,165,233,0.06)_70%,rgba(2,6,23,0.28))]" />
      </div>
    </motion.div>
  );
}

function FloatingStatCard({
  stat,
  className = "",
}: {
  stat: (typeof stats)[number];
  className?: string;
}) {
  return (
    <motion.article
      className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/65 p-5 lg:p-6 backdrop-blur-xl ${stat.glow} ${className}`}
      animate={stat.drift}
      transition={{
        duration: 7.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: stat.delay,
      }}
    >
      <div className={`absolute inset-0 ${stat.accent}`} />
      <div className="absolute inset-[1px] rounded-[27px] border border-white/6" />
      <div className="relative z-10">
        <p
          className="text-[2.2rem] leading-none font-semibold tracking-[-0.05em] text-white md:text-[2.45rem] lg:text-[2.9rem]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {stat.value}
        </p>
        <p
          className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100/88 md:text-[0.72rem]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {stat.label}
        </p>
        <p
          className="mt-3 max-w-xs text-sm leading-5 text-slate-300 md:text-[0.82rem]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {stat.detail}
        </p>
      </div>
    </motion.article>
  );
}

function ScrollingStats() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#020611_0%,#061120_38%,#040c18_72%,#020611_100%)] px-6 py-20 md:py-20 lg:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(45,212,191,0.1),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(56,189,248,0.12),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(14,165,233,0.08),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_20%,transparent_80%,rgba(148,163,184,0.04))]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Global Footprint
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl lg:text-[2.8rem]">
            Verified reach, centered around a real-world network
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 md:text-[0.95rem]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Deeploma&apos;s verification infrastructure spans institutions, employers, and graduates worldwide.
            The section now keeps the Earth visual at the center and pushes each key metric into a clearer corner
            position.
          </p>
        </div>

        <div className="mt-14 md:hidden">
          <GlobePanel />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <FloatingStatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>

        <div className="mt-10 hidden min-h-[560px] grid-cols-[minmax(150px,1fr)_minmax(240px,370px)_minmax(150px,1fr)] grid-rows-[1fr_auto_1fr] items-center gap-x-0 gap-y-2 lg:mt-12 lg:min-h-[620px] lg:grid-cols-[minmax(170px,1fr)_minmax(270px,410px)_minmax(170px,1fr)] lg:gap-x-2 lg:gap-y-4 md:grid">
          <div className="col-start-1 row-start-1 self-start justify-self-end">
            <FloatingStatCard stat={stats[0]} className="w-[200px] lg:w-[240px]" />
          </div>

          <div className="col-start-3 row-start-1 self-start justify-self-start">
            <FloatingStatCard stat={stats[1]} className="w-[200px] lg:w-[240px]" />
          </div>

          <div className="col-start-2 row-start-2 z-10 justify-self-center">
            <GlobePanel />
          </div>

          <div className="col-start-1 row-start-3 self-end justify-self-end">
            <FloatingStatCard stat={stats[2]} className="w-[200px] lg:w-[240px]" />
          </div>

          <div className="col-start-3 row-start-3 self-end justify-self-start">
            <FloatingStatCard stat={stats[3]} className="w-[200px] lg:w-[240px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrent((value) => (value + 1) % steps.length);
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + steps.length) % steps.length);
  const next = () => setCurrent((c) => (c + 1) % steps.length);

  const step = steps[current];

  return (
    <section className="py-24 px-6 w-full">
      <motion.div
        className="text-center mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={staggerChildren}
      >
        <motion.span className="text-cyan-400 text-sm uppercase tracking-widest font-medium" variants={revealUp}>
          How It Works
        </motion.span>
        <motion.h2 className="text-white mt-3 mb-4 text-3xl md:text-4xl" variants={revealUp}>
          Four steps to trust
        </motion.h2>
        <motion.p className="text-gray-400 max-w-xl mx-auto" variants={revealUp}>
          Our seamless process bridges institutions and the public through cryptographic verification technology.
        </motion.p>
      </motion.div>

      {/* Whole slider block */}
      <motion.div
        className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(5,10,25,0.45)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background image */}
        <motion.div
          key={step.bgImage}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${step.bgImage})` }}
          initial={{ scale: 1.08, opacity: 0.55 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-80`} />
        <motion.div
          className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-cyan-400/10 blur-3xl"
          animate={{ x: [0, 24, 0], y: [0, 18, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content area */}
        <motion.div
          key={step.step}
          className="relative z-10 p-10 md:p-14 min-h-[420px] flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Step number watermark */}
          <div
            className="absolute top-6 right-8 text-8xl font-black opacity-10 select-none text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {step.step}
          </div>

          {/* Icon */}
          <motion.div
            className="shrink-0 w-28 h-28 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            {step.icon}
          </motion.div>

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
        </motion.div>

        {/* Navigation INSIDE the same rounded block */}
        <div className="relative z-10 flex items-center justify-between px-10 md:px-14 pb-8">
          {/* Dots */}
          <div className="flex gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current
                  ? "bg-cyan-400 w-8 shadow-[0_0_24px_rgba(34,211,238,0.45)]"
                  : "bg-white/20 w-2 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 hover:bg-cyan-500/30 hover:text-cyan-100 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 1.12]),
    { stiffness: 120, damping: 22, mass: 0.45 }
  );
  const heroGlowY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 120]),
    { stiffness: 100, damping: 20, mass: 0.45 }
  );
  const heroContentY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 80]),
    { stiffness: 100, damping: 18, mass: 0.45 }
  );
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.35]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image — provided Figma asset */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover"
            style={{ scale: heroScale }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Dark overlay to keep text readable */}
          <div className="absolute inset-0 bg-[#060d1f]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060d1f]/40 via-transparent to-[#060d1f]" />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(34,211,238,0.16),transparent_38%)]"
            style={{ y: heroGlowY }}
          />
        </div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl z-0 pointer-events-none"
          animate={{ x: [0, 35, 0], y: [0, -30, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[8%] w-80 h-80 bg-indigo-500/12 rounded-full blur-3xl z-0 pointer-events-none"
          animate={{ x: [0, -28, 0], y: [0, 24, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 text-center max-w-5xl mx-auto px-6"
          style={{ y: heroContentY, opacity: heroContentOpacity }}
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          {/* Badge */}
          <motion.div
            variants={revealUp}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-8 shadow-[0_0_40px_rgba(34,211,238,0.12)]"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">Trusted Academic Verification Platform</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={revealUp}
            className="mb-6 leading-none font-bold uppercase"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(3rem, 10vw, 8rem)",
              background: "linear-gradient(135deg, #ffffff 0%, #06b6d4 35%, #6366f1 70%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 60px rgba(6,182,212,0.25)",
              filter: "drop-shadow(0 0 18px rgba(34,211,238,0.18))",
              letterSpacing: "-0.005em",
            }}
          >
            Deeploma
            <br />
          </motion.h1>

          <motion.p
            variants={revealUp}
            className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg"
          >
            <motion.span
              className="bg-[linear-gradient(90deg,#ffffff_0%,#d9f3fb_24%,#8ee7f8_50%,#c7d2fe_76%,#ffffff_100%)] bg-[length:220%_220%] bg-clip-text font-semibold text-transparent [text-shadow:0_0_10px_rgba(255,255,255,0.1)]"
              animate={heroHighlightAnimation}
              transition={heroHighlightTransition}
            >
              Secure
            </motion.span>
            ,{" "}
            <motion.span
              className="bg-[linear-gradient(90deg,#eaf7fb_0%,#9ae6f4_24%,#57d5eb_52%,#a5b4fc_78%,#eaf7fb_100%)] bg-[length:220%_220%] bg-clip-text font-semibold text-transparent [text-shadow:0_0_12px_rgba(34,211,238,0.12)]"
              animate={heroHighlightAnimation}
              transition={{ ...heroHighlightTransition, delay: 0.35 }}
            >
              instant verification
            </motion.span>{" "}
            for academic credentials, trusted by universities and employers{" "}
            <motion.span
              className="bg-[linear-gradient(90deg,#dbe4ff_0%,#bac6ff_24%,#8fe3f4_52%,#ffffff_78%,#dbe4ff_100%)] bg-[length:220%_220%] bg-clip-text font-semibold text-transparent [text-shadow:0_0_12px_rgba(129,140,248,0.12)]"
              animate={heroHighlightAnimation}
              transition={{ ...heroHighlightTransition, delay: 0.7 }}
            >
              worldwide
            </motion.span>
            .
          </motion.p>

          <motion.div variants={revealUp} className="flex w-full flex-col justify-center gap-4 sm:flex-row">
            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/verification"
                className="group inline-flex w-full max-w-full items-center justify-between gap-4 rounded-2xl border border-cyan-300/30 bg-cyan-500/85 px-6 py-4 text-left text-white transition-all duration-300 sm:min-w-[280px] sm:w-auto hover:border-cyan-200/60 hover:bg-[linear-gradient(135deg,#38bdf8_0%,#22d3ee_48%,#0891b2_100%)] hover:shadow-xl hover:shadow-cyan-400/20"
              >
                <span className="flex flex-col">
                  <span className="font-medium">Verify a Degree</span>
                  <span className="mt-1 text-sm text-cyan-50/80 transition-colors duration-300 group-hover:text-white">
                    I&apos;m an Employer / User.
                  </span>
                </span>
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/registration"
                className="group inline-flex w-full max-w-full items-center rounded-2xl border border-white/25 bg-white/8 px-6 py-4 text-left text-white backdrop-blur-sm transition-all duration-300 sm:min-w-[280px] sm:w-auto hover:border-cyan-200/35 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,rgba(125,211,252,0.14)_42%,rgba(15,23,42,0.58)_100%)] hover:shadow-xl hover:shadow-slate-900/25"
              >
                <span className="flex flex-col">
                  <span className="font-medium">Register Your Institute</span>
                  <span className="mt-1 text-sm text-slate-300 transition-colors duration-300 group-hover:text-cyan-50">
                    I&apos;m a University.
                  </span>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>


      </section>

      {/* Stats */}
      <ScrollingStats />

      {/* How It Works — Slider */}
      <HowItWorksSlider />

      {/* Features */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            <motion.span className="text-indigo-400 text-sm uppercase tracking-widest font-medium" variants={revealUp}>
              Platform Features
            </motion.span>
            <motion.h2 className="text-white mt-3 mb-4 text-3xl md:text-4xl" variants={revealUp}>
              Built for security, built for scale
            </motion.h2>
            <motion.p className="text-gray-400 max-w-xl mx-auto" variants={revealUp}>
              Deeploma is engineered with the most advanced credential
              verification technology available today.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerChildren}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={revealUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-cyan-400/20 hover:bg-white/6 transition-all group shadow-[0_18px_48px_rgba(5,10,25,0.18)]"
              >
                <motion.div
                  className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/8 transition-all"
                  whileHover={{ rotate: 8, scale: 1.08 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image showcase */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-teal-400 text-sm uppercase tracking-widest font-medium">
              For Graduates & Employers
            </span>
            <h2 className="text-white mt-3 mb-4 text-3xl md:text-4xl">
              End credential fraud — forever
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Fake degrees cost businesses billions every year. Deeploma
              creates an immutable link between a graduate's identity and their
              academic record — verified by the awarding institution itself.
            </p>
            <motion.ul
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerChildren}
            >
              {[
                "Verified by the issuing university",
                "Personal identity cross-matched",
                "Degree-level and major confirmed",
                "Legally admissible audit trail",
              ].map((item) => (
                <motion.li key={item} variants={revealUp} className="flex items-center gap-3 text-gray-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div whileHover={{ x: 6 }} className="inline-block">
              <Link
                to="/verification"
                className="inline-flex items-center gap-2 mt-8 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Start verifying now <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-3xl" />
            <motion.img
              src={degreeImage}
              alt="Degree verification"
              className="relative rounded-3xl w-full object-cover h-80 border border-white/10 shadow-[0_30px_80px_rgba(5,10,25,0.35)]"
              whileHover={{ scale: 1.03, rotate: 0.4 }}
              transition={{ duration: 0.35 }}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
          <motion.div
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-teal-500/20 rounded-3xl blur-3xl" />
            <motion.img
              src={universityImage}
              alt="University campus"
              className="relative rounded-3xl w-full object-cover h-80 border border-white/10 shadow-[0_30px_80px_rgba(5,10,25,0.35)]"
              whileHover={{ scale: 1.03, rotate: -0.4 }}
              transition={{ duration: 0.35 }}
            />
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-indigo-400 text-sm uppercase tracking-widest font-medium">
              For Institutions
            </span>
            <h2 className="text-white mt-3 mb-4 text-3xl md:text-4xl">
              Protect your institution's reputation
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Universities and colleges register their graduates' records with
              Deeploma, adding a layer of authority and authenticity to
              every degree they issue. Our secure portal makes the process
              simple, fast, and compliant with data protection regulations.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <motion.div whileHover={{ x: 6 }} className="inline-block">
                <Link
                  to="/registration"
                  className="inline-flex items-center gap-2 mt-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                >
                  Register your institution <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 6 }} className="inline-block">
                <Link
                  to="/bulk-upload"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Bulk upload files <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center relative"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-teal-500/10 rounded-3xl blur-3xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative bg-white/3 border border-white/10 rounded-3xl p-12 md:p-16 overflow-hidden">
            <motion.div
              className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
              animate={{ x: ["0%", "400%"] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "linear" }}
            />
            <h2
              className="text-white mb-4 relative"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
              }}
            >
              Ready to verify?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8 text-lg relative">
              Join thousands of employers and individuals who trust Deep
              Signature for fast, reliable academic credential verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/verification"
                  className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-cyan-500/25"
                >
                  Verify a Degree <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-medium transition-all"
                >
                  Sign In
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65 }}
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <span
              className="text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem" }}
            >
              Deeploma
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Deeploma. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}


