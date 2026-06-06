const options = [
  {
    title: "Partner With Us",
    description:
      "Organizations and institutions can collaborate with Tumor Tactics to bring cancer education to more classrooms. We welcome partnerships with schools, hospitals, nonprofits, and research institutions.",
    cta: "Become a Partner",
    href: "mailto:playtumortactics@gmail.com?subject=Partnership%20Inquiry",
    accent: "#7c3aed",
    accentText: "#fff",
  },
  {
    title: "Bring the Game to Your School",
    description:
      "Educators can request a Tumor Tactics classroom kit. We provide game materials, educator guides, and lesson plans aligned with science standards for ages 8+.",
    cta: "Request a Kit",
    href: "mailto:playtumortactics@gmail.com?subject=Game%20Kit%20Request",
    accent: "#1e1b2e",
    accentText: "#fff",
  },
  {
    title: "Donate to Support Expansion",
    description:
      "Your contribution directly funds game kit production, educator training, and outreach programs that bring Tumor Tactics to underserved communities.",
    cta: null as string | null,
    href: null as string | null,
    donationNote: true,
    accent: "#a855f7",
    accentText: "#fff",
  },
];

export default function GetInvolved() {
  return (
    <section id="get-involved" className="pt-24 pb-12 bg-white border-t border-[#b4a4f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-4 text-[#7c3aed]">
            Get Involved
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className="text-4xl sm:text-5xl font-black text-[#1e1b2e] leading-none"
              style={{ letterSpacing: "-0.03em" }}
            >
              Join the<br />Movement
            </h2>
            <p className="text-[#3d2f6b] text-sm max-w-xs leading-relaxed">
              A few ways to support our mission to make cancer education accessible and impactful.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {options.map((opt) => (
            <div
              key={opt.title}
              className="rounded-2xl border border-[#b4a4f0] p-7 flex flex-col hover:border-[#c4b5fd] hover:shadow-md hover:shadow-purple-100 transition-[border-color,box-shadow] duration-200 group bg-[#ede9fe]"
            >
              <div
                className="w-8 h-1 rounded-full mb-6 transition-[width] duration-300 group-hover:w-12"
                style={{ background: opt.accent }}
              />
              <h3 className="text-base font-bold text-[#1e1b2e] mb-3">{opt.title}</h3>
              <p className="text-sm text-[#3d2f6b] leading-relaxed flex-1 mb-7">{opt.description}</p>
              {opt.donationNote ? (
                <p className="text-sm italic text-[#6b5f8e]">
                  Donation page coming soon. To donate now, email us at{" "}
                  <a
                    href="mailto:playtumortactics@gmail.com"
                    className="underline hover:text-[#7c3aed] transition-colors"
                  >
                    playtumortactics@gmail.com
                  </a>
                  .
                </p>
              ) : (
                <a
                  href={opt.href!}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-lg transition-[opacity,transform] hover:opacity-90 active:translate-y-px"
                  style={{ background: opt.accent, color: opt.accentText }}
                >
                  {opt.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
