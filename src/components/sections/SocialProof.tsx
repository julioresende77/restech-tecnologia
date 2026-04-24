import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Costa",
    role: "CEO, Atlas Comércio",
    quote: "Em 30 dias nosso site começou a gerar leads qualificados todos os dias. A RESTECH virou parceira estratégica.",
  },
  {
    name: "Rafael Mendes",
    role: "Diretor de Operações, NovaLog",
    quote: "Automatizaram 4 processos internos. Reduzimos retrabalho em 70% e a equipe ganhou tempo para o que importa.",
  },
  {
    name: "Juliana Reis",
    role: "Fundadora, Bloom Estética",
    quote: "Landing page de alto nível, suporte rápido e resultados claros. Recomendo de olhos fechados.",
  },
];

export function SocialProof() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">Prova Social</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Resultados que <span className="text-gradient-brand">falam por nós</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-7 relative">
              <Quote className="absolute top-5 right-5 text-primary/20" size={32} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-cta text-cta" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-border">
          <p className="text-center text-xs text-muted-foreground tracking-[0.2em] uppercase mb-6">Empresas que confiam</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
            {["ATLAS", "NOVALOG", "BLOOM", "VECTRA", "ÓRION", "PRISMA"].map((b) => (
              <span key={b} className="font-display font-bold text-lg tracking-widest text-muted-foreground">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
