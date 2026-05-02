import { useState } from "react";
import { z } from "zod";
import { ArrowRight, Mail, MessageCircle, MapPin } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(20),
  necessidade: z.string().trim().min(5, "Conte um pouco mais").max(500),
});

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const msg = encodeURIComponent(
      `Olá RESTECH! Sou ${parsed.data.nome}.\nE-mail: ${parsed.data.email}\nWhatsApp: ${parsed.data.whatsapp}\n\nNecessidade: ${parsed.data.necessidade}`
    );
    window.open(`https://wa.me/5598981549151?text=${msg}`, "_blank");
    toast.success("Abrindo WhatsApp para finalizar...");
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-background p-8 md:p-14 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cta/15 blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-12 relative">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-cta uppercase mb-3">Vamos Conversar</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-5">
                Pronto para escalar seu <span className="text-gradient-brand">negócio?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Conte sua necessidade. Em até 24h um especialista da RESTECH retorna com um diagnóstico gratuito.
              </p>

              <div className="space-y-4">
                <a href="https://wa.me/5598981549151" className="flex items-center gap-3 text-foreground/90 hover:text-primary transition">
                  <MessageCircle size={18} className="text-primary" />
                  <span className="text-sm">(98) 98154-9151</span>
                </a>
                <a href="mailto:emailrestech@gmail.com" className="flex items-center gap-3 text-foreground/90 hover:text-primary transition">
                  <Mail size={18} className="text-primary" />
                  <span className="text-sm">emailrestech@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-primary" />
                  <span className="text-sm">Atendemos todo o Brasil</span>
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Nome</label>
                <input
                  name="nome"
                  required
                  maxLength={100}
                  className="w-full h-11 px-4 rounded-md bg-background/60 border border-border focus:border-primary focus:outline-none text-sm transition"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">E-mail</label>
                  <input
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    className="w-full h-11 px-4 rounded-md bg-background/60 border border-border focus:border-primary focus:outline-none text-sm transition"
                    placeholder="voce@empresa.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">WhatsApp</label>
                  <input
                    name="whatsapp"
                    required
                    maxLength={20}
                    className="w-full h-11 px-4 rounded-md bg-background/60 border border-border focus:border-primary focus:outline-none text-sm transition"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Qual sua necessidade?</label>
                <textarea
                  name="necessidade"
                  required
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 rounded-md bg-background/60 border border-border focus:border-primary focus:outline-none text-sm transition resize-none"
                  placeholder="Quero um site / landing page / automação para..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-md bg-cta text-cta-foreground font-semibold inline-flex items-center justify-center gap-2 hover:opacity-95 transition glow-cta disabled:opacity-60"
              >
                {loading ? "Enviando..." : (<>Enviar mensagem <ArrowRight size={18} /></>)}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Resposta em até 24h. Sem spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
