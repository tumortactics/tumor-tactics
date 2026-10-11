export default function HowToPlayVideo() {
  return (
    <section
      className="border-t border-[#b4a4f0] bg-white py-20 sm:py-24"
      aria-labelledby="how-to-play-video-heading"
    >
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#7c3aed]">
          Video walkthrough
        </p>
        <h2
          id="how-to-play-video-heading"
          className="text-4xl font-black leading-tight text-[#1e1b2e] sm:text-5xl"
          style={{ letterSpacing: "-0.035em" }}
        >
          How to Play Tumor Tactics
        </h2>
        <p className="mt-5 text-base leading-7 text-[#3d2f6b]">
          Watch our video walkthrough to get ready for your first game.
        </p>
        <div className="mt-8 aspect-video overflow-hidden border border-[#b4a4f0] bg-[#1e1b2e]">
          <iframe
            className="h-full w-full border-0"
            src="https://www.youtube-nocookie.com/embed/tN1XO-rw0qo"
            title="How to Play Tumor Tactics"
            loading="lazy"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <a
          href="https://www.youtube.com/watch?v=tN1XO-rw0qo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center text-sm font-bold text-[#6d28d9] underline underline-offset-4 hover:text-[#5b21b6]"
        >
          Watch on YouTube →
        </a>
      </div>
    </section>
  );
}
