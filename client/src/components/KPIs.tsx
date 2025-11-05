import CountUp from "./animations/CountUp";

export default function KPIs() {
  const data = [
    { value: 92, label: "gain de productivité" },
    { value: 48, label: "heures gagnées / mois" },
    { value: 99, label: "fiabilité IA" },
  ];

  return (
    <section className="py-20 bg-[#0B0B0B] text-white text-center">
      <div className="flex flex-wrap justify-center gap-12 px-6">
        {data.map((kpi) => (
          <div key={kpi.label} data-testid={`kpi-${kpi.label.replace(/\s+/g, '-')}`}>
            <CountUp 
              value={kpi.value} 
              duration={2} 
              className="text-5xl md:text-6xl font-bold" 
              suffix="%" 
            />
            <p className="text-sm mt-2 uppercase tracking-wide text-gray-400">{kpi.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
