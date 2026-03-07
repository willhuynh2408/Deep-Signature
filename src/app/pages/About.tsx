import { ShieldCheck, Globe, Users, Award, Mail, Linkedin, Twitter } from "lucide-react";

const blockchainImage =
  "https://images.unsplash.com/photo-1640030104754-0a33c686c533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdHJ1c3QlMjBpZGVudGl0eSUyMHZlcmlmaWNhdGlvbnxlbnwxfHx8fDE3NzI3NjQ0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080";

const team = [
  {
    name: "Professor A",
    role: "CEO & Co-Founder",
    bio: "Former cryptography researcher at MIT. 15 years in academic credential systems.",
    initial: "A",
    color: "from-cyan-500 to-indigo-500",
  },
  {
    name: "Professor B",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer. Specialises in distributed systems and zero-knowledge proofs.",
    initial: "B",
    color: "from-teal-500 to-cyan-500",
  },
  {
    name: "Professor C",
    role: "Head of Partnerships",
    bio: "Former university registrar. Built relationships with 200+ institutions globally.",
    initial: "C",
    color: "from-indigo-500 to-violet-500",
  },
  {
    name: "Professor D",
    role: "Lead Engineer",
    bio: "Full-stack architect with deep expertise in secure API design and cryptographic protocols.",
    initial: "D",
    color: "from-violet-500 to-pink-500",
  },
];

const values = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    title: "Integrity Above All",
    desc: "We never compromise on the accuracy of credential data. Every record is treated with the highest level of cryptographic rigour.",
  },
  {
    icon: <Globe className="w-6 h-6 text-teal-400" />,
    title: "Global Accessibility",
    desc: "Academic verification should not be a privilege. We are committed to making our platform accessible to institutions and individuals worldwide.",
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-400" />,
    title: "Privacy by Design",
    desc: "We collect only what is necessary. Verifiers see only a pass or fail — never raw personal data.",
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-400" />,
    title: "Academic Trust",
    desc: "We are an academic institution's ally, not their replacement. Deeploma amplifies the value of every degree issued.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 text-sm">Our Story</span>
          </div>
          <h1
            className="text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}
          >
            About Deeploma
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We were founded on a simple belief: that every legitimate academic
            credential deserves to be instantly, irrefutably verifiable — and
            every fraudulent one should be impossible to pass off as real.
          </p>
        </div>

        {/* Mission image */}
        <div className="relative mb-20 rounded-3xl overflow-hidden">
          <img
            src={blockchainImage}
            alt="Deeploma mission"
            className="w-full h-64 md:h-80 object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d1f] via-transparent to-[#060d1f]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p
                className="text-white text-2xl md:text-3xl"
                style={{ fontFamily: "'Climate Crisis', cursive" }}
              >
                Signing trust into every degree
              </p>
            </div>
          </div>
        </div>

        {/* Origin story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-white text-2xl mb-4">How we started</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Deeploma was founded in 2021 after our co-founders
              discovered that over 40% of job applicants in certain industries
              had misrepresented their academic qualifications — not always
              fraudulently, but often due to a lack of a reliable verification
              mechanism.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We built Deeploma to close that gap. By partnering directly
              with universities and leveraging cryptographic signatures, we
              created a verification ecosystem that is as fast as it is
              trustworthy.
            </p>
          </div>
          <div>
            <h2 className="text-white text-2xl mb-4">Where we are today</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Today, Deeploma operates in over 150 countries, with more
              than 500 partner universities and 2 million verified degree records.
              We serve HR teams, government agencies, academic institutions, and
              individual graduates.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our cryptographic signature engine runs billions of verifications
              annually, with a 98.9% accuracy rate and zero reported false
              positives from registered institutions.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-white text-2xl md:text-3xl">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-all"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="text-white font-medium mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-white text-2xl md:text-3xl">Meet the Team</h2>
            <p className="text-gray-400 mt-2">
              The people building the future of academic trust.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-all text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4 text-white font-bold`}>
                  {member.initial}
                </div>
                <h3 className="text-white font-medium text-sm">{member.name}</h3>
                <p className="text-cyan-400 text-xs mt-1 mb-3">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white/3 border border-white/8 rounded-3xl p-10 text-center">
          <h2 className="text-white text-2xl mb-3">Get in Touch</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Whether you're a university looking to register, an employer
            wanting to verify, or a journalist seeking comment — we'd love to
            hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@deepsignature.io"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 px-6 py-3 rounded-xl text-sm font-medium transition-all"
            >
              <Mail className="w-4 h-4" />
              hello@deepsignature.io
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#0077b5]/20 hover:bg-[#0077b5]/30 border border-[#0077b5]/40 text-[#0077b5] hover:text-blue-300 px-6 py-3 rounded-xl text-sm font-medium transition-all"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 px-6 py-3 rounded-xl text-sm font-medium transition-all"
            >
              <Twitter className="w-4 h-4" />
              @DeepSignature
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
