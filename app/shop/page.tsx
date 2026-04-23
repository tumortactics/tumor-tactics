import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop | Tumor Tactics",
  description:
    "Get your Tumor Tactics kit — $17.99 per deck. Free shipping on 2+ orders. 10% of proceeds supports ACS pediatric research.",
};

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="py-28 text-center"
          style={{ background: "#1e1b2e" }}
        >
          <div className="max-w-3xl mx-auto px-6">
            <div className="eyebrow mb-6 justify-center">Shop</div>
            <h1
              className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Get Your Tumor Tactics Kit
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Each kit includes a full card deck designed for classroom play, a printed two-sided rulebook, and educator discussion guides. $17.99 per deck — free shipping on orders of 2 or more.
            </p>
          </div>
        </section>

        {/* Coming soon card */}
        <section className="py-24 bg-white">
          <div className="max-w-lg mx-auto px-6">
            <div className="card p-10 border border-[#E5E7EB] text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#F5F3FF" }}>
                <svg className="w-8 h-8" style={{ color: "#6B21E8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#1e1b2e] mb-3">Shop Coming Soon</h2>
              <p className="text-[#6b5f8e] text-sm leading-relaxed mb-8">
                We&apos;re setting up our online store. In the meantime, email us at{" "}
                <a href="mailto:tumortactics@gmail.com" className="underline" style={{ color: "#6B21E8" }}>
                  tumortactics@gmail.com
                </a>{" "}
                to place an order directly, or request a free kit if you&apos;re a Title I educator.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="mailto:tumortactics@gmail.com?subject=Tumor Tactics Kit Order" className="btn-primary">
                  Email to Order
                </a>
                <Link href="/get-involved#free-kit" className="btn-secondary">
                  Request a Free Kit
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Proceeds breakdown */}
        <section className="py-24" style={{ background: "#F8F7FF" }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="eyebrow mb-6 justify-center">Where Your Money Goes</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="card p-8 border border-[#E5E7EB]">
                <div
                  className="text-5xl font-black mb-3"
                  style={{ color: "#6B21E8" }}
                >
                  10%
                </div>
                <p className="text-sm text-[#374151] font-semibold mb-1">American Cancer Society</p>
                <p className="text-xs text-[#6b5f8e] leading-relaxed">
                  Supporting pediatric cancer research through the American Cancer Society
                </p>
              </div>
              <div className="card p-8 border border-[#E5E7EB]">
                <div
                  className="text-5xl font-black mb-3"
                  style={{ color: "#6B21E8" }}
                >
                  90%
                </div>
                <p className="text-sm text-[#374151] font-semibold mb-1">Free Kits for Schools</p>
                <p className="text-xs text-[#6b5f8e] leading-relaxed">
                  Producing more free kits for Title I and underserved schools nationwide
                </p>
              </div>
            </div>
            <p className="text-sm text-[#6b5f8e]">
              Tumor Tactics is a 501(c)(3) nonprofit. All proceeds serve our mission.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
