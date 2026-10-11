import Image from "next/image";
import Link from "next/link";
import { homepageFeatures, pressFeatures, type PressFeature } from "@/data/pressFeatures";

type PressSectionProps = {
  variant?: "home" | "archive";
};

function ExternalArrow() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4m-4-10h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function StoryMeta({ story, light = false }: { story: PressFeature; light?: boolean }) {
  return (
    <p
      className={`text-[11px] font-bold uppercase tracking-[0.16em] ${
        light ? "text-[#c4b5fd]" : "text-[#7c3aed]"
      }`}
    >
      {story.source}{story.published && <> <span aria-hidden="true">·</span> {story.published}</>}
    </p>
  );
}

function HomePress() {
  const [lead, ...supporting] = homepageFeatures;

  return (
    <section className="border-t border-[#b4a4f0] bg-white py-20 sm:py-24" aria-labelledby="press-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#7c3aed]">
              In the news
            </p>
            <h2
              id="press-heading"
              className="max-w-2xl text-4xl font-black leading-[0.98] text-[#1e1b2e] sm:text-5xl"
              style={{ letterSpacing: "-0.035em" }}
            >
              Stories behind the science and the game.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#3d2f6b]">
            Coverage and stories on how Tumor Tactics grew from a personal question into a student-led educational mission.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:gap-10">
          <article className="overflow-hidden bg-[#1e1b2e] text-white">
            <a
              href={lead.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus-visible:outline-offset-[-4px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={lead.image}
                  alt={lead.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out motion-reduce:transition-none motion-safe:group-hover:scale-[1.025]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              <div className="grid gap-5 p-7 sm:p-9">
                <StoryMeta story={lead} light />
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
                    {lead.category}
                  </p>
                  <h3 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                    {lead.title}
                  </h3>
                </div>
                <p className="max-w-[62ch] text-sm leading-7 text-white/75">{lead.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#c4b5fd]">
                  Read on {lead.source} <ExternalArrow />
                </span>
              </div>
            </a>
          </article>

          <div className="border-y border-[#b4a4f0]">
            {supporting.map((story) => (
              <article key={story.href} className="border-b border-[#b4a4f0] last:border-b-0">
                <a
                  href={story.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-5 py-7 sm:grid-cols-[132px_1fr]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#ede9fe]">
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 ease-out motion-reduce:transition-none motion-safe:group-hover:scale-[1.035]"
                      sizes="(max-width: 640px) 100vw, 180px"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-3">
                    <StoryMeta story={story} />
                    <h3 className="text-xl font-black leading-snug text-[#1e1b2e] group-hover:text-[#5b21b6]">
                      {story.title}
                    </h3>
                    <p className="text-sm leading-6 text-[#3d2f6b]">{story.description}</p>
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-[#7c3aed]">
                      Read the feature <ExternalArrow />
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
        <Link href="/impact-and-recognition#media-features-heading" className="mt-10 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#6d28d9] underline underline-offset-4 hover:text-[#5b21b6]">
          Explore all {pressFeatures.length} stories →
        </Link>
      </div>
    </section>
  );
}

function ArchivePress() {
  return (
    <section className="border-t border-[#b4a4f0] bg-white py-20" aria-labelledby="media-features-heading">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#7c3aed]">
              Media &amp; features
            </p>
            <h2
              id="media-features-heading"
              className="text-4xl font-black leading-none text-[#1e1b2e] sm:text-5xl"
              style={{ letterSpacing: "-0.035em" }}
            >
              All stories &amp; features
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#3d2f6b]">
            {pressFeatures.length} news features, interviews, outreach reports, and recognitions from across the Tumor Tactics story.
          </p>
        </div>

        <div className="border-y border-[#b4a4f0]">
          {pressFeatures.map((story) => (
            <article key={story.href} className="border-b border-[#b4a4f0] last:border-b-0">
              <a
                href={story.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[80px_minmax(0,1fr)] gap-4 py-7 sm:grid-cols-[144px_minmax(0,1fr)] sm:items-center sm:gap-6 lg:grid-cols-[176px_minmax(0,1fr)_auto]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ede9fe]">
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    className={`${story.category === "Award recognition" ? "object-contain p-2" : "object-cover"} transition-transform duration-500 ease-out motion-reduce:transition-none motion-safe:group-hover:scale-[1.035]`}
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 144px, 176px"
                  />
                </div>
                <div className="grid gap-3">
                  <StoryMeta story={story} />
                  <p className="text-xs font-semibold text-[#6b5f8e]">{story.category}</p>
                  <h3 className="text-lg font-black leading-snug text-[#1e1b2e] group-hover:text-[#5b21b6] sm:text-xl">
                    {story.title}
                  </h3>
                  <p className="max-w-[64ch] text-sm leading-6 text-[#3d2f6b]">{story.description}</p>
                </div>
                <span className="hidden items-center gap-2 text-xs font-bold text-[#7c3aed] lg:inline-flex">
                  Read <ExternalArrow />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PressSection({ variant = "home" }: PressSectionProps) {
  return variant === "archive" ? <ArchivePress /> : <HomePress />;
}
