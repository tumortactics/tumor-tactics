import Link from "next/link";

const journeys = {
  team: {
    title: "Be part of the mission.",
    description: "Find ways to help the team, or read the story that brought us together.",
    primary: { label: "Get involved", href: "/get-involved#join-team" },
    secondary: { label: "Read our story", href: "/our-story" },
  },
  impact: {
    title: "Bring this work to your community.",
    description: "Partner with the team, or see the game in classrooms and community events.",
    primary: { label: "Partner with us", href: "/get-involved#partner" },
    secondary: { label: "View classroom photos", href: "/gallery" },
  },
  gallery: {
    title: "Bring the game to your school.",
    description: "Explore classroom kit requests and workshops, or learn more about our outreach.",
    primary: { label: "Explore classroom kits", href: "/get-involved#free-kit" },
    secondary: { label: "See our impact", href: "/impact-and-recognition" },
  },
  involved: {
    title: "Get to know the game and the people.",
    description: "See how a game works before bringing it to your community, and meet the team behind it.",
    primary: { label: "Learn how to play", href: "/how-to-play" },
    secondary: { label: "Meet our team", href: "/team" },
  },
  download: {
    title: "Ready for your first game?",
    description: "Follow the video and written rules, then bring the game to your classroom or community.",
    primary: { label: "Learn how to play", href: "/how-to-play" },
    secondary: { label: "Bring it to your school", href: "/get-involved#free-kit" },
  },
} as const;

export default function PageJourney({ page }: { page: keyof typeof journeys }) {
  const journey = journeys[page];

  return (
    <section className="border-t border-[#b4a4f0] bg-[#f8f5ff] py-14 sm:py-16" aria-label="Continue exploring">
      <div className="mx-auto flex max-w-5xl flex-col gap-7 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold leading-tight text-[#1e1b2e]">{journey.title}</h2>
          <p className="mt-3 text-sm leading-6 text-[#3d2f6b]">{journey.description}</p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-4">
          <Link href={journey.primary.href} className="inline-flex min-h-11 items-center bg-[#7c3aed] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#5b21b6]">
            {journey.primary.label}
          </Link>
          <Link href={journey.secondary.href} className="inline-flex min-h-11 items-center text-sm font-semibold text-[#6d28d9] underline underline-offset-4 hover:text-[#5b21b6]">
            {journey.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
