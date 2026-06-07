export default function PressSection() {
  return (
    <section className="py-16 bg-white border-t border-[#b4a4f0]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-center text-[#9ca3af] mb-10">
          As Seen In
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
          <a
            href="https://www.the-smile-project.com/single-post/service-spotlight-tumor-tactics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-[#6b7280] hover:text-[#1e1b2e] transition-colors"
          >
            The Smile Project
          </a>
          <span className="hidden sm:block w-px h-5 bg-[#e5e7eb]" />
          <a
            href="https://kindovermatter.com/matt-kurtz-kindness-grant-winner-announcement-19/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-[#6b7280] hover:text-[#1e1b2e] transition-colors"
          >
            Matt&apos;s Kindness Ripples On
          </a>
        </div>
      </div>
    </section>
  );
}
