export default function SupportMission() {
  return (
    <section id="support" className="py-24 bg-[#ede9fe] border-t border-[#b4a4f0]">
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
          <p className="text-[#3d2f6b] max-w-xl mx-auto text-sm leading-relaxed">
            Your contribution directly funds game kit production, educator training, and outreach
            programs. Every dollar makes a difference.
          </p>
        </div>

        <div className="rounded-2xl border border-[#b4a4f0] overflow-hidden bg-white shadow-sm shadow-purple-100">
          <div className="p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { label: "One-Time Gift", desc: "Make a single contribution to fund game kits and classroom materials." },
                { label: "Monthly Support", desc: "Become a recurring donor and help sustain our programs long-term." },
                { label: "Sponsor a School", desc: "Fund a complete classroom kit for a school in an underserved community." },
              ].map((opt) => (
                <a
                  key={opt.label}
                  href="https://www.zeffy.com/en-US/donation-form/support-tumor-tactics-in-every-classroom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl p-5 text-left transition-[border-color,box-shadow] duration-200 border border-[#b4a4f0] hover:border-[#7c3aed]/50 hover:shadow-sm bg-[#ede9fe]"
                >
                  <p className="text-sm font-bold text-[#1e1b2e] mb-2 group-hover:text-[#7c3aed] transition-colors">
                    {opt.label}
                  </p>
                  <p className="text-xs text-[#3d2f6b] leading-relaxed">{opt.desc}</p>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://www.zeffy.com/en-US/donation-form/support-tumor-tactics-in-every-classroom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 font-black rounded-xl text-sm text-white transition-[opacity,transform] hover:opacity-90 active:translate-y-px"
                style={{ background: "#7c3aed" }}
              >
                Donate Now
              </a>
              <p className="text-xs text-[#3d2f6b] mt-4">
                Questions?{" "}
                <a
                  href="mailto:tumortactics@gmail.com"
                  className="text-[#3d2f6b] hover:text-[#7c3aed] transition-colors underline underline-offset-2"
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
