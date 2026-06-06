const items = [
  "Transforming Cancer Education",
  "Strategic Gameplay",
  "Science Made Fun",
  "Nonprofit Initiative",
  "Classroom-Ready",
  "Ages 8+",
  "Evidence-Based Learning",
  "Student Empowerment",
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
