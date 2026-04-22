export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "92vh" }}>
      <div className="absolute inset-0">
        <img
          src="/assets/IMG_3707.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(30,10,60,0.82) 0%, rgba(80,30,120,0.65) 40%, rgba(20,5,45,0.90) 100%)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: "92vh" }}>
        <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6">Nonprofit Educational Initiative</p>

        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-none mb-6"
          style={{ letterSpacing: "-0.03em" }}
        >
          Tumor
          <br />
          <span style={{ color: "#c4b5fd" }}>Tactics</span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/85 font-semibold mb-5 max-w-2xl" style={{ letterSpacing: "-0.01em" }}>
          Transforming Cancer Education Through Play.
        </p>

        <p className="max-w-xl mx-auto text-base text-white/60 leading-relaxed mb-12">
          A nonprofit educational initiative that brings cancer biology to life
          through strategic, interactive gameplay — empowering students to
          understand the science behind one of the world&apos;s most complex diseases.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 font-bold rounded-lg text-sm text-white transition-all hover:opacity-90 active:scale-95 shadow-lg"
            style={{ background: "#7c3aed", boxShadow: "0 4px 24px rgba(124,58,237,0.45)" }}
          >
            Partner With Us
          </a>
          <a
            href="/get-involved"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white text-sm font-bold rounded-lg hover:bg-white/10 hover:border-white/60 active:scale-95 transition-all"
          >
            Bring Tumor Tactics to Your School
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-xs uppercase tracking-widest font-medium">Scroll</span>
          <svg className="w-5 h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
