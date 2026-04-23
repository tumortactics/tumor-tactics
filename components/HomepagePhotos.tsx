import Image from "next/image";

const photos = [
  {
    src: "/assets/homepage/658048246_2850481231967445_7689248314367044663_n.jpg",
    label: "Workshop Showcase",
    caption: "Students receive their Tumor Tactics kits",
  },
  {
    src: "/assets/homepage/IMG_3343.jpg",
    label: "Game Components",
    caption: "Everything in the box",
  },
  {
    src: "/assets/homepage/IMG_3344.jpg",
    label: "Ready to Play",
    caption: "A full game setup, classroom-ready",
  },
];

export default function HomepagePhotos() {
  return (
    <section className="py-20 bg-[#ede9fe] border-t border-[#b4a4f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-3 text-[#7c3aed]">
              In the Field
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1e1b2e] leading-none"
              style={{ letterSpacing: "-0.03em" }}
            >
              Seeing It in Action
            </h2>
          </div>
          <p className="text-[#3d2f6b] text-sm max-w-xs leading-relaxed">
            From workshops to classrooms — real students, real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-[#b4a4f0] shadow-sm relative group" style={{ height: 360 }}>
            <Image
              src={photos[0].src}
              alt={photos[0].caption}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-[#1e1b2e]/65" />
            <div className="absolute bottom-5 left-5">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md mb-2 text-white" style={{ background: "rgba(124,58,237,0.85)" }}>
                {photos[0].label}
              </span>
              <p className="text-white text-sm font-semibold">{photos[0].caption}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[photos[1], photos[2]].map((photo) => (
              <div key={photo.src} className="rounded-2xl overflow-hidden border border-[#b4a4f0] shadow-sm relative group flex-1" style={{ height: 170 }}>
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-14 bg-[#1e1b2e]/65" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md text-white" style={{ background: "rgba(168,85,247,0.85)" }}>
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
