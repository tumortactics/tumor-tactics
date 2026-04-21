const items = [
  "Transforming Cancer Education",
  "Strategic Gameplay",
  "Science Made Fun",
  "Nonprofit Initiative",
  "Classroom-Ready",
  "Grades 6–12",
  "Evidence-Based Learning",
  "Student Empowerment",
];

export default function Marquee() {
  const repeated = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-5"
      style={{ background: "linear-gradient(90deg, #5b21b6 0%, #7c3aed 50%, #a855f7 100%)" }}
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
