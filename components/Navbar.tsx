import Link from "next/link";

const WA = "https://wa.me/5511999999999?text=Quero%20ver%20o%20Colab360%20funcionando";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-white/[0.08] px-[5%]">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <svg width="160" height="44" viewBox="0 0 520 140" fill="none">
            <path d="M68 20A52 52 0 0016 72" stroke="#1B2A4A" strokeWidth="11" strokeLinecap="round"/>
            <path d="M16 80A52 52 0 0068 120" stroke="#1B2A4A" strokeWidth="11" strokeLinecap="round"/>
            <path d="M76 120A52 52 0 00115 76" stroke="#1B2A4A" strokeWidth="11" strokeLinecap="round"/>
            <circle cx="106" cy="24" r="10" fill="#E8500A"/>
            <path d="M96 34Q106 52 116 34" fill="#E8500A"/>
            <circle cx="18" cy="52" r="8.5" fill="#1B2A4A"/>
            <path d="M10 61Q18 76 26 61" fill="#1B2A4A"/>
            <circle cx="68" cy="122" r="8.5" fill="#1B2A4A"/>
            <path d="M60 131Q68 146 76 131" fill="#1B2A4A"/>
            <text x="138" y="96" fontFamily="Segoe UI,Arial,sans-serif" fontWeight="800" fontSize="66" fill="#1B2A4A" letterSpacing="-1">Colab</text>
            <text x="342" y="96" fontFamily="Segoe UI,Arial,sans-serif" fontWeight="800" fontSize="66" fill="#E8500A" letterSpacing="-1">360</text>
          </svg>
        </Link>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#E8500A] hover:bg-[#F06A28] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-all hover:-translate-y-px"
        >
          Quero ver funcionando
        </a>
      </div>
    </nav>
  );
}