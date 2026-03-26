const steps = [
  { icon: "📤", color: "bg-blue-900/10 border-blue-900/30",     title: "Envio",          text: "Colaborador envia o atestado pelo sistema, foto ou PDF" },
  { icon: "🔍", color: "bg-orange-500/10 border-orange-500/30", title: "Análise",    text: "Motor de regras valida automaticamente conforme política da empresa" },
  { icon: "✅",       color: "bg-green-500/10 border-green-500/30",   title: "Decisão",    text: "Aprovação automática ou escalamento para RH com contexto completo" },
  { icon: "🗂", color: "bg-purple-500/10 border-purple-500/30", title: "Histórico",  text: "Registro completo, auditavel e acessível a qualquer momento" },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 px-[5%] bg-[#F4F6FA]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-blue-900/10 text-[#1B2A4A] border border-blue-900/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5">Fluxo do Sistema</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#111E35] tracking-tight mb-3">
            Do envio à decisão, <em className="text-[#E8500A] not-italic">sem fricção</em>
          </h2>
          <p className="text-gray-500 leading-relaxed">Um fluxo claro, rastrecável e automático para cada atestado recebido.</p>
        </div>
        <div className="flex flex-col md:flex-row items-start">
          {steps.map(({ icon, color, title, text }, i) => (
            <div key={title} className="flex-1 text-center px-4 relative">
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute right-0 top-7 text-2xl text-[#E8500A] font-black">{">"}</span>
              )}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 border-2 ${color}`}>{icon}</div>
              <h3 className="text-[15px] font-extrabold text-[#111E35] mb-1.5">{title}</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}