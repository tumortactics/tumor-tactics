"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

const navigationGroups: { label: string; items: NavigationItem[] }[] = [
  {
    label: "About",
    items: [
      {
        label: "Why It Matters",
        href: "/the-problem",
        description: "The education gap Tumor Tactics is built to close.",
      },
      {
        label: "Our Story",
        href: "/our-story",
        description: "The personal experience that started the game.",
      },
      {
        label: "Meet Our Team",
        href: "/team",
        description: "The students leading the mission forward.",
      },
    ],
  },
  {
    label: "The Game",
    items: [
      {
        label: "How to Play",
        href: "/how-to-play",
        description: "Learn the objective, setup, and card types.",
      },
      {
        label: "Shop the Kit",
        href: "/shop",
        description: "Get the full classroom-ready card game.",
      },
      {
        label: "Free Download",
        href: "/game",
        description: "Print the cards and rulebook at home.",
      },
    ],
  },
];

const directItems: NavigationItem[] = [
  { label: "Impact", href: "/impact-and-recognition" },
  { label: "Get Involved", href: "/get-involved" },
];

function Chevron() {
  return (
    <svg
      className="h-3.5 w-3.5 transition-transform duration-200 group-open:rotate-180"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const groupRefs = useRef<Record<string, HTMLDetailsElement | null>>({});
  const pathname = usePathname();

  useEffect(() => {
    if (!openGroup) return;

    const handlePointerDown = (event: PointerEvent) => {
      const activeDropdown = groupRefs.current[openGroup];

      if (activeDropdown && !activeDropdown.contains(event.target as Node)) {
        setOpenGroup(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [openGroup]);

  const isActive = (href: string) => pathname === href;
  const groupIsActive = (items: NavigationItem[]) => items.some((item) => isActive(item.href));

  return (
    <nav className="sticky top-0 z-50 border-b border-[#b4a4f0] bg-[#fdfcff]/95 shadow-sm shadow-purple-100/50 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity hover:opacity-85"
          aria-label="Tumor Tactics home"
        >
          <Image
            src="/assets/top_left_logo-removebg-preview.png"
            alt="Tumor Tactics"
            width={268}
            height={41}
            className="h-9 w-auto xl:h-10"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigationGroups.map((group) => {
            const active = groupIsActive(group.items);

            return (
              <details
                key={group.label}
                ref={(element) => {
                  groupRefs.current[group.label] = element;
                }}
                className="group relative"
                open={openGroup === group.label}
                onToggle={(event) => {
                  if (event.currentTarget.open) {
                    setOpenGroup(group.label);
                  } else {
                    setOpenGroup((current) => (current === group.label ? null : current));
                  }
                }}
              >
                <summary
                  className={`flex cursor-pointer list-none items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors [&::-webkit-details-marker]:hidden ${
                    active
                      ? "bg-[#ede9fe] text-[#5b21b6]"
                      : "text-[#3d2f6b] hover:bg-[#ede9fe] hover:text-[#1e1b2e]"
                  }`}
                >
                  {group.label}
                  <Chevron />
                </summary>

                <div className="absolute left-0 top-[calc(100%+0.7rem)] w-72 border border-[#b4a4f0] bg-[#fdfcff] p-2 shadow-xl shadow-[#2d1b69]/10">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      onClick={() => setOpenGroup(null)}
                      className={`block px-4 py-3 transition-colors ${
                        isActive(item.href)
                          ? "bg-[#ede9fe] text-[#5b21b6]"
                          : "text-[#1e1b2e] hover:bg-[#f3efff]"
                      }`}
                    >
                      <span className="block text-sm font-bold">{item.label}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-[#6b5f8e]">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </details>
            );
          })}

          {directItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "bg-[#ede9fe] text-[#5b21b6]"
                  : "text-[#3d2f6b] hover:bg-[#ede9fe] hover:text-[#1e1b2e]"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/shop"
            aria-current={isActive("/shop") ? "page" : undefined}
            className={`ml-2 px-5 py-2.5 text-sm font-bold text-white transition-colors ${
              isActive("/shop") ? "bg-[#1e1b2e]" : "bg-[#7c3aed] hover:bg-[#5b21b6]"
            }`}
          >
            Get the Game
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-[#3d2f6b] transition-colors hover:bg-[#ede9fe] hover:text-[#1e1b2e] lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-[#b4a4f0] bg-[#fdfcff] px-6 py-6 lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-7">
            {navigationGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a78b8]">
                  {group.label}
                </p>
                <div className="border-y border-[#d9d0f5]">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`block border-b border-[#d9d0f5] px-1 py-3 text-sm font-semibold last:border-b-0 ${
                        isActive(item.href) ? "text-[#5b21b6]" : "text-[#1e1b2e]"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-3">
              {directItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="border border-[#b4a4f0] px-4 py-3 text-center text-sm font-bold text-[#3d2f6b]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/shop"
              className="bg-[#7c3aed] px-5 py-3.5 text-center text-sm font-bold text-white"
              onClick={() => setIsOpen(false)}
            >
              Get the Game
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
