import Link from "next/link";
import Image from "next/image";

const workshopImages = [
  { src: "/assets/IMG_3707.jpg", alt: "Tumor Tactics classroom session" },
  { src: "/assets/homepage/658048246_2850481231967445_7689248314367044663_n.jpg", alt: "Students with game boxes" },
  { src: "/assets/IMG_8204.jpg", alt: "Students engaging with the game" },
  { src: "/assets/IMG_8209.jpg", alt: "Students discussing the game" },
];

const doubled = [...workshopImages, ...workshopImages];

export default function WorkshopGallery() {
  return (
    <section className="py-20 bg-white border-t border-[#b4a4f0] overflow-hidden">
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
              className="relative flex-shrink-0 rounded-2xl overflow-hidden border border-[#b4a4f0] shadow-sm"
              style={{ width: "min(340px, 80vw)", height: 240 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="340px"
                loading={i < 4 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
