export default function PressSection() {
  return (
    <section className="py-16 bg-white border-t border-[#b4a4f0]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-center text-[#9ca3af] mb-10">
          As Seen In
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
          {/* The Smile Project — URL to be confirmed by Daniel */}
          <a
            href="https://www.thesmileprojectblog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-[#6b7280] hover:text-[#1e1b2e] transition-colors"
          >
            The Smile Project
          </a>
          <span className="hidden sm:block w-px h-5 bg-[#e5e7eb]" />
          {/* Matt's Kindness Ripples On — URL to be confirmed by Daniel */}
          <a
            href="https://mattskindnessrippleson.com"
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
