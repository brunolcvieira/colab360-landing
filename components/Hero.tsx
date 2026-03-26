const WA = "https://wa.me/5511999999999?text=Quero%20ver%20o%20Colab360%20funcionando";

const mockRows = [
  { init: "MR", name: "Maria Rodrigues", info: "Atestado 2 dias \u00b7 CID J06", status: "Aprovado",   sc: "bg-green-500/20 text-green-400",  av: "from-indigo-500 to-purple-500" },
  { init: "TP", name: "Tiago Pereira",   info: "Atestado 5 dias \u00b7 CID M54", status: "Em an\u00e1lise", sc: "bg-yellow-400/20 text-yellow-300", av: "from-sky-500 to-blue-600" },
  { init: "CS", name: "Carla Souza",     info: "Atestado 1 dia \u00b7 CID R51",  status: "Rejeitado",  sc: "bg-red-500/20 text-red-400",      av: "from-amber-500 to-red-500" },
];

const bars = [40, 60, 45, 80, 55, 90, 70];

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#111E35] via-[#1B2A4A] to-[#1B2A4A] flex items-center pt-[100px] pb-[60px] px-[5%] relative overflow-hidden">
      <div className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(30,77,155,0.35)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[100px] -left-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,107,43,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 bg-[rgba(255,107,43,0.15)] border border-[rgba(255,107,43,0.3)] text-[#FF8C55] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 bg-[#E8500A] rounded-full animate-pulse-dot" />
            Gest\u00e3o de Atestados M\u00e9dicos
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-5">
            Reduza em at\u00e9{ }
            <em className="text-[#E8500A] not-italic">80% o tempo</em>{ }
            do RH com atestados, com decis\u00f5es autom\u00e1ticas e auditaveis.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed mb-9 max-w-xl">
            Automatize a triagem, padronize decis\u00f5es e elimine riscos trabalhistas.
            Sem planilhas, sem achismo, sem retrabalho.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="bg-[#E8500A] hover:bg-[#F06A28] text-white font-extrabold text-base px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 flex items-center gap-2.5">
              \u26a1 Quero ver funcionando
            </a>
            <a href="#como-funciona"
              className="bg-transparent text-white font-bold text-[15px] px-7 py-4 rounded-xl border-2 border-white/25 hover:border-white hover:bg-white/[0.08] transition-all">
              Como funciona {>}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {["Sem implementa\u00e7\u00e3o complexa", "Regras por empresa", "Hist\u00f3rico auditavel"].map(t => (
              <span key={t} className="bg-white/[0.08] border border-white/[0.12] text-white/70 px-3 py-1 rounded-full text-xs font-semibold">{t}</span>
            ))}
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="absolute -top-5 -right-5 bg-gradient-to-br from-[#E8500A] to-[#F06A28] text-white px-4 py-2.5 rounded-xl text-xs font-extrabold shadow-[0_8px_24px_rgba(255,107,43,0.4)] animate-float z-10">
            \u26a1 3x mais r\u00e1pido
          </div>
          <div className="bg-white/[0.06] border border-white/[0.12] rounded-2xl p-6 backdrop-blur-md">
            <div className="flex items-center justify-between mb-5">
              <span className="text-white font-bold text-[15px]">Painel de Atestados</span>
              <span className="text-white/40 text-xs">Hoje</span>
            </div>
            <div className="flex flex-col gap-2.5">
              {mockRows.map(r => (
                <div key={r.init} className="flex items-center justify-between bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className={\w-8 h-8 rounded-full bg-gradient-to-br \ flex items-center justify-center text-white font-extrabold text-xs\}>{r.init}</div>
                    <div>
                      <div className="text-white/90 text-[13px] font-semibold">{r.name}</div>
                      <div className="text-white/40 text-[11px]">{r.info}</div>
                    </div>
                  </div>
                  <span className={\\ px-2.5 py-1 rounded-full text-[11px] font-bold\}>{r.status}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-white/[0.04] rounded-xl p-3.5">
              <div className="text-white/50 text-[11px] font-bold uppercase tracking-wide mb-2.5">Atestados este m\u00eas</div>
              <div className="flex items-end gap-1.5 h-12">
                {bars.map((h, i) => (
                  <div key={i} style={{ height: \\%\ }} className={\lex-1 rounded-t \ transition-all\} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}