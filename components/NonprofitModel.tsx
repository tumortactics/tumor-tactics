export default function NonprofitModel() {
  return (
    <section className="py-20 bg-[#1e1b2e] border-t border-[#2d1b69]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#c4b5fd] mb-4">
          Nonprofit Model
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
          style={{ letterSpacing: "-0.03em" }}
        >
          Where your money goes
        </h2>
        <p className="text-white/70 text-sm mb-10 leading-relaxed">
          Every kit purchased directly funds the mission.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div className="rounded-2xl border border-[#4a2fa0] bg-[#2a1a5e] p-7">
            <div
              className="text-5xl font-black text-[#c4b5fd] mb-3 leading-none"
              style={{ letterSpacing: "-0.04em" }}
            >
              10%
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              of all proceeds go to the American Cancer Society to support pediatric cancer research.
            </p>
          </div>
          <div className="rounded-2xl border border-[#4a2fa0] bg-[#2a1a5e] p-7">
            <div
              className="text-5xl font-black text-[#c4b5fd] mb-3 leading-none"
              style={{ letterSpacing: "-0.04em" }}
            >
              90%
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              goes toward producing free kits for Title I and underserved schools nationwide.
            </p>
          </div>
        </div>

        <p className="text-white/50 text-xs text-center">
          Tumor Tactics is a 501(c)(3) nonprofit. All proceeds serve the mission.
        </p>
      </div>
    </section>
  );
}
