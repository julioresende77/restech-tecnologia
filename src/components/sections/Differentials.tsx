import { Gauge, Target, Headphones, Boxes } from "lucide-react";

const items = [
  { icon: Gauge, title: "Velocidade de Entrega", desc: "Cronograma agressivo sem abrir mão da qualidade." },
  { icon: Target, title: "Design para Conversão", desc: "Cada pixel pensado para gerar venda, não só beleza." },
  { icon: Headphones, title: "Suporte Especializado", desc: "Time técnico próximo, ágil e resolutivo." },
  { icon: Boxes, title: "100% Personalizado", desc: "Nada de templates genéricos. Solução para o seu negócio." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">Diferenciais</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Por que escolher a <span className="text-gradient-brand">RESTECH</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl glass p-6 hover:border-primary/40 transition">
              <div className="h-11 w-11 rounded-lg bg-cta/15 border border-cta/30 flex items-center justify-center mb-4">
                <it.icon className="text-cta" size={20} />
              </div>
              <h3 className="font-semibold mb-1.5">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
