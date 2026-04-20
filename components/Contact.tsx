export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-slate-400 mb-12 leading-relaxed">
          Whether you are an educator, a potential partner, or simply passionate
          about cancer education, we would love to hear from you.
        </p>

        <div className="bg-gradient-to-br from-slate-800 to-blue-950/40 rounded-2xl p-10 border border-slate-700 shadow-sm">
          <div className="inline-flex p-3.5 rounded-2xl bg-slate-700 shadow-sm mb-6 border border-slate-600">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-sm text-slate-400 mb-2 font-medium">
            Email us directly
          </p>
          <a
            href="mailto:tumortactics@gmail.com"
            className="text-xl sm:text-2xl font-semibold text-slate-100 hover:text-blue-400 transition-colors break-all"
          >
            tumortactics@gmail.com
          </a>
          <p className="text-sm text-slate-500 mt-3">
            We typically respond within 2–3 business days.
          </p>

          <div className="mt-8 pt-6 border-t border-slate-700/70 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:tumortactics@gmail.com?subject=Partnership%20Inquiry"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors"
            >
              Partner With Us
            </a>
            <a
              href="mailto:tumortactics@gmail.com?subject=Game%20Kit%20Request"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-slate-200 text-sm font-semibold rounded-full hover:bg-slate-700 hover:border-slate-500 transition-colors"
            >
              Request a Game Kit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
