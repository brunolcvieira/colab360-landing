# ============================================
# Colab360 - Corrige portugues BR em todos os arquivos
# Rode de dentro da pasta colab360-landing
# Execute: .\fix-ptbr.ps1
# ============================================

function Write-File($path, $content) {
    $utf8NoBom = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllText(
        (Join-Path (Get-Location) $path),
        $content,
        $utf8NoBom
    )
    Write-Host "  OK $path" -ForegroundColor Green
}

# ── app/layout.tsx ──
Write-File "app\layout.tsx" "import type { Metadata } from `"next`";
import `"./globals.css`";

export const metadata: Metadata = {
  title: `"Colab360 \u2013 Gest\u00e3o Inteligente de Atestados M\u00e9dicos`",
  description: `"Automatize a triagem de atestados m\u00e9dicos, padronize decis\u00f5es e elimine riscos trabalhistas. Sem planilhas, sem achismo.`",
  openGraph: {
    title: `"Colab360 \u2013 Gest\u00e3o Inteligente de Atestados M\u00e9dicos`",
    description: `"Reduza em at\u00e9 80% o tempo do RH com atestados.`",
    url: `"https://colab360.com.br`",
    siteName: `"Colab360`",
    locale: `"pt_BR`",
    type: `"website`",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang=`"pt-BR`">
      <body className=`"antialiased bg-white text-gray-800 overflow-x-hidden`">
        {children}
      </body>
    </html>
  );
}"

# ── components/Hero.tsx ──
Write-File "components\Hero.tsx" "const WA = `"https://wa.me/5511999999999?text=Quero%20ver%20o%20Colab360%20funcionando`";

const mockRows = [
  { init: `"MR`", name: `"Maria Rodrigues`", info: `"Atestado 2 dias \u00b7 CID J06`", status: `"Aprovado`",   sc: `"bg-green-500/20 text-green-400`",  av: `"from-indigo-500 to-purple-500`" },
  { init: `"TP`", name: `"Tiago Pereira`",   info: `"Atestado 5 dias \u00b7 CID M54`", status: `"Em an\u00e1lise`", sc: `"bg-yellow-400/20 text-yellow-300`", av: `"from-sky-500 to-blue-600`" },
  { init: `"CS`", name: `"Carla Souza`",     info: `"Atestado 1 dia \u00b7 CID R51`",  status: `"Rejeitado`",  sc: `"bg-red-500/20 text-red-400`",      av: `"from-amber-500 to-red-500`" },
];

const bars = [40, 60, 45, 80, 55, 90, 70];

export default function Hero() {
  return (
    <section className=`"min-h-screen bg-gradient-to-br from-[#111E35] via-[#1B2A4A] to-[#1B2A4A] flex items-center pt-[100px] pb-[60px] px-[5%] relative overflow-hidden`">
      <div className=`"absolute -top-[200px] -right-[200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(30,77,155,0.35)_0%,transparent_70%)] pointer-events-none`" />
      <div className=`"absolute -bottom-[100px] -left-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,107,43,0.12)_0%,transparent_70%)] pointer-events-none`" />
      <div className=`"max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full`">
        <div>
          <div className=`"inline-flex items-center gap-2 bg-[rgba(255,107,43,0.15)] border border-[rgba(255,107,43,0.3)] text-[#FF8C55] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6`">
            <span className=`"w-1.5 h-1.5 bg-[#E8500A] rounded-full animate-pulse-dot`" />
            Gest\u00e3o de Atestados M\u00e9dicos
          </div>
          <h1 className=`"text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-5`">
            Reduza em at\u00e9{` `}
            <em className=`"text-[#E8500A] not-italic`">80% o tempo</em>{` `}
            do RH com atestados, com decis\u00f5es autom\u00e1ticas e auditaveis.
          </h1>
          <p className=`"text-lg text-white/70 leading-relaxed mb-9 max-w-xl`">
            Automatize a triagem, padronize decis\u00f5es e elimine riscos trabalhistas.
            Sem planilhas, sem achismo, sem retrabalho.
          </p>
          <div className=`"flex flex-wrap gap-3.5`">
            <a href={WA} target=`"_blank`" rel=`"noopener noreferrer`"
              className=`"bg-[#E8500A] hover:bg-[#F06A28] text-white font-extrabold text-base px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 flex items-center gap-2.5`">
              \u26a1 Quero ver funcionando
            </a>
            <a href=`"#como-funciona`"
              className=`"bg-transparent text-white font-bold text-[15px] px-7 py-4 rounded-xl border-2 border-white/25 hover:border-white hover:bg-white/[0.08] transition-all`">
              Como funciona {`>`}
            </a>
          </div>
          <div className=`"mt-10 flex flex-wrap gap-2.5`">
            {[`"Sem implementa\u00e7\u00e3o complexa`", `"Regras por empresa`", `"Hist\u00f3rico auditavel`"].map(t => (
              <span key={t} className=`"bg-white/[0.08] border border-white/[0.12] text-white/70 px-3 py-1 rounded-full text-xs font-semibold`">{t}</span>
            ))}
          </div>
        </div>
        <div className=`"hidden lg:block relative`">
          <div className=`"absolute -top-5 -right-5 bg-gradient-to-br from-[#E8500A] to-[#F06A28] text-white px-4 py-2.5 rounded-xl text-xs font-extrabold shadow-[0_8px_24px_rgba(255,107,43,0.4)] animate-float z-10`">
            \u26a1 3x mais r\u00e1pido
          </div>
          <div className=`"bg-white/[0.06] border border-white/[0.12] rounded-2xl p-6 backdrop-blur-md`">
            <div className=`"flex items-center justify-between mb-5`">
              <span className=`"text-white font-bold text-[15px]`">Painel de Atestados</span>
              <span className=`"text-white/40 text-xs`">Hoje</span>
            </div>
            <div className=`"flex flex-col gap-2.5`">
              {mockRows.map(r => (
                <div key={r.init} className=`"flex items-center justify-between bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3`">
                  <div className=`"flex items-center gap-3`">
                    <div className={\`w-8 h-8 rounded-full bg-gradient-to-br \${r.av} flex items-center justify-center text-white font-extrabold text-xs\`}>{r.init}</div>
                    <div>
                      <div className=`"text-white/90 text-[13px] font-semibold`">{r.name}</div>
                      <div className=`"text-white/40 text-[11px]`">{r.info}</div>
                    </div>
                  </div>
                  <span className={\`\${r.sc} px-2.5 py-1 rounded-full text-[11px] font-bold\`}>{r.status}</span>
                </div>
              ))}
            </div>
            <div className=`"mt-5 bg-white/[0.04] rounded-xl p-3.5`">
              <div className=`"text-white/50 text-[11px] font-bold uppercase tracking-wide mb-2.5`">Atestados este m\u00eas</div>
              <div className=`"flex items-end gap-1.5 h-12`">
                {bars.map((h, i) => (
                  <div key={i} style={{ height: \`\${h}%\` }} className={\`flex-1 rounded-t \${i === 3 || i === 5 ? `"bg-[#E8500A]`" : `"bg-[#1B2A4A]`"} transition-all\`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}"

# ── components/ProofBar.tsx ──
Write-File "components\ProofBar.tsx" "const items = [
  { icon: `"\uD83C\uDFE2`", text: `"Criado para opera\u00e7\u00f5es com alto volume de colaboradores`" },
  { icon: `"\u2696\uFE0F`", text: `"Decis\u00f5es documentadas e auditaveis desde o primeiro dia`" },
  { icon: `"\uD83D\uDD27`", text: `"Configur\u00e1vel para as regras da sua empresa, sem TI`" },
  { icon: `"\uD83D\uDE80`", text: `"Pronto para uso em dias, n\u00e3o meses`" },
];

export default function ProofBar() {
  return (
    <div className=`"bg-white border-b-2 border-gray-200 py-7 px-[5%]`">
      <div className=`"max-w-6xl mx-auto flex items-center justify-center gap-12 flex-wrap`">
        {items.map(({ icon, text }) => (
          <div key={text} className=`"flex items-center gap-2.5 text-[#1B2A4A] text-sm font-bold`">
            <span className=`"text-xl`">{icon}</span> {text}
          </div>
        ))}
      </div>
    </div>
  );
}"

# ── components/StatsBar.tsx ──
Write-File "components\StatsBar.tsx" "const stats = [
  { num: `"80%`",  label: `"Menos tempo manual no RH`" },
  { num: `"100%`", label: `"Decis\u00f5es padronizadas`" },
  { num: `"0`",    label: `"Atestados perdidos`" },
  { num: `"24h`",  label: `"Hist\u00f3rico completo dispon\u00edvel`" },
];

export default function StatsBar() {
  return (
    <div className=`"bg-white border-b border-gray-200 py-6 px-[5%]`">
      <div className=`"max-w-6xl mx-auto flex justify-center gap-16 flex-wrap`">
        {stats.map(({ num, label }) => (
          <div key={label} className=`"text-center`">
            <div className=`"text-3xl font-black text-[#E8500A] tracking-tight`">{num}</div>
            <div className=`"text-xs text-gray-500 font-semibold uppercase tracking-wide mt-1`">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}"

# ── components/Problema.tsx ──
Write-File "components\Problema.tsx" "const pains = [
  { icon: `"\uD83D\uDCCB`", title: `"Processos manuais e demorados`",        text: `"Atestados chegam por WhatsApp, e-mail ou impresso e algu\u00e9m precisa registrar tudo manualmente. Isso consome horas que o RH n\u00e3o tem.`" },
  { icon: `"\u2696\uFE0F`", title: `"Decis\u00f5es inconsistentes`",          text: `"Cada gestor aprova de um jeito. Um atestado id\u00eantico pode ser aceito por um setor e recusado por outro. Isso gera conflito e risco trabalhista.`" },
  { icon: `"\uD83D\uDCC1`", title: `"Falta de hist\u00f3rico e rastreabilidade`", text: `"Sem sistema, n\u00e3o h\u00e1 hist\u00f3rico confi\u00e1vel para auditorias, eSocial ou decis\u00f5es estrat\u00e9gicas.`" },
  { icon: `"\uD83D\uDD01`", title: `"Retrabalho constante`",                  text: `"Informa\u00e7\u00f5es incompletas, documentos ileg\u00edveis, regras que ningu\u00e9m conhece. O RH retorna o atestado e o ciclo se repete.`" },
  { icon: `"\uD83D\uDEA8`", title: `"Risco de passivo trabalhista`",          text: `"Sem crit\u00e9rios claros e documentados, qualquer decis\u00e3o contestada vira problema jur\u00eddico.`" },
  { icon: `"\uD83D\uDE23`", title: `"RH sobrecarregado`",                    text: `"O time de RH virou triador de papel. Em vez de trabalhar estrat\u00e9gia e gente, fica resolvendo pend\u00eancia de atestado.`" },
];

export default function Problema() {
  return (
    <section className=`"bg-[#F4F6FA] py-20 px-[5%]`">
      <div className=`"max-w-6xl mx-auto`">
        <div className=`"text-center max-w-2xl mx-auto mb-12`">
          <span className=`"inline-block bg-blue-900/10 text-[#1B2A4A] border border-blue-900/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5`">O Problema</span>
          <h2 className=`"text-3xl lg:text-4xl font-black text-[#111E35] tracking-tight mb-3`">Seu RH ainda perde tempo assim?</h2>
          <p className=`"text-gray-500 leading-relaxed`">Empresas com muitos colaboradores enfrentam os mesmos problemas todos os meses e continuam resolvendo na base do improviso.</p>
        </div>
        <div className=`"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`">
          {pains.map(({ icon, title, text }) => (
            <div key={title} className=`"bg-white border border-gray-200 rounded-2xl p-7 relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all`">
              <div className=`"absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E8500A] to-[#F06A28]`" />
              <div className=`"text-3xl mb-3.5`">{icon}</div>
              <h3 className=`"text-base font-extrabold text-[#111E35] mb-2`">{title}</h3>
              <p className=`"text-sm text-gray-500 leading-relaxed`">{text}</p>
            </div>
          ))}
          <div className=`"bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-2xl p-7 relative overflow-hidden sm:col-span-2 lg:col-span-3 hover:-translate-y-1 hover:shadow-xl transition-all`">
            <div className=`"absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E8500A] to-[#F06A28]`" />
            <div className=`"text-3xl mb-3.5`">\uD83D\uDCB8</div>
            <h3 className=`"text-base font-extrabold text-[#111E35] mb-2`">Quanto isso custa para a sua empresa?</h3>
            <p className=`"text-sm text-gray-500 leading-relaxed`">Cada hora do RH gasta com triagem manual \u00e9 dinheiro jogado fora. Some ao risco de uma decis\u00e3o inconsistente virar passivo trabalhista e o custo de n\u00e3o ter um processo fica evidente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}"

# ── components/Solucao.tsx ──
Write-File "components\Solucao.tsx" "const steps = [
  { n: 1, title: `"Colaborador envia o atestado`",         text: `"Pelo celular ou computador, o colaborador anexa o documento em segundos. Sem burocracia, sem ir at\u00e9 o RH.`" },
  { n: 2, title: `"Sistema aplica as regras da empresa`",   text: `"O Colab360 valida automaticamente com base nas regras que voc\u00ea configurou: prazo, tipo de CID, dias permitidos e mais.`" },
  { n: 3, title: `"Decis\u00e3o autom\u00e1tica com hist\u00f3rico`", text: `"Aprovado, rejeitado ou escalado para an\u00e1lise humana. Tudo registrado e dispon\u00edvel em tempo real.`" },
];

export default function Solucao() {
  return (
    <section id=`"solucao`" className=`"py-20 px-[5%] bg-white`">
      <div className=`"max-w-6xl mx-auto`">
        <div className=`"text-center max-w-2xl mx-auto mb-12`">
          <span className=`"inline-block bg-blue-900/10 text-[#1B2A4A] border border-blue-900/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5`">A Solu\u00e7\u00e3o</span>
          <h2 className=`"text-3xl lg:text-4xl font-black text-[#111E35] tracking-tight mb-3`">Colab360 resolve isso em <em className=`"text-[#E8500A] not-italic`">3 passos</em></h2>
          <p className=`"text-gray-500 leading-relaxed`">Simples para o colaborador. Poderoso para o RH. Configur\u00e1vel para a sua empresa.</p>
        </div>
        <div className=`"grid grid-cols-1 md:grid-cols-3 gap-8`">
          {steps.map(({ n, title, text }) => (
            <div key={n} className=`"text-center px-6 py-9`">
              <div className=`"w-14 h-14 bg-gradient-to-br from-[#1B2A4A] to-[#111E35] rounded-full flex items-center justify-center text-white text-xl font-black mx-auto mb-5`">{n}</div>
              <h3 className=`"text-lg font-extrabold text-[#111E35] mb-2.5`">{title}</h3>
              <p className=`"text-sm text-gray-500 leading-relaxed`">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}"

# ── components/Beneficios.tsx ──
Write-File "components\Beneficios.tsx" "const items = [
  { icon: `"\u26A1`",        title: `"Velocidade real`",                      text: `"Atestados triados em segundos. Sem fila, sem espera.`" },
  { icon: `"\uD83D\uDCD0`", title: `"Padroniza\u00e7\u00e3o total`",          text: `"Mesma regra para todos os colaboradores, em todos os setores. Sem interpreta\u00e7\u00e3o subjetiva.`" },
  { icon: `"\uD83D\uDEE1\uFE0F`", title: `"Seguran\u00e7a jur\u00eddica`",   text: `"Toda decis\u00e3o fica registrada com data, hora e crit\u00e9rio aplicado. Auditavel a qualquer momento.`" },
  { icon: `"\uD83D\uDCCA`", title: `"Visibilidade de dados`",                 text: `"Veja quais \u00e1reas t\u00eam mais aus\u00eancias e tome decis\u00f5es com informa\u00e7\u00e3o real.`" },
  { icon: `"\uD83E\uDD16`", title: `"Intelig\u00eancia que aprende suas regras`", text: `"Uma camada de IA analisa padr\u00f5es nos atestados com base nas pol\u00edticas da sua empresa, reduzindo exce\u00e7\u00f5es e sinalizando casos que precisam de aten\u00e7\u00e3o humana.`" },
  { icon: `"\uD83D\uDD27`", title: `"Configur\u00e1vel para voc\u00ea`",      text: `"Cada empresa tem suas regras. O Colab360 se adapta ao seu contexto, n\u00e3o o contr\u00e1rio.`" },
];

export default function Beneficios() {
  return (
    <section className=`"py-20 px-[5%] bg-gradient-to-br from-[#111E35] to-[#1B2A4A]`">
      <div className=`"max-w-6xl mx-auto`">
        <div className=`"text-center max-w-2xl mx-auto mb-12`">
          <span className=`"inline-block bg-[rgba(255,107,43,0.2)] text-[#FF8C55] border border-[rgba(255,107,43,0.3)] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5`">Benef\u00edcios</span>
          <h2 className=`"text-3xl lg:text-4xl font-black text-white tracking-tight mb-3`">O que muda na pr\u00e1tica</h2>
          <p className=`"text-white/65 leading-relaxed`">Desde o primeiro atestado processado, o RH sente a diferen\u00e7a.</p>
        </div>
        <div className=`"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`">
          {items.map(({ icon, title, text }) => (
            <div key={title} className=`"bg-white/[0.06] border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all`">
              <div className=`"text-3xl mb-3.5`">{icon}</div>
              <h3 className=`"text-white font-extrabold text-base mb-2`">{title}</h3>
              <p className=`"text-white/60 text-[13px] leading-relaxed`">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}"

# ── components/ComoFunciona.tsx ──
Write-File "components\ComoFunciona.tsx" "const steps = [
  { icon: `"\uD83D\uDCE4`", color: `"bg-blue-900/10 border-blue-900/30`",     title: `"Envio`",      text: `"Colaborador envia o atestado pelo sistema, foto ou PDF`" },
  { icon: `"\uD83D\uDD0D`", color: `"bg-orange-500/10 border-orange-500/30`", title: `"An\u00e1lise`", text: `"Motor de regras valida automaticamente conforme pol\u00edtica da empresa`" },
  { icon: `"\u2705`",       color: `"bg-green-500/10 border-green-500/30`",   title: `"Decis\u00e3o`", text: `"Aprova\u00e7\u00e3o autom\u00e1tica ou escalamento para RH com contexto completo`" },
  { icon: `"\uD83D\uDDC2\uFE0F`", color: `"bg-purple-500/10 border-purple-500/30`", title: `"Hist\u00f3rico`", text: `"Registro completo, auditavel e acess\u00edvel a qualquer momento`" },
];

export default function ComoFunciona() {
  return (
    <section id=`"como-funciona`" className=`"py-20 px-[5%] bg-[#F4F6FA]`">
      <div className=`"max-w-6xl mx-auto`">
        <div className=`"text-center max-w-2xl mx-auto mb-12`">
          <span className=`"inline-block bg-blue-900/10 text-[#1B2A4A] border border-blue-900/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5`">Fluxo do Sistema</span>
          <h2 className=`"text-3xl lg:text-4xl font-black text-[#111E35] tracking-tight mb-3`">Do envio \u00e0 decis\u00e3o, <em className=`"text-[#E8500A] not-italic`">sem fric\u00e7\u00e3o</em></h2>
          <p className=`"text-gray-500 leading-relaxed`">Um fluxo claro, rastrec\u00e1vel e autom\u00e1tico para cada atestado recebido.</p>
        </div>
        <div className=`"flex flex-col md:flex-row items-start`">
          {steps.map(({ icon, color, title, text }, i) => (
            <div key={title} className=`"flex-1 text-center px-4 relative`">
              {i < steps.length - 1 && (
                <span className=`"hidden md:block absolute right-0 top-7 text-2xl text-[#E8500A] font-black`">{\`>\`}</span>
              )}
              <div className={\`w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 border-2 \${color}\`}>{icon}</div>
              <h3 className=`"text-[15px] font-extrabold text-[#111E35] mb-1.5`">{title}</h3>
              <p className=`"text-[13px] text-gray-500 leading-relaxed`">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}"

# ── components/Diferenciais.tsx ──
Write-File "components\Diferenciais.tsx" "const difs = [
  { icon: `"\u2699\uFE0F`", title: `"Motor de regras por empresa`",    text: `"Cada empresa configura suas pr\u00f3prias pol\u00edticas: dias m\u00e1ximos, tipos de CID, exig\u00eancia de laudo e mais.`" },
  { icon: `"\uD83D\uDD3C`", title: `"Escalonamento inteligente`",       text: `"Casos fora do padr\u00e3o s\u00e3o sinalizados e enviados automaticamente para o RH com todo o contexto.`" },
  { icon: `"\uD83D\uDCCF`", title: `"Padroniza\u00e7\u00e3o real de decis\u00f5es`", text: `"Acabam as inconsist\u00eancias entre setores. A regra \u00e9 \u00fanica, clara e aplicada da mesma forma para todos.`" },
  { icon: `"\uD83E\uDD16`", title: `"IA como pr\u00f3ximo passo`",       text: `"A estrutura do Colab360 j\u00e1 foi desenhada para evoluir com an\u00e1lise inteligente por IA, sem mudar o fluxo.`" },
];

const rules = [
  { label: `"Regra 01 \u2013 Dias m\u00e1ximos sem CRM`",      value: `"At\u00e9 2 dias: aprova\u00e7\u00e3o autom\u00e1tica`" },
  { label: `"Regra 02 \u2013 Atestado acima de 3 dias`",       value: `"Escalar para m\u00e9dico do trabalho`" },
  { label: `"Regra 03 \u2013 CID psiqui\u00e1trico`",          value: `"Exigir laudo e encaminhar ao SESMT`" },
];

export default function Diferenciais() {
  return (
    <section className=`"py-20 px-[5%] bg-white`">
      <div className=`"max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center`">
        <div>
          <span className=`"inline-block bg-blue-900/10 text-[#1B2A4A] border border-blue-900/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5`">Diferenciais</span>
          <h2 className=`"text-3xl lg:text-4xl font-black text-[#111E35] tracking-tight mb-3`">Por que o Colab360 \u00e9 <em className=`"text-[#E8500A] not-italic`">diferente</em>?</h2>
          <p className=`"text-gray-500 leading-relaxed mb-9`">N\u00e3o \u00e9 mais um software gen\u00e9rico. \u00c9 um sistema desenhado para a realidade do RH brasileiro.</p>
          <div className=`"flex flex-col gap-5`">
            {difs.map(({ icon, title, text }) => (
              <div key={title} className=`"flex gap-4 items-start`">
                <div className=`"w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B2A4A] to-[#111E35] flex items-center justify-center text-base flex-shrink-0`">{icon}</div>
                <div>
                  <h3 className=`"text-base font-extrabold text-[#111E35] mb-1`">{title}</h3>
                  <p className=`"text-sm text-gray-500 leading-relaxed`">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=`"bg-gradient-to-br from-[#111E35] to-[#1B2A4A] rounded-2xl p-9 relative overflow-hidden`">
          <p className=`"text-white/50 text-[11px] font-bold uppercase tracking-widest mb-4`">Motor de Regras \u2013 Exemplo</p>
          {rules.map(({ label, value }) => (
            <div key={label} className=`"bg-white/[0.07] border border-white/[0.12] rounded-xl p-4 mb-3`">
              <p className=`"text-white/50 text-[11px] font-bold uppercase tracking-wide mb-1.5`">{label}</p>
              <p className=`"text-white text-sm font-semibold`">{value}</p>
              <span className=`"inline-flex items-center gap-1.5 text-green-400 text-xs font-bold mt-2`">
                <span className=`"w-1.5 h-1.5 rounded-full bg-green-400`" />Ativa
              </span>
            </div>
          ))}
          <div className=`"mt-5 bg-[rgba(255,107,43,0.15)] border border-[rgba(255,107,43,0.25)] rounded-xl p-3.5`">
            <p className=`"text-[#FF8C55] text-xs font-bold mb-1`">Resultado</p>
            <p className=`"text-white/70 text-[13px] leading-relaxed`">Toda decis\u00e3o segue exatamente essas regras, automaticamente, sem depender de ningu\u00e9m.</p>
          </div>
        </div>
      </div>
    </section>
  );
}"

# ── components/CtaFinal.tsx ──
Write-File "components\CtaFinal.tsx" "const WA = `"https://wa.me/5511999999999?text=Quero%20automatizar%20meus%20atestados%20com%20o%20Colab360`";

export default function CtaFinal() {
  return (
    <section className=`"py-24 px-[5%] bg-gradient-to-br from-[#111E35] to-[#1B2A4A] text-center relative overflow-hidden`">
      <div className=`"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,107,43,0.1)_0%,transparent_60%)] pointer-events-none`" />
      <div className=`"relative max-w-2xl mx-auto`">
        <div className=`"text-5xl mb-4`">\u26a1</div>
        <h2 className=`"text-4xl lg:text-5xl font-black text-white tracking-tight mb-4`">
          Seu RH merece trabalhar em <em className=`"text-[#E8500A] not-italic`">pessoas</em>, n\u00e3o em papel.
        </h2>
        <p className=`"text-white/65 text-lg leading-relaxed mb-10`">
          Veja em 20 minutos como o Colab360 elimina o trabalho manual, padroniza suas decis\u00f5es e protege sua empresa de riscos trabalhistas.
        </p>
        <a href={WA} target=`"_blank`" rel=`"noopener noreferrer`"
          className=`"inline-flex items-center gap-2.5 bg-[#E8500A] hover:bg-[#F06A28] text-white font-extrabold text-lg px-10 py-5 rounded-xl transition-all hover:-translate-y-0.5`">
          \uD83D\uDE80 Quero automatizar meus atestados
        </a>
        <p className=`"mt-5 text-white/35 text-sm`">Demo gratuita \u00b7 Sem contrato \u00b7 Configurado para o seu contexto</p>
      </div>
    </section>
  );
}"

# ── components/Footer.tsx ──
Write-File "components\Footer.tsx" "export default function Footer() {
  return (
    <footer className=`"bg-[#111E35] py-8 px-[5%] text-center border-t border-white/[0.06]`">
      <p className=`"text-white/35 text-sm`">
        \u00a9 2025 <span className=`"text-white`">Colab</span><span className=`"text-[#E8500A]`">360</span> \u00b7 Todos os direitos reservados \u00b7 Gest\u00e3o Inteligente de Atestados M\u00e9dicos
      </p>
    </footer>
  );
}"

Write-Host ""
Write-Host "Portugues BR corrigido em todos os arquivos!" -ForegroundColor Green
Write-Host "Reinicie o servidor: npm run dev" -ForegroundColor Cyan
Write-Host ""