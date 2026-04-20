const photos = [
  { gradient: "from-blue-900 to-blue-800" },
  { gradient: "from-violet-900 to-violet-800" },
  { gradient: "from-slate-700 to-slate-600" },
  { gradient: "from-blue-950 to-violet-900" },
  { gradient: "from-indigo-900 to-blue-800" },
  { gradient: "from-violet-900 to-slate-700" },
];

function PhotoPlaceholder({ gradient }: { gradient: string }) {
  return (
    <div className={`relative w-full h-52 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
      <div className="text-center">
        <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center mx-auto mb-2">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-xs text-slate-400 font-medium">Photo Coming Soon</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Gallery
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tumor Tactics in Action
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            From classroom pilots to community events, see how Tumor Tactics is
            making an impact in schools across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-slate-700 shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <PhotoPlaceholder gradient={photo.gradient} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
