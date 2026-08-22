import Image from "next/image";

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
    image: "/assets/Daniel.jpg",
    bio: "",
  },
  {
    name: "Zachary Tou",
    role: "Chief Operating Officer",
    image: "/assets/zach.jpg",
    bio: "",
  },
  {
    name: "Ayan Pendharkar",
    role: "Chief Technology Officer",
    image: "/assets/ayan (2).jpg",
    bio: "",
  },
  {
    name: "Felix Yang",
    role: "Chief Marketing Officer",
    image: "/assets/felix_yang.png",
    bio: "",
  },
  {
    name: "Carina Wu",
    role: "Chief Design Officer",
    image: "/assets/carina.png",
    bio: "",
  },
  {
    name: "Justin Sun",
    role: "Director of Education Initiatives",
    image: "/assets/justin_sun.jpg",
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
  const size = 200;

  if (src) {
    return (
      <div
        className="relative mx-auto shrink-0 overflow-hidden rounded-full border-2 border-[#b4a4f0]"
        style={{ width: size, height: size }}
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
      className={`mx-auto flex shrink-0 items-end justify-center overflow-hidden rounded-full border-2 border-[#b4a4f0] bg-[#ede9fe] ${
        open ? "border-dashed" : ""
      }`}
      style={{ width: size, height: size }}
      aria-label={`Photo placeholder for ${name}`}
    >
      <svg viewBox="0 0 88 88" width={173} height={173} fill="none" aria-hidden="true">
        <circle cx="44" cy="26" r="17" fill={open ? "#c4b5fd66" : "#c4b5fd"} />
        <path d="M2 88c0-23.2 18.8-42 42-42s42 18.8 42 42" fill={open ? "#c4b5fd66" : "#c4b5fd"} />
      </svg>
    </div>
  );
}

function LeaderCard({ member }: { member: LeaderMember }) {
  return (
    <div
      className="flex h-full flex-col items-center rounded-xl p-7 text-center outline outline-2 outline-transparent transition-[outline-color,transform,box-shadow] duration-200 hover:-translate-y-1.5 hover:outline-[#1e1b2e] hover:shadow-lg"
      style={{
        border: member.featured
          ? "2px solid #1e1b2e"
          : member.open
            ? "1px dashed #b4a4f0"
            : "1px solid #b4a4f0",
        background: member.open ? "#fafafa" : "white",
      }}
    >
      <Avatar name={member.name} src={member.image} open={member.open} />

      <div className="mt-5 mb-4 w-full">
        {member.open ? (
          <span className="mb-2.5 inline-block rounded bg-[#ede9fe] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#3d2f6b]">
            Position Open
          </span>
        ) : null}
        <h3 className="text-lg font-black leading-tight tracking-[-0.02em] text-[#1e1b2e]">
          {member.open ? "Coming Soon" : member.name}
        </h3>
        <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-[#7c3aed]">
          {member.role}
        </p>
        {member.featured && <div className="mx-auto mt-3 h-0.5 w-8 rounded-full bg-[#7c3aed]" />}
      </div>

      {member.bio ? (
        <p className={`text-sm leading-relaxed ${member.open ? "text-[#9585b8]" : "text-[#3d2f6b]"}`}>
          {member.bio}
        </p>
      ) : null}
    </div>
  );
}

export default function TeamSection() {
  return (
    <section id="our-team" className="scroll-mt-16" aria-labelledby="our-team-heading">
      <div className="bg-[#1e1b2e] py-16 text-center sm:py-20">
        <div className="mx-auto max-w-2xl px-6">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-widest text-[#c4b5fd]">
            The People Behind the Mission
          </p>
          <h2
            id="our-team-heading"
            className="mb-5 text-5xl font-black leading-none text-white sm:text-6xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-sm text-sm leading-relaxed text-white/65">
            Students lead Tumor Tactics, drawing on cancer research, classroom education,
            and community events to make the biology easier to understand.
          </p>
        </div>
      </div>

      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[#3d2f6b]">
              Leadership
            </h3>
            <div className="h-px bg-[#b4a4f0]" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((member) => (
              <LeaderCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#b4a4f0] bg-[#ede9fe] py-12">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#7c3aed]">Join Us</p>
            <p className="text-xl font-black leading-snug tracking-[-0.02em] text-[#1e1b2e]">
              Interested in being part of the mission?
            </p>
          </div>
          <a
            href="mailto:playtumortactics@gmail.com?subject=Team%20Inquiry"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#7c3aed] px-7 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
