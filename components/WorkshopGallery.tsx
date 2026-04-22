import Link from "next/link";

const workshopImages = [
  { src: "/assets/IMG_3707.jpg", alt: "Tumor Tactics classroom session" },
  { src: "/assets/homepage/658048246_2850481231967445_7689248314367044663_n.jpg", alt: "Students with game boxes" },
  {src: "/assets/IMG_8204.jpg", alt: "Students engaging with the game" },
  { src: "/assets/IMG_8209.jpg", alt: "Students discussing the game" },
];

const doubled = [...workshopImages, ...workshopImages];

export default function WorkshopGallery() {
  return (
    <section className="py-20 bg-white border-t border-[#ddd6fe] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#1e1b2e]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Tumor Tactics in the Wild
        </h2>
      </div>

      <div className="relative">
        <div className="flex gap-4 animate-marquee" style={{ width: "max-content" }}>
          {doubled.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-2xl overflow-hidden border border-[#ddd6fe] shadow-sm"
              style={{ width: 340, height: 240 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white transition-all duration-200"
        >
          View Our Full Gallery
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
