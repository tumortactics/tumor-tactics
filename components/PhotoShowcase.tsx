import Image from "next/image";

export default function PhotoShowcase() {
  return (
    <section className="py-24 bg-white border-t border-[#b4a4f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-3 text-[#a855f7]">
              In the Classroom
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#1e1b2e] leading-none"
              style={{ letterSpacing: "-0.03em" }}
            >
              Bringing Science to Life
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridAutoRows: "280px" }}>
          <div className="md:row-span-2 rounded-2xl overflow-hidden border border-[#b4a4f0] relative group cursor-default shadow-sm">
            <Image
              src="/assets/IMG_3707.jpg"
              alt="Tumor Tactics in the classroom"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#b4a4f0] relative group cursor-default shadow-sm">
            <Image
              src="/assets/IMG_8204.jpg"
              alt="Students playing Tumor Tactics"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#b4a4f0] relative group cursor-default shadow-sm">
            <Image
              src="/assets/IMG_8209.jpg"
              alt="Tumor Tactics game components"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
