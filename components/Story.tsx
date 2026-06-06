import Image from "next/image";
import Link from "next/link";

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
              Built by two students<br />
              <em className="not-italic text-[#7c3aed]">who needed it first.</em>
            </h2>

            <div className="space-y-5 text-[#3d2f6b] leading-relaxed text-sm">
              <p>
                Daniel was nine years old when his grandmother, the person who raised him, was diagnosed with stage 3 pancreatic cancer. He spent eight months watching her get weaker in hospital rooms he did not understand. The treatments seemed to be hurting her, and no one explained why. He was too young to know what questions to ask, and no one thought to offer the answers.
              </p>
              <p>
                Six years later, his grandfather was diagnosed. In the doctor&apos;s office that day, Daniel&apos;s seven-year-old sister was sitting with the same look on her face that Daniel remembered from his own childhood: trying to understand something impossible with no one giving her the words. So he became the one who gave them. He read the medical reports. He translated the complicated language into something a seven-year-old could hold onto. He gave her what he had once desperately needed.
              </p>
              <p>
                Zachary grew up on strategy card games and watched his great-aunt go through cancer treatment with the same question: why is there no way for a kid to actually understand what is happening? Together, they set out to build what neither of them had. Not a simplified version of cancer, but a real one, grounded in actual oncology, where players make the same decisions oncologists make and learn the science by living inside it.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { stat: "150+", sub: "students in our first classroom workshop at Deer Canyon Elementary" },
                { stat: "Ages 8+", sub: "K-8 · no biology background needed" },
                { stat: "10% of proceeds", sub: "go directly to the American Cancer Society" },
              ].map((item) => (
                <div key={item.stat} className="rounded-xl border border-[#b4a4f0] p-4 bg-white">
                  <div className="text-xs font-bold text-[#7c3aed] mb-0.5">{item.stat}</div>
                  <div className="text-xs text-[#3d2f6b] leading-snug">{item.sub}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/founding-story"
                className="text-sm font-semibold text-[#7c3aed] underline underline-offset-2 hover:text-[#5b21b6] transition-colors"
              >
                Read our full story →
              </Link>
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
