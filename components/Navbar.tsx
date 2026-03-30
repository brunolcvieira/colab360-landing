import Link from "next/link";
import Image from "next/image";

const WA = "https://wa.me/5511925428849?text=Quero%20ver%20o%20Colab360%20funcionando";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-[5%]">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/logo.png"
            alt="Colab360"
            width={160}
            height={44}
            priority
            style={{ objectFit: "contain" }}
          />
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