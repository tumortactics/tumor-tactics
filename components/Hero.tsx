import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row" style={{ minHeight: "88vh" }}>

      {/* Left column — solid dark purple, all text */}
      <div
        className="flex lg:flex-1 items-center px-8 sm:px-12 lg:px-16 py-20 lg:py-0"
        style={{ background: "#1e1b2e", minHeight: "88vh" }}
      >
        <div style={{ maxWidth: 520 }}>
          <p className="text-white/75 text-xs font-bold uppercase tracking-widest mb-6">
            Nonprofit Educational Initiative
          </p>

          <h1
            className="text-6xl sm:text-7xl font-black text-white leading-none mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            Tumor
            <br />
            <span style={{ color: "#c4b5fd" }}>Tactics</span>
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-white/55 font-medium uppercase tracking-widest">A project by</span>
            <a
              href="https://steamlabsintl.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              <Image
                src="/assets/steamlabs_logo.png"
                alt="STEAMLabs International"
                width={640}
                height={181}
                className="h-9 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)", width: "auto" }}
              />
            </a>
          </div>

          <p className="text-sm text-white/65 leading-relaxed mb-10 max-w-sm">
            Tumor Tactics turns cancer biology into a strategy game that students
            can pick up, play, and understand.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/get-involved"
              className="inline-flex items-center justify-center px-7 py-3.5 font-bold text-sm text-white transition-[opacity] hover:opacity-90 active:translate-y-px"
              style={{ background: "#7c3aed" }}
            >
              Partner With Us
            </a>
            <a
              href="/get-involved"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/40 text-white text-sm font-bold hover:bg-white/10 hover:border-white/60 transition-[background-color,border-color] active:translate-y-px"
            >
              Bring It to Your School
            </a>
          </div>
        </div>
      </div>

      {/* Right column — raw photo, zero overlay */}
      <div className="hidden lg:block lg:flex-1 relative">
        <Image
          src="/assets/IMG_3707.jpg"
          alt="Students playing Tumor Tactics in a classroom"
          fill
          className="object-cover"
          loading="eager"
          fetchPriority="high"
          sizes="50vw"
        />
      </div>

    </section>
  );
}
