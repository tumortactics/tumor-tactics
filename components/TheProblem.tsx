import Link from "next/link";

const stats = [
  {
    figure: "1 in 3",
    label: "Americans will be diagnosed with cancer in their lifetime",
  },
  {
    figure: "#2",
    label: "leading cause of death in the United States",
  },
  {
    figure: "53%",
    label: "of children know a close family member with cancer before age 12",
  },
  {
    figure: "12%",
    label: "of K–8 curriculum includes any teaching about cancer",
  },
];

const insights = [
  {
    heading: "Students are already affected",
    body: "More than half of K–12 students personally know someone with cancer. They're not too young for this topic — they're already living it.",
  },
  {
    heading: "Curiosity is the missing ingredient",
    body: "When students understand what cancer actually is — at a cellular level — fear turns into curiosity. Curiosity turns into engagement. Engagement turns into advocates.",
  },
  {
    heading: "Tumor Tactics bridges the gap",
    body: "By turning oncology into strategic gameplay, we give students a way to learn that's active, social, and genuinely fun — without sacrificing scientific accuracy.",
  },
];

export default function TheProblem() {
  return (
    <div className="bg-[#ede9fe]">
      {/* Hero */}
      <section
        className="py-28 text-center"
        style={{ background: "#1e1b2e" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white/75 text-xs font-bold uppercase tracking-widest mb-6">Why This Matters</p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            The Problem<br />
            <span className="text-[#c4b5fd]">We&rsquo;re Solving</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Cancer touches nearly every family in America — yet almost nothing in our
            school curriculum prepares young people to understand it. That gap has consequences.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white border-b border-[#b4a4f0]">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl sm:text-4xl font-black text-[#1e1b2e] mb-14"
            style={{ letterSpacing: "-0.03em" }}
          >
            Cancer is already<br />in students&rsquo; lives
          </h2>

          {/* Lead stat */}
          <div className="rounded-2xl bg-[#1e1b2e] px-10 py-12 mb-6 flex flex-col sm:flex-row sm:items-center gap-6">
            <div
              className="text-7xl sm:text-8xl font-black text-[#c4b5fd] leading-none shrink-0"
              style={{ letterSpacing: "-0.04em" }}
            >
              {stats[0].figure}
            </div>
            <p className="text-white/80 text-lg sm:text-xl leading-snug font-medium max-w-xs">
              {stats[0].label}
            </p>
          </div>

          {/* Secondary stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.slice(1).map((s) => (
              <div
                key={s.figure}
                className="rounded-2xl border border-[#b4a4f0] bg-[#ede9fe] px-6 py-7 hover:border-[#c4b5fd] hover:shadow-md hover:shadow-purple-100 transition-[border-color,box-shadow] duration-200"
              >
                <div
                  className="text-4xl font-black text-[#7c3aed] mb-2 leading-none"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {s.figure}
                </div>
                <p className="text-[#1e1b2e] font-medium text-sm leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The education gap */}
      <section className="py-20 bg-[#ede9fe]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-black text-[#1e1b2e] mb-6"
                style={{ letterSpacing: "-0.03em" }}
              >
                When it is taught,<br />it&rsquo;s through boring textbooks
              </h2>
              <div className="space-y-4 text-[#3d2f6b] text-sm leading-relaxed">
                <p>
                  The rare classroom that covers cancer at all typically does so through dense
                  reading passages and vocabulary lists — passive learning that doesn&rsquo;t stick
                  and doesn&rsquo;t engage.
                </p>
                <p>
                  Students who lose a family member to cancer often carry that experience into
                  school with no framework for understanding what happened, and no space to
                  process it through learning.
                </p>
                <p>
                  Meanwhile, cancer biology has never been more accessible or more relevant.
                  The scientific community understands it in extraordinary detail. Students
                  deserve that knowledge — in a form they can actually engage with.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {insights.map((item) => (
                <div
                  key={item.heading}
                  className="rounded-xl border border-[#b4a4f0] bg-white p-5 hover:border-[#c4b5fd] hover:shadow-sm hover:shadow-purple-100 transition-[border-color,box-shadow] duration-200"
                >
                  <h3 className="text-sm font-bold text-[#1e1b2e] mb-1.5">{item.heading}</h3>
                  <p className="text-xs text-[#3d2f6b] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-[#b4a4f0]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl sm:text-4xl font-black text-[#1e1b2e] mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Ready to be part of the solution?
          </h2>
          <p className="text-[#3d2f6b] text-sm mb-8 max-w-xl mx-auto leading-relaxed">
            Bring Tumor Tactics to your classroom, donate to expand our reach, or partner
            with us to close the cancer education gap — one game at a time.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm text-white transition-[opacity,transform] hover:opacity-90 active:translate-y-px shadow-md"
              style={{ background: "#7c3aed" }}
            >
              Get Involved
            </Link>
            <Link
              href="/game"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm text-[#7c3aed] border border-[#c4b5fd] bg-white hover:bg-[#ede9fe] transition-[background-color,transform] active:translate-y-px"
            >
              See the Game
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
