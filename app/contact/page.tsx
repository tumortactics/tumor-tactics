import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Tumor Tactics",
  description: "Email Tumor Tactics about classroom kits, workshops, bulk orders, partnerships, or volunteering.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-4.5rem)] bg-[#f8f5ff]">
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-2xl px-6">
            <h1 className="text-5xl font-black leading-tight tracking-[-0.03em] text-[#1e1b2e] sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#3d2f6b]">
              Have a question about the game, a classroom kit, or a partnership?
              Email our team and tell us how we can help.
            </p>
            <a href="mailto:playtumortactics@gmail.com" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#7c3aed] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#5b21b6]">
              Email Tumor Tactics
            </a>
            <p className="mt-3 break-words text-sm text-[#6b5f8e]">playtumortactics@gmail.com</p>
            <div className="mt-12 border-t border-[#b4a4f0] pt-8">
              <h2 className="text-2xl font-bold text-[#1e1b2e]">For educators</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#3d2f6b]">
                Ask about a bulk order quotation or a guided activity at your school.
                Guided activities are currently available in the San Diego area.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                <Link href="/get-involved#free-kit" className="inline-flex min-h-11 items-center font-semibold text-[#7c3aed] underline underline-offset-4">Request a classroom kit</Link>
                <Link href="/game" className="inline-flex min-h-11 items-center font-semibold text-[#7c3aed] underline underline-offset-4">Download the free game</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
