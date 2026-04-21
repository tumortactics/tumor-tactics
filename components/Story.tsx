const milestones = [
  { label: "Founded", detail: "By a team of student researchers and educators" },
  { label: "Developed", detail: "In collaboration with teachers and cancer awareness organizations" },
  { label: "Launched", detail: "As a classroom pilot across multiple partner schools" },
  { label: "Expanding", detail: "Growing to reach hundreds of students across the country" },
];

export default function Story() {
  return (
    <section id="story" className="py-24 bg-[#f8f5ff]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-4 text-[#7c3aed]">
              Our Story
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#1e1b2e] mb-8 leading-none"
              style={{ letterSpacing: "-0.03em" }}
            >
              Education Born from<br />
              <span className="text-[#7c3aed]">Curiosity and Purpose</span>
            </h2>

            <div className="space-y-5 text-[#6b5f8e] leading-relaxed text-sm">
              <p>
                Tumor Tactics began with a simple observation: cancer is one of
                the most prevalent and complex diseases in the world, yet most
                students encounter it only through dense textbooks or difficult
                personal experiences. We believed there had to be a better way
                to teach it.
              </p>
              <p>
                A team of student researchers and educators came together to
                bridge the gap between scientific rigor and accessible learning.
                Working closely with biology teachers and health educators, we
                set out to design an experience that would not only cover cancer
                biology — from tumor growth and immune response to treatment
                decision-making — but would make students genuinely engaged with
                the material.
              </p>
              <p>
                The result was Tumor Tactics: a strategy-based card game that
                simulates the biological complexity of cancer in an interactive,
                classroom-friendly format. Since our founding, we have partnered
                with schools, science educators, and cancer awareness
                organizations to bring this resource to students nationwide.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#ddd6fe] p-8 bg-white shadow-sm shadow-purple-100">
            <div className="space-y-0 divide-y divide-[#ede9fe]">
              {milestones.map((item, i) => (
                <div key={i} className="flex gap-5 items-start py-5 first:pt-0 last:pb-0">
                  <div className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black text-white bg-[#7c3aed]">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1e1b2e] mb-0.5">{item.label}</div>
                    <div className="text-xs text-[#6b5f8e] leading-relaxed">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#ede9fe]">
              <blockquote className="text-[#6b5f8e] text-sm italic leading-relaxed">
                &ldquo;We wanted students to feel the complexity and stakes of
                cancer biology — not just read about it.&rdquo;
              </blockquote>
              <p className="text-xs text-[#a89bc9] mt-3 font-medium">— Tumor Tactics Founding Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
