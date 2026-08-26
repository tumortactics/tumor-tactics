import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  {
    label: "About",
    links: [
      { label: "Why It Matters", href: "/the-problem" },
      { label: "Our Story", href: "/our-story" },
      { label: "Meet Our Team", href: "/team" },
    ],
  },
  {
    label: "The Game",
    links: [
      { label: "How to Play", href: "/how-to-play" },
      { label: "Shop the Kit", href: "/shop" },
      { label: "Free Download", href: "/game" },
    ],
  },
  {
    label: "Explore",
    links: [
      { label: "Impact", href: "/impact-and-recognition" },
      { label: "Gallery", href: "/gallery" },
      { label: "Get Involved", href: "/get-involved" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#5f4c93] bg-[#282238] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.35fr_repeat(3,0.72fr)]">
        <div className="max-w-sm">
          <Image
            src="/assets/top_left_logo-removebg-preview.png"
            alt="Tumor Tactics"
            width={268}
            height={41}
            className="h-9 w-auto brightness-0 invert"
            style={{ width: "auto" }}
          />
          <p className="mt-6 text-sm leading-7 text-[#d8d1e8]">
            A student-led nonprofit turning real cancer biology into a strategy game students can understand together.
          </p>
          <div className="mt-7 flex items-center gap-5">
            <a
              href="https://www.instagram.com/steamlabs_official/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow STEAMLabs on Instagram"
              className="text-[#c8bedf] transition-colors hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="mailto:playtumortactics@gmail.com"
              aria-label="Email Tumor Tactics"
              className="text-[#c8bedf] transition-colors hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="m3 8 7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
              </svg>
            </a>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#bbaee0]">
              {group.label}
            </p>
            <ul className="grid gap-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#ddd7eb] transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-[#aea4c5] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Tumor Tactics</p>
          <p>A project of STEAMLabs International.</p>
        </div>
      </div>
    </footer>
  );
}
