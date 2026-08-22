"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "San Diego County Fair",
    status: "past",
    date: "June 10, 11, 17, 18, and 20, 2026",
    location: "Del Mar Fairgrounds, San Diego, CA",
    pastBlurb:
      "Tumor Tactics spent five days at the San Diego County Fair, where visitors could see the game, try a demo, and learn how it brings cancer biology into the classroom.",
    blurb:
      "Join us at the San Diego County Fair, where we'll be showcasing Tumor Tactics to thousands of visitors. Stop by our booth to learn about the game, try a demo, and see how we're making cancer education accessible to students everywhere.",
    image: "/assets/homepage/SD_County_Fair_Photo.png",
    link: "https://sdfair.com/",
  },
  {
    title: "American Cancer Society Relay for Life",
    status: "past",
    date: "August 9, 2026",
    location: "San Diego, CA",
    pastBlurb:
      "We presented Tumor Tactics at the American Cancer Society's Relay for Life in San Diego and shared how the game introduces students to oncology through play.",
    blurb:
      "We'll be presenting Tumor Tactics at the American Cancer Society's Relay for Life — one of the nation's most iconic cancer awareness events. We'll be sharing how the game connects students to the broader fight against cancer and supports early education around oncology.",
    image: "/assets/homepage/crowd-at-relay-event-throwing-purple-gloves.webp",
    link: "https://www.relayforlife.org/",
  },
  {
    title: "UN Science Summit — New York",
    status: "upcoming",
    date: "September 8, 2026",
    location: "New York, NY",
    blurb:
      'Tumor Tactics will be presented at the United Nations Science Summit in New York. The session, "Tumor Tactics: Teaching Real Oncology in Schools Across the US and Nigeria," is part of the 2026 summit program.',
    image: "/assets/ScienceSUmmit.jpg",
    artwork: "summit",
    link: "https://sciencesummitnyc.org/",
  },
];

const upcomingEvents = events.filter((event) => event.status === "upcoming");
const pastEvents = events.filter((event) => event.status === "past");

export default function UpcomingEvents() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + upcomingEvents.length) % upcomingEvents.length);
  const next = () => setCurrent((c) => (c + 1) % upcomingEvents.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
  };

  const event = upcomingEvents[current];

  const btnBase =
    "absolute top-40 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center " +
    "bg-white border border-[#b4a4f0] shadow-lg " +
    "text-[#3d2f6b] hover:bg-[#7c3aed] hover:text-white hover:border-[#7c3aed] " +
    "transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-purple-200/60";

  return (
    <section id="events" className="scroll-mt-16 py-24 bg-[#ede9fe] border-t border-[#b4a4f0]">

      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 mb-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-4 text-[#7c3aed]">
              Events
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#1e1b2e] leading-none"
              style={{ letterSpacing: "-0.03em" }}
            >
              Upcoming Event
            </h2>
          </div>
          <Link
            href="/get-involved"
            className="text-sm font-semibold text-[#7c3aed] underline underline-offset-2 hover:text-[#5b21b6] transition-colors shrink-0"
          >
            Get involved →
          </Link>
        </div>
      </div>

      {/*
        Carousel wrapper: extra horizontal padding creates the space for the
        buttons to sit outside the card without the card shrinking on mobile.
        px-12 on mobile (48px), px-20 on sm+ (80px).
      */}
      <div
        className="relative max-w-3xl mx-auto px-12 sm:px-20"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Prev button — lives in the left padding, outside the card */}
        {upcomingEvents.length > 1 && (
          <button
            onClick={prev}
            className={`${btnBase} left-2 sm:left-5`}
            aria-label="Previous event"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Card — overflow-hidden only clips its own image, not the sibling buttons */}
        <div className="rounded-2xl border border-[#b4a4f0] overflow-hidden bg-white shadow-sm select-none">
          {/* Image */}
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative"
            style={{ height: 320 }}
            tabIndex={-1}
            aria-hidden="true"
          >
            {event.artwork === "summit" ? (
              <div className="relative flex h-full items-center overflow-hidden bg-[#1e1b2e] px-8 sm:px-12">
                <div className="absolute -right-14 -top-20 h-56 w-56 rounded-full border-[36px] border-[#7c3aed]/30" />
                <div className="absolute -bottom-16 right-24 h-40 w-40 rounded-full border-[28px] border-[#c4b5fd]/15" />
                <div className="relative max-w-md text-white">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#c4b5fd]">
                    New York City
                  </p>
                  <p className="text-3xl font-black leading-tight sm:text-5xl">
                    UN Science Summit
                  </p>
                  <p className="mt-5 inline-flex rounded-full border border-white/25 px-3 py-1 text-xs font-bold text-white/85">
                    September 2026
                  </p>
                </div>
              </div>
            ) : (
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) calc(100vw - 96px), calc(min(768px, 100vw) - 160px)"
                priority
              />
            )}
          </a>

          {/* Content */}
          <div className="p-7 sm:p-8">
            <div className="flex items-start justify-between gap-3 mb-4">
              <h3 className="text-xl font-bold text-[#1e1b2e] leading-snug">{event.title}</h3>
              <span
                className="flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full text-white"
                style={{ background: "#7c3aed" }}
              >
                2026
              </span>
            </div>

            <div className="flex flex-col gap-1.5 mb-5">
              <div className="flex items-center gap-2 text-xs text-[#7c3aed] font-semibold">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {event.date}
              </div>
              <div className="flex items-center gap-2 text-xs text-[#3d2f6b]">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </div>
            </div>

            {event.blurb && (
              <p className="text-sm text-[#3d2f6b] leading-relaxed">{event.blurb}</p>
            )}

            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-6 text-xs font-bold text-[#7c3aed] hover:text-[#5b21b6] transition-colors"
            >
              Learn more
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Next button — lives in the right padding, outside the card */}
        {upcomingEvents.length > 1 && (
          <button
            onClick={next}
            className={`${btnBase} right-2 sm:right-5`}
            aria-label="Next event"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Dot indicators */}
      {upcomingEvents.length > 1 && (
        <div className="max-w-3xl mx-auto px-6 mt-7 flex items-center justify-center gap-2.5">
          {upcomingEvents.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-200"
              style={{
                width: i === current ? 24 : 10,
                height: 10,
                background: i === current ? "#7c3aed" : "#b4a4f0",
              }}
              aria-label={`Go to event ${i + 1}`}
            />
          ))}
        </div>
      )}

      <div className="max-w-5xl mx-auto px-6 mt-20 pt-16 border-t border-[#b4a4f0]">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-widest mb-4 text-[#7c3aed]">
            Where we&apos;ve been
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1e1b2e]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Past Events
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pastEvents.map((pastEvent) => (
            <article
              key={pastEvent.title}
              className="overflow-hidden rounded-2xl border border-[#b4a4f0] bg-white shadow-sm"
            >
              <a
                href={pastEvent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-52 overflow-hidden"
                aria-label={`Visit the ${pastEvent.title} website`}
              >
                <Image
                  src={pastEvent.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </a>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold leading-snug text-[#1e1b2e]">
                    {pastEvent.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-[#ede9fe] px-3 py-1 text-xs font-bold text-[#5b21b6]">
                    Past event
                  </span>
                </div>

                <div className="mt-4 space-y-1.5 text-xs text-[#3d2f6b]">
                  <p className="font-semibold text-[#7c3aed]">{pastEvent.date}</p>
                  <p>{pastEvent.location}</p>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[#3d2f6b]">
                  {pastEvent.pastBlurb}
                </p>

                <a
                  href={pastEvent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#7c3aed] transition-colors hover:text-[#5b21b6]"
                >
                  Event website
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
