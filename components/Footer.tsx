import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2d1b69] bg-[#1e1b2e]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/top_left_logo-removebg-preview.png"
            alt="Tumor Tactics"
            width={120}
            height={36}
            className="h-8 w-auto"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {["/the-problem", "/#story", "/game", "/get-involved", "/#contact"].map((href, i) => (
            <a
              key={href}
              href={href}
              className="text-xs text-white/30 hover:text-white/70 transition-colors font-medium"
            >
              {["The Problem", "Our Story", "The Game", "Get Involved", "Contact"][i]}
            </a>
          ))}
        </div>

        <p className="text-xs text-white/20 shrink-0">&copy; {year} Tumor Tactics</p>
      </div>
    </footer>
  );
}
