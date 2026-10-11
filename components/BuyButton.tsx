export default function BuyButton() {
  return (
    <div className="border-t border-[#b4a4f0] pt-6">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://square.link/u/5eGF3o7o?src=embed"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#7c3aed] px-6 py-3 text-base font-bold text-white transition-colors hover:bg-[#5b21b6]"
      >
        Buy now — $17.99
      </a>
      <p className="mt-2 text-xs leading-relaxed text-[#6b5f8e]">
        Secure checkout through Square.
      </p>
    </div>
  );
}
