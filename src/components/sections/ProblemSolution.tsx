import { AlertTriangle, CheckCircle2 } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">O Cenário</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Cada processo manual é <span className="text-cta">dinheiro saindo do caixa</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-lg bg-destructive/15 flex items-center justify-center">
                <AlertTriangle className="text-destructive" size={20} />
              </div>
              <h3 className="font-display text-xl font-semibold">O Problema</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Site amador (ou inexistente) afasta clientes qualificados",
                "Tarefas repetitivas consumem horas da sua equipe",
                "Leads esfriam por falta de resposta rápida",
                "Concorrentes digitalizados estão na frente",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-card p-8 glow-primary">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-lg bg-primary/15 flex items-center justify-center">
                <CheckCircle2 className="text-primary" size={20} />
              </div>
              <h3 className="font-display text-xl font-semibold">A Solução RESTECH</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Sites e landing pages projetados para converter",
                "Automações que liberam sua equipe do operacional",
                "Integrações inteligentes entre sistemas e canais",
                "Resultado mensurável e suporte contínuo",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
