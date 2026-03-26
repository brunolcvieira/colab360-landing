const items = [
  { icon: "⚡",        title: "Velocidade real",                      text: "Atestados triados em segundos. Sem fila, sem espera." },
  { icon: "📐", title: "Padronização total",          text: "Mesma regra para todos os colaboradores, em todos os setores. Sem interpretação subjetiva." },
  { icon: "🛡️", title: "Segurança jurídica",   text: "Toda decisão fica registrada com data, hora e critério aplicado. Auditavel a qualquer momento." },
  { icon: "📊", title: "Visibilidade de dados",                 text: "Veja quais áreas têm mais ausências e tome decisões com informação real." },
  { icon: "🤖", title: "Inteligência que aprende suas regras", text: "Uma camada de IA analisa padrões nos atestados com base nas políticas da sua empresa, reduzindo exceções e sinalizando casos que precisam de atenção humana." },
  { icon: "🔧", title: "Configurável para você",      text: "Cada empresa tem suas regras. O Colab360 se adapta ao seu contexto, não o contrário." },
];

export default function Beneficios() {
  return (
    <section className="py-20 px-[5%] bg-gradient-to-br from-[#111E35] to-[#1B2A4A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-[rgba(255,107,43,0.2)] text-[#FF8C55] border border-[rgba(255,107,43,0.3)] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5">Benefícios</span>
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-3">O que muda na prática</h2>
          <p className="text-white/65 leading-relaxed">Desde o primeiro atestado processado, o RH sente a diferença.</p>
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