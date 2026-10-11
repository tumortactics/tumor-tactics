import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import ProductGallery from "@/components/ProductGallery";
import BuyButton from "@/components/BuyButton";

export const metadata: Metadata = {
  title: "Shop the Kit | Tumor Tactics",
  description:
    "Buy your Tumor Tactics kit for $17.99. Each kit includes a full card deck and printed two-sided rulebook. Shipping charges may apply.",
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
              Each $17.99 kit includes a full card deck and a printed two-sided rulebook. Bring cancer biology to life through play.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <span className="text-sm text-white/55 font-medium uppercase tracking-widest">A project by</span>
              <a
                href="https://steamlabsintl.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src="/assets/steamlabs_logo.png"
                  alt="STEAMLabs International"
                  width={640}
                  height={181}
                  className="h-[30px] w-auto object-contain"
                  style={{ filter: "brightness(0) invert(1)", width: "auto" }}
                />
              </a>
            </div>
          </div>
        </section>

        {/* Product section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 items-center">
              {/* Product gallery */}
              <ProductGallery />

              {/* Product details + buy */}
              <div className="flex flex-col gap-6">
                <div>
                  <div className="eyebrow mb-4">Tumor Tactics</div>
                  <h2
                    className="text-4xl font-black mb-4 leading-tight"
                    style={{ color: "#1e1b2e", letterSpacing: "-0.02em" }}
                  >
                    Tumor Tactics Card Game
                  </h2>
                  <p
                    className="text-3xl font-bold mb-2"
                    style={{ color: "#7c3aed" }}
                  >
                    $17.99
                  </p>

                </div>

                <ul className="space-y-3 text-sm" style={{ color: "#374151" }}>
                  {[
                    "Full card deck designed for classroom play",
                    "Printed two-sided rulebook",
                    "2–4 players · Ages 8+",
                    "10% of proceeds support pediatric cancer research through the American Cancer Society",
                    "All other proceeds fund free kits for Title I and underserved schools nationwide",
                    "Free local delivery/pickup in select San Diego areas. Shipping elsewhere is invoiced separately (typically around $7.50)."
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "#ede9fe" }}
                      >
                        <svg
                          className="w-3 h-3"
                          style={{ color: "#7c3aed" }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <BuyButton />

                <p className="text-sm leading-relaxed text-[#3d2f6b]">
                  Prefer to print your own? <Link href="/game" className="font-semibold text-[#7c3aed] underline underline-offset-4">Download the free print-and-play game</Link> or <Link href="/how-to-play" className="font-semibold text-[#7c3aed] underline underline-offset-4">learn how to play</Link>.
                </p>

                <p className="text-xs" style={{ color: "#6b5f8e" }}>
                  Title I educator?{" "}
                  <Link
                    href="/get-involved#free-kit"
                    className="underline"
                    style={{ color: "#7c3aed" }}
                  >
                    Request a free kit
                  </Link>
                </p>
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
