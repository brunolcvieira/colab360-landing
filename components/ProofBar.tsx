const items = [
  { icon: "\uD83C\uDFE2", text: "Criado para operacoes com alto volume de colaboradores" },
  { icon: "\u2696\uFE0F",  text: "Decisoes documentadas e auditaveis desde o primeiro dia" },
  { icon: "\uD83D\uDD27", text: "Configuravel para as regras da sua empresa, sem TI" },
  { icon: "\uD83D\uDE80", text: "Pronto para uso em dias, nao meses" },
];

export default function ProofBar() {
  return (
    <div className="bg-white border-b-2 border-gray-200 py-7 px-[5%]">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-12 flex-wrap">
        {items.map(({ icon, text }) => (
          <div key={text} className="flex items-center gap-2.5 text-[#1B2A4A] text-sm font-bold">
            <span className="text-xl">{icon}</span> {text}
          </div>
        ))}
      </div>
    </div>
  );
}