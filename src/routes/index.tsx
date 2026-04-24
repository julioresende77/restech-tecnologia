import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Services } from "@/components/sections/Services";
import { ForWhom } from "@/components/sections/ForWhom";
import { Differentials } from "@/components/sections/Differentials";
import { SocialProof } from "@/components/sections/SocialProof";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RESTECH — Sites, Landing Pages e Automação que Vendem" },
      {
        name: "description",
        content:
          "A RESTECH desenvolve sites, landing pages de alta conversão e automações sob medida para escalar suas vendas com presença digital profissional.",
      },
      { property: "og:title", content: "RESTECH — Tecnologia que vende por você" },
      {
        property: "og:description",
        content: "Sites, landing pages e automações sob medida para escalar seu negócio.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <ForWhom />
        <Differentials />
        <SocialProof />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
      <Toaster theme="dark" position="top-center" />
    </div>
  );
}
