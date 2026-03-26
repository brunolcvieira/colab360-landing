const difs = [
  { icon: "⚙️", title: "Motor de regras por empresa",    text: "Cada empresa configura suas próprias políticas: dias máximos, tipos de CID, exigência de laudo e mais." },
  { icon: "🔼", title: "Escalonamento inteligente",       text: "Casos fora do padrão são sinalizados e enviados automaticamente para o RH com todo o contexto." },
  { icon: "📏", title: "Padronização real de decisões", text: "Acabam as inconsistências entre setores. A regra é única, clara e aplicada da mesma forma para todos." },
  { icon: "🤖", title: "IA como próximo passo",       text: "A estrutura do Colab360 já foi desenhada para evoluir com análise inteligente por IA, sem mudar o fluxo." },
];

const rules = [
  { label: "Regra 01 – Dias máximos sem CRM",      value: "Até 2 dias: aprovação automática" },
  { label: "Regra 02 – Atestado acima de 3 dias",       value: "Escalar para médico do trabalho" },
  { label: "Regra 03 – CID psiquiátrico",          value: "Exigir laudo e encaminhar ao SESMT" },
];

export default function Diferenciais() {
  return (
    <section className="py-20 px-[5%] bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-block bg-blue-900/10 text-[#1B2A4A] border border-blue-900/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5">Diferenciais</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#111E35] tracking-tight mb-3">Por que o Colab360 é <em className="text-[#E8500A] not-italic">diferente</em>?</h2>
          <p className="text-gray-500 leading-relaxed mb-9">Não é mais um software genérico. É um sistema desenhado para a realidade do RH brasileiro.</p>
          <div className="flex flex-col gap-5">
            {difs.map(({ icon, title, text }) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B2A4A] to-[#111E35] flex items-center justify-center text-base flex-shrink-0">{icon}</div>
                <div>
                  <h3 className="text-base font-extrabold text-[#111E35] mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#111E35] to-[#1B2A4A] rounded-2xl p-9 relative overflow-hidden">
          <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest mb-4">Motor de Regras – Exemplo</p>
          {rules.map(({ label, value }) => (
            <div key={label} className="bg-white/[0.07] border border-white/[0.12] rounded-xl p-4 mb-3">
              <p className="text-white/50 text-[11px] font-bold uppercase tracking-wide mb-1.5">{label}</p>
              <p className="text-white text-sm font-semibold">{value}</p>
              <span className="inline-flex items-center gap-1.5 text-green-400 text-xs font-bold mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />Ativa
              </span>
            </div>
          ))}
          <div className="mt-5 bg-[rgba(255,107,43,0.15)] border border-[rgba(255,107,43,0.25)] rounded-xl p-3.5">
            <p className="text-[#FF8C55] text-xs font-bold mb-1">Resultado</p>
            <p className="text-white/70 text-[13px] leading-relaxed">Toda decisão segue exatamente essas regras, automaticamente, sem depender de ninguém.</p>
          </div>
        </div>
      </div>
    </section>
  );
}