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

          <p
            className="text-xl text-white/85 font-semibold mb-4"
            style={{ letterSpacing: "-0.01em" }}
          >
            Transforming Cancer Education Through Play.
          </p>

          <p className="text-sm text-white/65 leading-relaxed mb-10 max-w-sm">
            A nonprofit educational initiative that brings cancer biology to life
            through strategic, interactive gameplay — empowering students to
            understand one of the world&apos;s most complex diseases.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/#contact"
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
          priority
          sizes="50vw"
        />
      </div>

    </section>
  );
}
