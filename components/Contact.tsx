export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-[#ddd6fe]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-widest mb-4 text-[#7c3aed]">
          Contact
        </p>
        <h2
          className="text-4xl sm:text-5xl font-black text-[#1e1b2e] mb-4"
          style={{ letterSpacing: "-0.03em" }}
        >
          Get in Touch
        </h2>
        <p className="text-[#6b5f8e] mb-14 text-sm leading-relaxed max-w-md mx-auto">
          Whether you are an educator, a potential partner, or passionate about
          cancer education, we would love to hear from you.
        </p>

        <div className="rounded-2xl border border-[#ddd6fe] p-10 bg-[#f8f5ff] shadow-sm shadow-purple-100">
          <p className="text-xs font-bold uppercase tracking-widest text-[#a89bc9] mb-3">
            Email us directly
          </p>
          <a
            href="mailto:tumortactics@gmail.com"
            className="text-2xl sm:text-3xl font-black text-[#1e1b2e] hover:text-[#7c3aed] transition-colors break-all"
            style={{ letterSpacing: "-0.02em" }}
          >
            tumortactics@gmail.com
          </a>
          <p className="text-xs text-[#a89bc9] mt-3">
            We typically respond within 2–3 business days.
          </p>

          <div className="mt-10 pt-8 border-t border-[#ddd6fe] flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:tumortactics@gmail.com?subject=Partnership%20Inquiry"
              className="inline-flex items-center justify-center px-6 py-3 font-bold text-sm rounded-xl text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#7c3aed" }}
            >
              Partner With Us
            </a>
            <a
              href="mailto:tumortactics@gmail.com?subject=Game%20Kit%20Request"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#ddd6fe] text-[#1e1b2e] text-sm font-bold rounded-xl hover:bg-[#ede9fe] hover:border-[#c4b5fd] active:scale-95 transition-all"
            >
              Request a Game Kit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
