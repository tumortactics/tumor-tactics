export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-center sm:text-left">
          <span className="font-semibold text-slate-100 text-sm">
            Tumor Tactics
          </span>
          <span className="text-slate-700 hidden sm:inline">|</span>
          <span className="text-xs text-slate-500">
            Nonprofit Educational Initiative
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#story" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
            Our Story
          </a>
          <a href="#game" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
            The Game
          </a>
          <a href="#get-involved" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
            Get Involved
          </a>
          <a href="#contact" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
            Contact
          </a>
        </div>

        <p className="text-xs text-slate-500">
          &copy; {year} Tumor Tactics. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
