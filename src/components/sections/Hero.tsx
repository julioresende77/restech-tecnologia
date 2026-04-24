import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary mb-8 animate-fade-up">
          <Sparkles size={14} />
          Tecnologia que vende por você
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Escale suas vendas com{" "}
          <span className="text-gradient-brand">presença digital</span> e processos automatizados
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          A RESTECH desenvolve sites, landing pages e automações sob medida para empresas que querem crescer com inteligência e velocidade.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 h-12 px-7 rounded-md bg-cta text-cta-foreground font-semibold hover:opacity-95 transition glow-cta"
          >
            Falar com um Especialista
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-md border border-border bg-card/40 backdrop-blur font-medium hover:bg-card transition"
          >
            Ver Soluções
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 max-w-2xl mx-auto gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { k: "+150", v: "Projetos entregues" },
            { k: "98%", v: "Satisfação" },
            { k: "24h", v: "Suporte ágil" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-gradient-brand">{s.k}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
