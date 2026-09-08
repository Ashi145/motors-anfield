import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP, EMAIL, EMAIL_HREF } from "@/data/content";

export default function TopBar() {
  return (
    <div className="bg-noir text-white">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-4">
          <a href={PHONE_HREF} className="flex items-center gap-1.5 text-[12px] font-medium hover:text-white/80">
            <Phone className="h-3.5 w-3.5" />
            <span className="truncate">{PHONE}</span>
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 text-[12px] font-medium hover:text-white/80 sm:flex"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Chat on WhatsApp
          </a>
          <a href={EMAIL_HREF} className="hidden items-center gap-1.5 text-[12px] font-medium hover:text-white/80 md:flex">
            <Mail className="h-3.5 w-3.5" />
            {EMAIL}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 text-[12px] text-white/70 lg:flex">
            <MapPin className="h-3.5 w-3.5" />
            Kireka · Kampala–Jinja Highway
          </span>
          <span className="text-[12px] font-semibold uppercase tracking-wide text-white/80">
            Free delivery in Kampala over UGX 300,000
          </span>
        </div>
      </div>
    </div>
  );
}
