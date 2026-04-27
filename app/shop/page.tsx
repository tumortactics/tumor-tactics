import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shop | Tumor Tactics",
  description:
    "Get your Tumor Tactics kit — $19.99 per deck. Free shipping on 2+ orders. 10% of proceeds supports ACS pediatric research.",
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
              Each kit includes a full card deck designed for classroom play, a printed two-sided rulebook, and educator discussion guides. $19.99 per deck.
            </p>
          </div>
        </section>

        {/* Product section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Product image */}
  
                <Image
                  src="/assets/Boxsleeve.png"
                  alt="Tumor Tactics Card Game Box"
                  width={480}
                  height={480}
                  className="w-full h-full object-contain p-8"
                />

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
                    $19.99
                  </p>

                </div>

                <ul className="space-y-3 text-sm" style={{ color: "#374151" }}>
                  {[
                    "Full card deck designed for classroom play",
                    "Printed two-sided rulebook",
                    "Educator discussion guides",
                    "2–4 players · Ages 8+",
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

                {/* Square embed */}
                <div className="pt-2">
                  <div
                    style={{
                      overflow: "auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: "100%",
                      maxWidth: "340px",
                      background: "#FFFFFF",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      boxShadow: "-2px 10px 5px rgba(0, 0, 0, 0)",
                      borderRadius: "10px",
                      fontFamily:
                        "SQ Market, SQ Market, Helvetica, Arial, sans-serif",
                    }}
                  >
                    <div style={{ padding: "20px", width: "100%" }}>
                      <a
                        id="embedded-checkout-modal-checkout-button"
                        target="_blank"
                        data-url="https://square.link/u/TtChb1V2?src=embd"
                        href="https://square.link/u/TtChb1V2?src=embed"
                        style={{
                          display: "block",
                          fontSize: "18px",
                          lineHeight: "48px",
                          height: "48px",
                          color: "#ffffff",
                          width: "100%",
                          backgroundColor: "#7c3aed",
                          textAlign: "center",
                          boxShadow: "0 0 0 1px rgba(0,0,0,.1) inset",
                          borderRadius: "6px",
                          textDecoration: "none",
                        }}
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                  <script
                    dangerouslySetInnerHTML={{
                      __html: `
                        (function() {
                          function showCheckoutWindow(e) {
                            e.preventDefault();
                            var btn = document.getElementById('embedded-checkout-modal-checkout-button');
                            var url = btn.getAttribute('data-url');
                            var title = 'Square Payment Links';
                            var topWindow = window.top ? window.top : window;
                            var dualScreenLeft = topWindow.screenLeft !== undefined ? topWindow.screenLeft : topWindow.screenX;
                            var dualScreenTop = topWindow.screenTop !== undefined ? topWindow.screenTop : topWindow.screenY;
                            var width = topWindow.innerWidth ? topWindow.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
                            var height = topWindow.innerHeight ? topWindow.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
                            var h = height * .75;
                            var w = 500;
                            var systemZoom = width / topWindow.screen.availWidth;
                            var left = (width - w) / 2 / systemZoom + dualScreenLeft;
                            var top = (height - h) / 2 / systemZoom + dualScreenTop;
                            var newWindow = window.open(url, title, 'scrollbars=yes, width=' + (w / systemZoom) + ', height=' + (h / systemZoom) + ', top=' + top + ', left=' + left);
                            if (window.focus) newWindow.focus();
                          }
                          var btn = document.getElementById('embedded-checkout-modal-checkout-button');
                          if (btn) btn.addEventListener('click', showCheckoutWindow);
                        })();
                      `,
                    }}
                  />
                </div>

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
