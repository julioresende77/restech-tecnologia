import { Globe, Zap, Workflow, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Criação de Sites",
    desc: "Sites institucionais rápidos, responsivos e otimizados para SEO. Sua marca com a cara que ela merece.",
    tags: ["Responsivo", "SEO", "Performance"],
  },
  {
    icon: Zap,
    title: "Landing Pages de Alta Conversão",
    desc: "Páginas estratégicas projetadas com copy e UX focados em transformar visitantes em clientes.",
    tags: ["A/B Test", "Analytics", "CRO"],
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    desc: "Integre sistemas, elimine tarefas manuais e ganhe escala com fluxos inteligentes sob medida.",
    tags: ["APIs", "n8n", "IA"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">Nossos Serviços</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
            Soluções digitais que <span className="text-gradient-brand">geram resultado</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-7 hover:border-primary/50 transition-all hover:-translate-y-1 hover:glow-primary"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center mb-5">
                <s.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
              <a href="#contato" className="inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                Quero esse serviço <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
