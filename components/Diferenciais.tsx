const difs = [
  { icon: "\u2699\uFE0F", title: "Motor de regras por empresa",   text: "Cada empresa configura suas proprias politicas: dias maximos, tipos de CID, exigencia de laudo e mais." },
  { icon: "\uD83D\uDD3C", title: "Escalonamento inteligente",      text: "Casos fora do padrao sao sinalizados e enviados automaticamente para o RH com todo o contexto." },
  { icon: "\uD83D\uDCCF", title: "Padronizacao real de decisoes",  text: "Acabam as inconsistencias entre setores. A regra e unica, clara e aplicada da mesma forma para todos." },
  { icon: "\uD83E\uDD16", title: "IA como proximo passo",          text: "A estrutura do Colab360 ja foi desenhada para evoluir com analise inteligente por IA, sem mudar o fluxo." },
];

const rules = [
  { label: "Regra 01 - Dias maximos sem CRM",     value: "Ate 2 dias: aprovacao automatica"    },
  { label: "Regra 02 - Atestado acima de 3 dias", value: "Escalar para medico do trabalho"     },
  { label: "Regra 03 - CID psiquiatrico",         value: "Exigir laudo e encaminhar ao SESMT"  },
];

export default function Diferenciais() {
  return (
    <section className="py-20 px-[5%] bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-block bg-blue-900/10 text-[#1B2A4A] border border-blue-900/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5">Diferenciais</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#111E35] tracking-tight mb-3">Por que o Colab360 e <em className="text-[#E8500A] not-italic">diferente</em>?</h2>
          <p className="text-gray-500 leading-relaxed mb-9">Nao e mais um software generico. E um sistema desenhado para a realidade do RH brasileiro.</p>
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
          <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest mb-4">Motor de Regras - Exemplo</p>
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
            <p className="text-white/70 text-[13px] leading-relaxed">Toda decisao segue exatamente essas regras, automaticamente, sem depender de ninguem.</p>
          </div>
        </div>
      </div>
    </section>
  );
}