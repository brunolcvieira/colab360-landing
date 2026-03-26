const items = [
  { icon: "\u26A1",        title: "Velocidade real",                     text: "Atestados triados em segundos. Sem fila, sem espera." },
  { icon: "\uD83D\uDCD0", title: "Padronizacao total",                  text: "Mesma regra para todos os colaboradores, em todos os setores. Sem interpretacao subjetiva." },
  { icon: "\uD83D\uDEE1\uFE0F", title: "Seguranca juridica",            text: "Toda decisao fica registrada com data, hora e criterio aplicado. Auditavel a qualquer momento." },
  { icon: "\uD83D\uDCCA", title: "Visibilidade de dados",               text: "Veja quais areas tem mais ausencias e tome decisoes com informacao real." },
  { icon: "\uD83E\uDD16", title: "Inteligencia que aprende suas regras", text: "Uma camada de IA analisa padroes nos atestados com base nas politicas da sua empresa, reduzindo excecoes e sinalizando casos que precisam de atencao humana." },
  { icon: "\uD83D\uDD27", title: "Configuravel para voce",              text: "Cada empresa tem suas regras. O Colab360 se adapta ao seu contexto, nao o contrario." },
];

export default function Beneficios() {
  return (
    <section className="py-20 px-[5%] bg-gradient-to-br from-[#111E35] to-[#1B2A4A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-[rgba(255,107,43,0.2)] text-[#FF8C55] border border-[rgba(255,107,43,0.3)] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5">Beneficios</span>
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-3">O que muda na pratica</h2>
          <p className="text-white/65 leading-relaxed">Desde o primeiro atestado processado, o RH sente a diferenca.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon, title, text }) => (
            <div key={title} className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3.5">{icon}</div>
              <h3 className="text-white font-extrabold text-base mb-2">{title}</h3>
              <p className="text-white/60 text-[13px] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}