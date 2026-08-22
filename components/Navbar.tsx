"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "The Problem", href: "/the-problem" },
  { label: "Tumor Tactics", href: "/shop" },
  { label: "Our Story", href: "/our-story" },
  { label: "Impact & Recognition", href: "/impact-and-recognition" },
  { label: "Get Involved", href: "/get-involved" },
];

const downloadItem = { label: "Free Download", href: "/game" };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className="sticky top-0 z-50 border-b border-[#b4a4f0] bg-white/95 shadow-sm shadow-purple-100/50"
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
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

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-medium transition-[background-color,color] duration-150 xl:px-3 xl:text-sm ${
                isActive(item.href)
                  ? "bg-[#7c3aed] text-white"
                  : "text-[#3d2f6b] hover:bg-[#ede9fe] hover:text-[#1e1b2e]"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={downloadItem.href}
            aria-current={isActive(downloadItem.href) ? "page" : undefined}
            className={`ml-1 whitespace-nowrap rounded-xl border px-4 py-2 text-[13px] font-bold shadow-sm transition-[background-color,border-color,color,transform] duration-150 active:translate-y-px xl:ml-2 xl:text-sm ${
              isActive(downloadItem.href)
                ? "border-[#1e1b2e] bg-[#1e1b2e] text-white"
                : "border-[#7c3aed] bg-[#7c3aed] text-white hover:border-[#5b21b6] hover:bg-[#5b21b6]"
            }`}
          >
            {downloadItem.label}
          </Link>
        </div>

        <button
          type="button"
          className="p-2 text-[#3d2f6b] transition-colors hover:text-[#1e1b2e] xl:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-[#b4a4f0] bg-white px-6 py-5 xl:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-[#ede9fe] text-[#7c3aed]"
                    : "text-[#3d2f6b] hover:bg-[#ede9fe] hover:text-[#1e1b2e]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={downloadItem.href}
              aria-current={isActive(downloadItem.href) ? "page" : undefined}
              className="mt-3 rounded-xl bg-[#7c3aed] px-4 py-3 text-center text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#5b21b6]"
              onClick={() => setIsOpen(false)}
            >
              {downloadItem.label}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
