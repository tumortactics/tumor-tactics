import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Team | Tumor Tactics",
  description:
    "Meet the student-led team behind Tumor Tactics — working to make cancer education more accessible and impactful.",
};

interface LeaderMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  featured?: boolean;
  open?: boolean;
}

const leadership: LeaderMember[] = [
  {
    name: "Daniel Zhang",
    role: "Chief Executive Officer",
    bio: "",
  },
  {
    name: "Zachary Tou",
    role: "Chief Operating Officer",
    bio: "",
  },
  {
    name: "Ayan Pendharkar",
    role: "Chief Technology Officer",
    bio: "",
  },
];

function Avatar({
  name,
  src,
  open,
}: {
  name: string;
  src?: string;
  open?: boolean;
}) {
  const size = 124;

  if (src) {
    return (
      <div
        className="relative rounded-full overflow-hidden mx-auto"
        style={{
          width: size,
          height: size,
          border: "2px solid #b4a4f0",
          flexShrink: 0,
        }}
      >
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover object-top"
          sizes={`${size}px`}
        />
      </div>
    );
  }

  return (
    <div
      className="rounded-full overflow-hidden mx-auto flex items-end justify-center"
      style={{
        width: size,
        height: size,
        background: open ? "#ede9fe" : "#ede9fe",
        border: open ? "2px dashed #b4a4f0" : "2px solid #b4a4f0",
        flexShrink: 0,
      }}
      aria-label={`Photo placeholder for ${name}`}
    >
      <svg
        viewBox="0 0 88 88"
        width={107}
        height={107}
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="44"
          cy="26"
          r="17"
          fill={open ? "#c4b5fd66" : "#c4b5fd"}
        />
        <path
          d="M2 88c0-23.2 18.8-42 42-42s42 18.8 42 42"
          fill={open ? "#c4b5fd66" : "#c4b5fd"}
        />
      </svg>
    </div>
  );
}

function LeaderCard({ member }: { member: LeaderMember }) {
  return (
    <div
      className="rounded-lg p-7 pt-26 pb-40 flex flex-col items-center text-center transition-[outline-color,transform,box-shadow] duration-200 outline outline-2 outline-transparent hover:outline-[#1e1b2e] hover:-translate-y-1.5 hover:shadow-lg"
      style={{
        border: member.featured
          ? "2px solid #1e1b2e"
          : member.open
          ? "1px dashed #b4a4f0"
          : "1px solid #b4a4f0",
        background: member.open ? "#fafafa" : "white",
      }}
    >
      {/* Avatar */}
      <Avatar name={member.name} src={member.image} open={member.open} />

      {/* Identity */}
      <div className="mt-5 mb-4 w-full">
        {member.open ? (
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded mb-2.5"
            style={{ background: "#ede9fe", color: "#3d2f6b" }}
          >
            Position Open
          </span>
        ) : null}
        <h3
          className="font-black text-[#1e1b2e] leading-tight"
          style={{ fontSize: "1.125rem", letterSpacing: "-0.02em" }}
        >
          {member.open ? "Coming Soon" : member.name}
        </h3>
        <p
          className="text-[11px] font-bold uppercase tracking-widest mt-2"
          style={{ color: "#7c3aed" }}
        >
          {member.role}
        </p>
        {member.featured && (
          <div
            className="w-8 h-0.5 mx-auto mt-3 rounded-full"
            style={{ background: "#7c3aed" }}
          />
        )}
      </div>

      {/* Bio */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: member.open ? "#9585b8" : "#3d2f6b" }}
      >
        {member.bio}
      </p>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-4rem)]" style={{ background: "white" }}>

        {/* Header */}
        <section
          className="py-16 sm:py-20 text-center"
          style={{ background: "#1e1b2e" }}
        >
          <div className="max-w-2xl mx-auto px-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#c4b5fd] mb-5">
              The Organization
            </p>
            <h1
              className="text-5xl sm:text-6xl font-black text-white leading-none mb-5"
              style={{ letterSpacing: "-0.03em" }}
            >
              Meet Our Team
            </h1>
            <p className="text-sm text-white/65 leading-relaxed max-w-sm mx-auto">
              A student-led initiative combining cancer research, education, and
              community outreach — built to make biology accessible in every classroom.
            </p>
          </div>
        </section>

        {/* Leadership section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">

            {/* Section label */}
            <div className="mb-10">
              <h2
                className="text-[11px] font-bold uppercase tracking-widest mb-3"
                style={{ color: "#3d2f6b" }}
              >
                Leadership
              </h2>
              <div className="h-px" style={{ background: "#b4a4f0" }} />
            </div>

            {/* 3-column row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {leadership.map((member) => (
                <LeaderCard key={member.name} member={member} />
              ))}
            </div>

          </div>
        </section>

        {/* Mission strip */}
        <section
          className="py-12 border-t"
          style={{ background: "#ede9fe", borderColor: "#b4a4f0" }}
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-widest mb-2"
                style={{ color: "#7c3aed" }}
              >
                Join Us
              </p>
              <p
                className="font-black text-xl leading-snug"
                style={{ color: "#1e1b2e", letterSpacing: "-0.02em" }}
              >
                Interested in being part of the mission?
              </p>
            </div>
            <a
              href="mailto:tumortactics@gmail.com?subject=Team%20Inquiry"
              className="inline-flex items-center justify-center px-7 py-3 font-bold text-sm text-white rounded-xl transition-opacity hover:opacity-90 shrink-0"
              style={{ background: "#7c3aed" }}
            >
              Get in Touch
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
