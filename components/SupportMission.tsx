export default function SupportMission() {
  return (
    <section id="support" className="py-24 bg-slate-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Support Our Mission
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Help Us Reach More Students
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto leading-relaxed mb-12">
          Your contribution directly funds game kit production, educator training, and outreach
          programs that bring Tumor Tactics to underserved communities and schools with limited
          resources. Every dollar makes a difference.
        </p>

        <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-sm overflow-hidden">
          <div className="p-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              {[
                { label: "One-Time Gift", desc: "Make a single contribution to fund game kits and classroom materials." },
                { label: "Monthly Support", desc: "Become a recurring donor and help sustain our programs long-term." },
                { label: "Sponsor a School", desc: "Fund a complete classroom kit for a school in an underserved community." },
              ].map((opt) => (
                <a
                  key={opt.label}
                  href="#"
                  className="group block bg-slate-900 hover:bg-slate-700 border border-slate-700 hover:border-blue-600 rounded-xl p-5 text-left transition-all duration-200"
                >
                  <p className="text-sm font-semibold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                    {opt.label}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">{opt.desc}</p>
                </a>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm"
            >
              Donate Now
            </a>
            <p className="text-xs text-slate-500 mt-4">
              Secure donation options coming soon. Questions?{" "}
              <a href="mailto:tumortactics@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors underline underline-offset-2">
                Email us directly.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
