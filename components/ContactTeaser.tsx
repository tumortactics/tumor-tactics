import Link from "next/link";

export default function ContactTeaser() {
  return (
    <section className="py-24 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2
          className="text-4xl sm:text-5xl font-bold text-[#1e1b2e] mb-4 leading-tight"
          style={{ letterSpacing: "-0.03em" }}
        >
          Want to bring Tumor Tactics to your school?
        </h2>
        <p className="text-lg text-[#3d2f6b] mb-10 leading-relaxed">
          Whether you&apos;re an educator, a partner, or just someone passionate about cancer education, we&apos;d love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
          <Link href="/get-involved#free-kit" className="btn-secondary">
            Request a Free Kit
          </Link>
        </div>
      </div>
    </section>
  );
}
