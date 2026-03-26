const pains = [
  { icon: "\uD83D\uDCCB", title: "Processos manuais e demorados",       text: "Atestados chegam por WhatsApp, e-mail ou impresso e alguem precisa registrar tudo manualmente. Isso consome horas que o RH nao tem." },
  { icon: "\u2696\uFE0F", title: "Decisoes inconsistentes",             text: "Cada gestor aprova de um jeito. Um atestado identico pode ser aceito por um setor e recusado por outro. Isso gera conflito e risco trabalhista." },
  { icon: "\uD83D\uDCC1", title: "Falta de historico e rastreabilidade", text: "Sem sistema, nao ha historico confiavel para auditorias, eSocial ou decisoes estrategicas." },
  { icon: "\uD83D\uDD01", title: "Retrabalho constante",                text: "Informacoes incompletas, documentos ilegÃ­veis, regras que ninguem conhece. O RH retorna o atestado e o ciclo se repete." },
  { icon: "\uD83D\uDEA8", title: "Risco de passivo trabalhista",        text: "Sem criterios claros e documentados, qualquer decisao contestada vira problema juridico." },
  { icon: "\uD83D\uDE23", title: "RH sobrecarregado",                   text: "O time de RH virou triador de papel. Em vez de trabalhar estrategia e gente, fica resolvendo pendencia de atestado." },
];

export default function Problema() {
  return (
    <section className="bg-[#F4F6FA] py-20 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-blue-900/10 text-[#1B2A4A] border border-blue-900/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5">O Problema</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#111E35] tracking-tight mb-3">Seu RH ainda perde tempo assim?</h2>
          <p className="text-gray-500 leading-relaxed">Empresas com muitos colaboradores enfrentam os mesmos problemas todos os meses e continuam resolvendo na base do improviso.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map(({ icon, title, text }) => (
            <div key={title} className="bg-white border border-gray-200 rounded-2xl p-7 relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E8500A] to-[#F06A28]" />
              <div className="text-3xl mb-3.5">{icon}</div>
              <h3 className="text-base font-extrabold text-[#111E35] mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
            </div>
          ))}
          <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-2xl p-7 relative overflow-hidden sm:col-span-2 lg:col-span-3 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E8500A] to-[#F06A28]" />
            <div className="text-3xl mb-3.5">{"\uD83D\uDCB8"}</div>
            <h3 className="text-base font-extrabold text-[#111E35] mb-2">Quanto isso custa para a sua empresa?</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Cada hora do RH gasta com triagem manual e dinheiro jogado fora. Some ao risco de uma decisao inconsistente virar passivo trabalhista e o custo de nao ter um processo fica evidente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}