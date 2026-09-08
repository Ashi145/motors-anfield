import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/data/content";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Anfield Motors on WhatsApp"
      className="group fixed bottom-5 right-5 z-[70] flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-all duration-300 hover:pr-5"
    >
      <span className="flex h-14 w-14 items-center justify-center">
        <span className="absolute h-14 w-14 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <MessageCircle className="relative h-7 w-7" />
      </span>
      <span className="max-w-0 whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:max-w-[180px]">
        Chat with us
      </span>
    </a>
  );
}
