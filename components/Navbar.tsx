"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "The Problem", href: "/the-problem", id: "the-problem" },
  { label: "The Game", href: "/game", id: "game" },
  { label: "Gallery", href: "/gallery", id: "gallery" },
  { label: "Get Involved", href: "/get-involved", id: "get-involved" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 border-b border-[#ddd6fe] shadow-sm shadow-purple-100/50"
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-85 transition-opacity">
          <Image
            src="/assets/top_left_logo.jpg"
            alt="Tumor Tactics"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => (
            <Link
              key={tab.label}
              href={tab.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                isActive(tab.href)
                  ? "bg-[#7c3aed] text-white"
                  : "text-[#6b5f8e] hover:text-[#1e1b2e] hover:bg-[#ede9fe]"
              }`}
            >
              {tab.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="ml-3 text-sm font-bold bg-[#1e1b2e] text-white px-5 py-2 rounded-lg hover:bg-[#7c3aed] transition-colors shadow-sm"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-[#6b5f8e] hover:text-[#1e1b2e] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-[#ddd6fe] bg-white px-6 py-5 flex flex-col gap-3">
          {tabs.map((tab) => (
            <Link
              key={tab.label}
              href={tab.href}
              className={`text-sm font-medium py-2 transition-colors ${
                isActive(tab.href) ? "text-[#7c3aed]" : "text-[#6b5f8e] hover:text-[#1e1b2e]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {tab.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="text-sm font-bold text-white bg-[#7c3aed] px-4 py-2 rounded-lg text-center mt-1 hover:opacity-90 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
