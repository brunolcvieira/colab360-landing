const items = [
  { icon: "\u26A1",        title: "Velocidade real",                      text: "Atestados triados em segundos. Sem fila, sem espera." },
  { icon: "\uD83D\uDCD0", title: "Padroniza\u00e7\u00e3o total",          text: "Mesma regra para todos os colaboradores, em todos os setores. Sem interpreta\u00e7\u00e3o subjetiva." },
  { icon: "\uD83D\uDEE1\uFE0F", title: "Seguran\u00e7a jur\u00eddica",   text: "Toda decis\u00e3o fica registrada com data, hora e crit\u00e9rio aplicado. Auditavel a qualquer momento." },
  { icon: "\uD83D\uDCCA", title: "Visibilidade de dados",                 text: "Veja quais \u00e1reas t\u00eam mais aus\u00eancias e tome decis\u00f5es com informa\u00e7\u00e3o real." },
  { icon: "\uD83E\uDD16", title: "Intelig\u00eancia que aprende suas regras", text: "Uma camada de IA analisa padr\u00f5es nos atestados com base nas pol\u00edticas da sua empresa, reduzindo exce\u00e7\u00f5es e sinalizando casos que precisam de aten\u00e7\u00e3o humana." },
  { icon: "\uD83D\uDD27", title: "Configur\u00e1vel para voc\u00ea",      text: "Cada empresa tem suas regras. O Colab360 se adapta ao seu contexto, n\u00e3o o contr\u00e1rio." },
];

export default function Beneficios() {
  return (
    <section className="py-20 px-[5%] bg-gradient-to-br from-[#111E35] to-[#1B2A4A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-[rgba(255,107,43,0.2)] text-[#FF8C55] border border-[rgba(255,107,43,0.3)] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5">Benef\u00edcios</span>
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-3">O que muda na pr\u00e1tica</h2>
          <p className="text-white/65 leading-relaxed">Desde o primeiro atestado processado, o RH sente a diferen\u00e7a.</p>
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