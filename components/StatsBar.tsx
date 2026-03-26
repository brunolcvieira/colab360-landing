const stats = [
  { num: "80%",  label: "Menos tempo manual no RH"     },
  { num: "100%", label: "Decisoes padronizadas"         },
  { num: "0",    label: "Atestados perdidos"            },
  { num: "24h",  label: "Historico completo disponivel" },
];

export default function StatsBar() {
  return (
    <div className="bg-white border-b border-gray-200 py-6 px-[5%]">
      <div className="max-w-6xl mx-auto flex justify-center gap-16 flex-wrap">
        {stats.map(({ num, label }) => (
          <div key={label} className="text-center">
            <div className="text-3xl font-black text-[#E8500A] tracking-tight">{num}</div>
            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}