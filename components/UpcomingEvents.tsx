const events = [
  {
    title: "San Diego County Fair",
    date: "June 10-14, 2026",
    location: "Del Mar Fairgrounds, San Diego, CA",
    blurb:
      "Join us at the San Diego County Fair, where we'll be showcasing Tumor Tactics to thousands of visitors. Stop by our booth to learn about the game, try a demo, and see how we're making cancer education accessible to students everywhere.",
    image: "/assets/homepage/san-diego-county-fair-3741fafa.jpeg",
    link: "https://sdfair.com/",
  },
  {
    title: "American Cancer Society Relay for Life",
    date: "August 9, 2026",
    location: "San Diego, CA",
    blurb:
      "We'll be presenting Tumor Tactics at the American Cancer Society's Relay for Life — one of the nation's most iconic cancer awareness events. We'll be sharing how the game connects students to the broader fight against cancer and supports early education around oncology.",
    image: "/assets/homepage/crowd-at-relay-event-throwing-purple-gloves.webp",
    link: "https://www.relayforlife.org/",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-24 bg-[#f8f5ff] border-t border-[#ddd6fe]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-4 text-[#7c3aed]">
            Events
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1e1b2e] leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            Upcoming Events
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="rounded-2xl border border-[#ddd6fe] overflow-hidden bg-white shadow-sm hover:shadow-md hover:shadow-purple-100 hover:border-[#c4b5fd] transition-all duration-200"
            >
              {/* Image */}
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-[#ddd6fe] overflow-hidden bg-white shadow-sm hover:shadow-md hover:shadow-purple-100 hover:border-[#c4b5fd] transition-all duration-200"
              >
                {/* entire card content */}

              <div
                className="w-full flex items-center justify-center border-b border-[#ddd6fe]"
                style={{ height: 220, background: "#ede9fe" }}
              >
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-[#c4b5fd]">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs font-medium">Photo coming soon</span>
                  </div>
                )}
              </div>
              </a>
              {/* Content */}
              <div className="p-7">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-lg font-bold text-[#1e1b2e] leading-snug">{event.title}</h3>
                  <span
                    className="flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ background: "#7c3aed" }}
                  >
                    2026
                  </span>
                </div>

                <div className="flex flex-col gap-1 mb-4">
                  <div className="flex items-center gap-2 text-xs text-[#7c3aed] font-semibold">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6b5f8e]">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>

                <p className="text-sm text-[#6b5f8e] leading-relaxed">{event.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
