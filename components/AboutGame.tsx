const features = [
  {
    title: "Strategy-Based Gameplay",
    description:
      "Players make decisions that mirror real biological processes — allocating treatment resources, managing immune responses, and adapting to evolving tumor behavior.",
  },
  {
    title: "Real Biological Mechanisms",
    description:
      "Grounded in current oncology research, it covers tumor growth, metastasis, immune evasion, and evidence-based treatment strategies.",
  },
  {
    title: "Classroom-Friendly Format",
    description:
      "Designed with educators in mind, it includes lesson guides, discussion prompts, and alignment with middle and high school science standards.",
  },
  {
    title: "Accessible to All Learners",
    description:
      "No prior biology background needed. Concepts are introduced progressively through play, making complex science approachable.",
  },
];

const pillars = [
  "Scientific Literacy",
  "Critical Thinking",
  "Cancer Awareness",
  "Collaborative Learning",
];

export default function AboutGame() {
  return (
    <section id="game" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#93d12e" }}>
            About the Game
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-4xl sm:text-5xl font-black text-white leading-none"
              style={{ letterSpacing: "-0.03em" }}
            >
              Where Biology<br />
              Meets Strategy
            </h2>
            <div className="flex flex-wrap gap-2 lg:max-w-sm">
              {pillars.map((p) => (
                <span
                  key={p}
                  className="text-xs font-bold px-3 py-1.5 rounded-md border border-white/20 text-white/70 uppercase tracking-wide"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-[border-color] duration-200 group"
              style={{ background: "#111" }}
            >
              <div
                className="text-4xl font-black mb-4 opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ color: "#93d12e", letterSpacing: "-0.05em" }}
              >
                0{i + 1}
              </div>
              <h3 className="text-base font-bold text-white mb-3">{f.title}</h3>
              <p className="text-sm text-white/75 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-6 rounded-xl border border-white/10 p-8"
          style={{ background: "#111" }}
        >
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md mb-4"
            style={{ background: "#93d12e", color: "#000" }}
          >
            Mission
          </div>
          <p className="text-white/60 text-sm max-w-3xl leading-relaxed">
            Tumor Tactics is more than a classroom tool. It serves as a conversation starter that
            connects students to broader cancer awareness efforts, supporting organizations working
            to advance research, early detection, and patient support.
          </p>
        </div>
      </div>
    </section>
  );
}
