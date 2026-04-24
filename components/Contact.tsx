export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-[#b4a4f0]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2
          className="text-4xl sm:text-5xl font-black text-[#1e1b2e] mb-4"
          style={{ letterSpacing: "-0.03em" }}
        >
          Get in Touch
        </h2>
        <p className="text-[#3d2f6b] mb-14 text-sm leading-relaxed max-w-md mx-auto">
          Whether you are an educator, a potential partner, or passionate about
          cancer education, we would love to hear from you.
        </p>

        <div className="rounded-2xl border border-[#b4a4f0] p-10 bg-[#ede9fe] shadow-sm shadow-purple-100">
          <p className="text-xs font-bold uppercase tracking-widest text-[#3d2f6b] mb-3">
            Email us directly
          </p>
          <a
            href="mailto:playtumortactics@gmail.com"
            className="text-2xl sm:text-3xl font-black text-[#1e1b2e] hover:text-[#7c3aed] transition-colors break-all"
            style={{ letterSpacing: "-0.02em" }}
          >
            playtumortactics@gmail.com
          </a>
          <p className="text-xs text-[#3d2f6b] mt-3">
            We typically respond within 2–3 business days.
          </p>

          <div className="mt-10 pt-8 border-t border-[#b4a4f0] flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:playtumortactics@gmail.com?subject=Partnership%20Inquiry"
              className="inline-flex items-center justify-center px-6 py-3 font-bold text-sm rounded-xl text-white transition-[opacity,transform] hover:opacity-90 active:translate-y-px"
              style={{ background: "#7c3aed" }}
            >
              Partner With Us
            </a>
            <a
              href="mailto:playtumortactics@gmail.com?subject=Game%20Kit%20Request"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#b4a4f0] text-[#1e1b2e] text-sm font-bold rounded-xl hover:bg-[#ede9fe] hover:border-[#c4b5fd] active:translate-y-px transition-[background-color,border-color,transform]"
            >
              Request a Game Kit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
