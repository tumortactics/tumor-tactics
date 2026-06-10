"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "The Problem", href: "/the-problem" },
  { label: "Tumor Tactics", href: "/shop" },
  { label: "Free Download", href: "/game" },
];

const aboutItems = [
  { label: "Our Team", href: "/team" },
  { label: "Awards and Recognition", href: "/awards-and-recognition" },
  { label: "Founding Story", href: "/founding-story" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isAboutActive = aboutItems.some((item) => pathname === item.href);

  const handleAboutEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setAboutOpen(true);
  };

  const handleAboutLeave = () => {
    closeTimer.current = setTimeout(() => setAboutOpen(false), 120);
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 border-b border-[#b4a4f0] shadow-sm shadow-purple-100/50"
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-85 transition-opacity">
          <Image
            src="/assets/top_left_logo-removebg-preview.png"
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
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-[background-color,color] duration-150 ${
                isActive(tab.href)
                  ? "bg-[#7c3aed] text-white"
                  : "text-[#3d2f6b] hover:text-[#1e1b2e] hover:bg-[#ede9fe]"
              }`}
            >
              {tab.label}
            </Link>
          ))}

          {/* About Us dropdown — delay-based so cursor can travel to dropdown */}
          <div
            className="relative"
            onMouseEnter={handleAboutEnter}
            onMouseLeave={handleAboutLeave}
          >
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-[background-color,color] duration-150 flex items-center gap-1 ${
                isAboutActive
                  ? "bg-[#7c3aed] text-white"
                  : "text-[#3d2f6b] hover:text-[#1e1b2e] hover:bg-[#ede9fe]"
              }`}
              aria-haspopup="true"
              aria-expanded={aboutOpen}
            >
              About Us
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-150 ${aboutOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {aboutOpen && (
              <div className="absolute top-full left-0 pt-1 w-56 z-50">
                <div className="bg-white border border-[#b4a4f0] rounded-xl shadow-lg shadow-purple-100/50 py-1">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-[#7c3aed] bg-[#ede9fe]"
                          : "text-[#3d2f6b] hover:text-[#1e1b2e] hover:bg-[#ede9fe]"
                      }`}
                      onClick={() => setAboutOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/get-involved"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-[background-color,color] duration-150 ${
              isActive("/get-involved")
                ? "bg-[#7c3aed] text-white"
                : "text-[#3d2f6b] hover:text-[#1e1b2e] hover:bg-[#ede9fe]"
            }`}
          >
            Get Involved
          </Link>
            
          {/* <Link
            href="/contact"
            className="ml-3 text-sm font-bold bg-[#1e1b2e] text-white px-5 py-2 rounded-lg hover:bg-[#7c3aed] transition-colors shadow-sm"
          >
            Contact Us
          </Link> */}
        </div>

        <button
          className="md:hidden p-2 text-[#3d2f6b] hover:text-[#1e1b2e] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
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
        <div className="md:hidden border-t border-[#b4a4f0] bg-white px-6 py-5 flex flex-col gap-3">
          {tabs.map((tab) => (
            <Link
              key={tab.label}
              href={tab.href}
              className={`text-sm font-medium py-2 transition-colors ${
                isActive(tab.href) ? "text-[#7c3aed]" : "text-[#3d2f6b] hover:text-[#1e1b2e]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {tab.label}
            </Link>
          ))}

          {/* About Us mobile accordion */}
          <div>
            <button
              onClick={() => setAboutMobileOpen(!aboutMobileOpen)}
              className={`text-sm font-medium py-2 transition-colors w-full flex items-center justify-between ${
                isAboutActive ? "text-[#7c3aed]" : "text-[#3d2f6b] hover:text-[#1e1b2e]"
              }`}
            >
              About Us
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-150 ${aboutMobileOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {aboutMobileOpen && (
              <div className="pl-4 flex flex-col gap-1 mt-1">
                {aboutItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm py-1.5 transition-colors ${
                      isActive(item.href) ? "text-[#7c3aed] font-medium" : "text-[#3d2f6b] hover:text-[#1e1b2e]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/get-involved"
            className={`text-sm font-medium py-2 transition-colors ${
              isActive("/get-involved") ? "text-[#7c3aed]" : "text-[#3d2f6b] hover:text-[#1e1b2e]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Get Involved
          </Link>

          <Link
            href="/contact"
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
