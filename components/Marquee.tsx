const items = [
  "Cancer Biology Through Play",
  "Strategic Gameplay",
  "Built for Classrooms",
  "Ages 8+",
  "2–4 Players",
  "45–60 Minutes",
  "No Biology Background Needed",
  "Student-Led Nonprofit",
];

export default function Marquee() {
  const repeated = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-5"
      style={{ background: "#7c3aed" }}
    >
      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-8 text-white font-bold text-sm uppercase tracking-widest"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
