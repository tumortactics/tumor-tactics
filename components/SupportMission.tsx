export default function SupportMission() {
  return (
    <section id="support" className="py-24 bg-[#f8f5ff] border-t border-[#ddd6fe]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-4 text-[#7c3aed]">
            Support Our Mission
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#1e1b2e] mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Help Us Reach<br />More Students
          </h2>
          <p className="text-[#6b5f8e] max-w-xl mx-auto text-sm leading-relaxed">
            Your contribution directly funds game kit production, educator training, and outreach
            programs. Every dollar makes a difference.
          </p>
        </div>

        <div className="rounded-2xl border border-[#ddd6fe] overflow-hidden bg-white shadow-sm shadow-purple-100">
          <div className="p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { label: "One-Time Gift", desc: "Make a single contribution to fund game kits and classroom materials." },
                { label: "Monthly Support", desc: "Become a recurring donor and help sustain our programs long-term." },
                { label: "Sponsor a School", desc: "Fund a complete classroom kit for a school in an underserved community." },
              ].map((opt) => (
                <a
                  key={opt.label}
                  href="#"
                  className="group block rounded-xl p-5 text-left transition-all duration-200 border border-[#ddd6fe] hover:border-[#7c3aed]/50 hover:shadow-sm bg-[#f8f5ff]"
                >
                  <p className="text-sm font-bold text-[#1e1b2e] mb-2 group-hover:text-[#7c3aed] transition-colors">
                    {opt.label}
                  </p>
                  <p className="text-xs text-[#6b5f8e] leading-relaxed">{opt.desc}</p>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-10 py-4 font-black rounded-xl text-sm text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: "#7c3aed", boxShadow: "0 4px 20px rgba(124,58,237,0.35)" }}
              >
                Donate Now
              </a>
              <p className="text-xs text-[#a89bc9] mt-4">
                Questions?{" "}
                <a
                  href="mailto:tumortactics@gmail.com"
                  className="text-[#6b5f8e] hover:text-[#7c3aed] transition-colors underline underline-offset-2"
                >
                  Email us directly.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
