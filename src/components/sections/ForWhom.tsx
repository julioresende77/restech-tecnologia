import { Building2, Rocket, Store } from "lucide-react";
import dashboard from "@/assets/dashboard-mockup.jpg";

const items = [
  { icon: Store, title: "Pequenas empresas", desc: "Que precisam dar o primeiro passo no digital com profissionalismo." },
  { icon: Rocket, title: "Negócios em crescimento", desc: "Que querem escalar vendas e otimizar tempo da operação." },
  { icon: Building2, title: "Grandes corporações", desc: "Que buscam automatizar gargalos e integrar sistemas legados." },
];

export function ForWhom() {
  return (
    <section id="para-quem" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">Para Quem é</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Tecnologia <span className="text-gradient-brand">sob medida</span> para qualquer porte
          </h2>
          <p className="text-muted-foreground mb-8">
            Da operação de bairro à corporação multinacional — adaptamos a entrega ao tamanho da sua ambição.
          </p>
          <div className="space-y-4">
            {items.map((it) => (
              <div key={it.title} className="flex gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card transition">
                <div className="h-11 w-11 shrink-0 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <it.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{it.title}</h3>
                  <p className="text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-float">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-cta/20 blur-3xl opacity-40 -z-10" />
          <img
            src={dashboard}
            alt="Painel de automação RESTECH"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-2xl border border-border shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
