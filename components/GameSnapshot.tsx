import Link from "next/link";

const features = [
  {
    icon: "🃏",
    title: "Real Oncology Decisions",
    body: "Players choose between chemotherapy, immunotherapy, surgery, and more — the same tradeoffs real oncologists weigh every day.",
  },
  {
    icon: "🎲",
    title: "Designed for Classrooms",
    body: "2–4 players, 45–60 minutes, grades 4–12. No biology background required — the game teaches the science as you play.",
  },
  {
    icon: "🔬",
    title: "Three Tumor Types",
    body: "Lung, Colon, and Skin cancers. Each has unique mechanics that mirror real tumor biology and treatment response patterns.",
  },
];

export default function GameSnapshot() {
  return (
    <section className="py-24" style={{ background: "#F5F3FF" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="eyebrow mb-4">The Game</div>
        <h2
          className="text-4xl sm:text-5xl font-bold text-[#1e1b2e] mb-4 leading-tight"
          style={{ letterSpacing: "-0.03em" }}
        >
          Strategy-based. Science-accurate. Classroom-ready.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feat) => (
            <div key={feat.title} className="card p-8">
              <div className="text-4xl mb-4">{feat.icon}</div>
              <h3 className="text-lg font-bold text-[#1e1b2e] mb-3">{feat.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{feat.body}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/game" className="btn-secondary">
            Explore the Full Game →
          </Link>
        </div>
      </div>
    </section>
  );
}
