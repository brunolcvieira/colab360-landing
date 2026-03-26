const steps = [
  { n: 1, title: "Colaborador envia o atestado",         text: "Pelo celular ou computador, o colaborador anexa o documento em segundos. Sem burocracia, sem ir at\u00e9 o RH." },
  { n: 2, title: "Sistema aplica as regras da empresa",   text: "O Colab360 valida automaticamente com base nas regras que voc\u00ea configurou: prazo, tipo de CID, dias permitidos e mais." },
  { n: 3, title: "Decis\u00e3o autom\u00e1tica com hist\u00f3rico", text: "Aprovado, rejeitado ou escalado para an\u00e1lise humana. Tudo registrado e dispon\u00edvel em tempo real." },
];

export default function Solucao() {
  return (
    <section id="solucao" className="py-20 px-[5%] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-blue-900/10 text-[#1B2A4A] border border-blue-900/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5">A Solu\u00e7\u00e3o</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#111E35] tracking-tight mb-3">Colab360 resolve isso em <em className="text-[#E8500A] not-italic">3 passos</em></h2>
          <p className="text-gray-500 leading-relaxed">Simples para o colaborador. Poderoso para o RH. Configur\u00e1vel para a sua empresa.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ n, title, text }) => (
            <div key={n} className="text-center px-6 py-9">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1B2A4A] to-[#111E35] rounded-full flex items-center justify-center text-white text-xl font-black mx-auto mb-5">{n}</div>
              <h3 className="text-lg font-extrabold text-[#111E35] mb-2.5">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}