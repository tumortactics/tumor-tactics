export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2d1b69] bg-[#1e1b2e]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="font-black text-white text-sm">
            Tumor<span className="text-[#c4b5fd]">Tactics</span>
          </span>
          <span className="text-white/30 text-xs">Nonprofit Educational Initiative</span>
        </div>

        <div className="flex items-center gap-6">
          {["/#story", "/game", "/get-involved", "/#contact"].map((href, i) => (
            <a
              key={href}
              href={href}
              className="text-xs text-white/30 hover:text-white/70 transition-colors font-medium"
            >
              {["Our Story", "The Game", "Get Involved", "Contact"][i]}
            </a>
          ))}
        </div>

        <p className="text-xs text-white/20">&copy; {year} Tumor Tactics. All rights reserved.</p>
      </div>
    </footer>
  );
}
