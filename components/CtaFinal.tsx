const WA = "https://wa.me/5511925428849?text=Quero%20automatizar%20meus%20atestados%20com%20o%20Colab360";

export default function CtaFinal() {
  return (
    <section className="py-24 px-[5%] bg-gradient-to-br from-[#111E35] to-[#1B2A4A] text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,107,43,0.1)_0%,transparent_60%)] pointer-events-none" />
      <div className="relative max-w-2xl mx-auto">
        <div className="text-5xl mb-4">⚡</div>
        <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
          Seu RH merece trabalhar em <em className="text-[#E8500A] not-italic">pessoas</em>, não em papel.
        </h2>
        <p className="text-white/65 text-lg leading-relaxed mb-10">
          Veja em 20 minutos como o Colab360 elimina o trabalho manual, padroniza suas decisões e protege sua empresa de riscos trabalhistas.
        </p>
        <a href={WA} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#E8500A] hover:bg-[#F06A28] text-white font-extrabold text-lg px-10 py-5 rounded-xl transition-all hover:-translate-y-0.5">
          🚀 Quero automatizar meus atestados
        </a>
        <p className="mt-5 text-white/35 text-sm">Demo gratuita · Sem contrato · Configurado para o seu contexto</p>
      </div>
    </section>
  );
}