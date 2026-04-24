import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Qual o prazo de entrega de um site ou landing page?",
    a: "Landing pages ficam prontas em até 7 dias úteis. Sites institucionais variam de 2 a 4 semanas, dependendo do escopo. Definimos o cronograma exato no kickoff.",
  },
  {
    q: "Vocês dão suporte após a entrega?",
    a: "Sim. Todos os projetos incluem suporte técnico pós-entrega. Também oferecemos planos mensais de manutenção, evolução e otimização contínua.",
  },
  {
    q: "Como funciona uma automação de processos?",
    a: "Mapeamos as tarefas manuais, identificamos integrações possíveis (APIs, planilhas, CRMs, WhatsApp, IA) e construímos um fluxo que executa o trabalho automaticamente, com monitoramento.",
  },
  {
    q: "Vocês atendem empresas pequenas?",
    a: "Sim. Trabalhamos com pequenos negócios que querem se digitalizar e com corporações que buscam otimizar sistemas — adaptamos escopo e investimento.",
  },
  {
    q: "Qual a forma de pagamento?",
    a: "Aceitamos PIX, transferência e cartão. Em projetos maiores, parcelamos em etapas vinculadas a entregas.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">FAQ</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Perguntas <span className="text-gradient-brand">frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
