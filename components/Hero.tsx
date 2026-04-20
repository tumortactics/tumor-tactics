export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-24 pb-32">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(30,58,138,0.45) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 85% 85%, rgba(76,29,149,0.25) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-950/60 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 border border-blue-800/60 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
          Nonprofit Educational Initiative
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-5">
          Tumor Tactics
        </h1>

        <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-5 tracking-tight">
          Transforming Cancer Education Through Play.
        </p>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-12">
          A nonprofit educational initiative that brings cancer biology to life
          through strategic, interactive gameplay — empowering students to
          understand the science behind one of the world&apos;s most complex
          diseases.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#get-involved"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm"
          >
            Partner With Us
          </a>
          <a
            href="#get-involved"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-700 text-slate-200 text-sm font-semibold rounded-full hover:bg-slate-800 hover:border-slate-600 active:bg-slate-700 transition-colors"
          >
            Bring Tumor Tactics to Your School
          </a>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 text-sm text-slate-500">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
            10+ Schools Impacted
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-violet-500 flex-shrink-0" />
            Hundreds of Students Reached
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
            $4,000+ Raised
          </div>
        </div>
      </div>
    </section>
  );
}
