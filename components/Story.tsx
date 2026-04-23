import Image from "next/image";

export default function Story() {
  return (
    <section id="story" className="py-24 bg-[#ede9fe]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-4 text-[#7c3aed]">
              Our Story
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#1e1b2e] mb-8 leading-none"
              style={{ letterSpacing: "-0.03em" }}
            >
              Education Born from<br />
              <span className="text-[#7c3aed]">Curiosity and Purpose</span>
            </h2>

            <div className="space-y-5 text-[#3d2f6b] leading-relaxed text-sm">
              <p>
                Tumor Tactics began with a simple observation: cancer is one of
                the most prevalent and complex diseases in the world, yet most
                students encounter it only through dense textbooks or difficult
                personal experiences. We believed there had to be a better way
                to teach it.
              </p>
              <p>
                A team of student researchers and educators came together to
                bridge the gap between scientific rigor and accessible learning.
                Working closely with biology teachers and health educators, we
                set out to design an experience that would not only cover cancer
                biology — from tumor growth and immune response to treatment
                decision-making — but would make students genuinely engaged with
                the material.
              </p>
              <p>
                The result was Tumor Tactics: a strategy-based card game that
                simulates the biological complexity of cancer in an interactive,
                classroom-friendly format. Since our founding, we have partnered
                with schools, science educators, and cancer awareness
                organizations to bring this resource to students nationwide.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { stat: "Founded", sub: "By student researchers & educators" },
                { stat: "Classroom-Ready", sub: "Aligned to grades 6–12 standards" },
                { stat: "Expanding", sub: "Reaching schools nationwide" },
              ].map((item) => (
                <div key={item.stat} className="rounded-xl border border-[#b4a4f0] p-4 bg-white">
                  <div className="text-xs font-bold text-[#7c3aed] mb-0.5">{item.stat}</div>
                  <div className="text-xs text-[#3d2f6b] leading-snug">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-[#b4a4f0] shadow-lg shadow-purple-100">
              <Image
                src="/assets/homepage/IMG_3347.jpg"
                alt="Tumor Tactics game components laid out on a table"
                width={720}
                height={540}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
