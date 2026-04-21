export default function PhotoShowcase() {
  return (
    <section className="py-24 bg-white border-t border-[#ddd6fe]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-3 text-[#a855f7]">
              In the Classroom
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#1e1b2e] leading-none"
              style={{ letterSpacing: "-0.03em" }}
            >
              Bringing Science to Life
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridAutoRows: "280px" }}>
          <div className="md:row-span-2 rounded-2xl overflow-hidden border border-[#ddd6fe] relative group cursor-default shadow-sm">
            <img
              src="/assets/IMG_3707.jpg"
              alt="Tumor Tactics in the classroom"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,10,60,0.75) 0%, transparent 50%)" }} />
            <div className="absolute bottom-6 left-6 right-6">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md mb-3 text-white"
                style={{ background: "rgba(124,58,237,0.85)" }}
              >
                Classroom Session
              </span>
              <p className="text-white text-sm font-semibold leading-snug">
                Students engaged in hands-on cancer biology learning
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#ddd6fe] relative group cursor-default shadow-sm">
            <img
              src="/assets/IMG_8204.jpg"
              alt="Students playing Tumor Tactics"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,10,60,0.6) 0%, transparent 60%)" }} />
            <div className="absolute bottom-4 left-4">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md text-white"
                style={{ background: "rgba(168,85,247,0.85)" }}
              >
                Gameplay
              </span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#ddd6fe] relative group cursor-default shadow-sm">
            <img
              src="/assets/IMG_8209.jpg"
              alt="Tumor Tactics game components"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,10,60,0.6) 0%, transparent 60%)" }} />
            <div className="absolute bottom-4 left-4">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md text-white"
                style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}
              >
                Game Components
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
