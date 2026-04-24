import { MessageCircle } from "lucide-react";

const PHONE = "5511999999999";
const MSG = encodeURIComponent(
  "Olá RESTECH! Cheguei pelo site e gostaria de falar com um especialista."
);

export function WhatsappFloat() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[oklch(0.7_0.17_150)] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse-glow"
    >
      <MessageCircle size={26} fill="currentColor" />
    </a>
  );
}
