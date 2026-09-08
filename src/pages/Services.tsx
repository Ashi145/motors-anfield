import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { services, wiringServices, waLink } from "@/data/content";
import { Reveal, SectionTag, IconByName, CTABand } from "@/components/shared";

const process = [
  { step: "01", title: "Book", body: "Call or WhatsApp us your car's problem and lock in a time slot." },
  { step: "02", title: "Diagnose", body: "Full computer scan plus hands-on inspection to confirm the real fault." },
  { step: "03", title: "Quote", body: "A clear, itemised quote before any work starts. No surprises later." },
  { step: "04", title: "Repair", body: "Engine, wiring or specialist work carried out in our workshop." },
  { step: "05", title: "Road test", body: "Every car is road-tested and rechecked before it goes back to you." },
];

function ServiceCard({ s }: { s: (typeof services)[number] }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-all duration-300 hover:border-blood/40 hover:shadow-[0_14px_40px_rgba(22,22,26,0.08)]">
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-coal text-blood">
          <IconByName name={s.icon} className="h-6 w-6" />
        </span>
        {s.tag && (
          <span className="rounded-full bg-blood/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blood">
            {s.tag}
          </span>
        )}
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-wide text-bone">{s.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-smoke">{s.body}</p>
      <ul className="mt-4 space-y-2">
        {s.includes.map((inc) => (
          <li key={inc} className="flex items-start gap-2.5 text-sm text-bone/80">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blood" />
            {inc}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between pt-5">
        <div>
          <p className="text-base font-bold text-blood">{s.price}</p>
          <p className="text-xs text-smoke">{s.duration}</p>
        </div>
        <a
          href={waLink(`Hello Anfield Motors, I'd like to book: ${s.title} (${s.price}).`)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-blood px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-ember"
        >
          <MessageCircle className="h-4 w-4" /> Book
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const [params] = useSearchParams();
  const focus = params.get("focus");

  useEffect(() => {
    if (focus === "wiring") {
      const el = document.getElementById("wiring");
      if (el) window.setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 250);
    }
  }, [focus]);

  return (
    <>
      <header className="border-b border-line bg-coal">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-28 sm:px-6 md:pt-32">
          <Reveal>
            <SectionTag>Workshop &amp; wiring services</SectionTag>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.02] tracking-tight text-bone md:text-5xl">
              Fix it right, <span className="text-blood">the first time.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl leading-relaxed text-smoke">
              From a full engine rebuild to a single burnt wire — every job starts with a scan, ends
              with a road test, and is quoted before a bolt is turned.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Wiring services */}
      <section id="wiring" className="relative scroll-mt-32 overflow-hidden bg-bone text-white">
        <div className="blueprint absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-blood/25 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <Reveal>
            <span className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
              <span className="inline-block h-2 w-2 bg-blood" /> Auto electrical &amp; wiring
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold uppercase leading-[1.05] text-white md:text-4xl lg:text-5xl">
              Wiring services, <span className="text-blood">done right.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {wiringServices.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-blood/60 hover:bg-white/10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blood text-white">
                      <IconByName name={s.icon} className="h-5 w-5" />
                    </span>
                    {s.tag && (
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white/80">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{s.body}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2 text-[13px] text-white/80">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blood" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between pt-5">
                    <div>
                      <p className="text-sm font-bold text-white">{s.price}</p>
                      <p className="text-xs text-white/60">{s.duration}</p>
                    </div>
                    <a
                      href={waLink(`Hello Anfield Motors, I'd like to book: ${s.title} (${s.price}).`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
                    >
                      <MessageCircle className="h-4 w-4" /> Book
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* General services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <Reveal>
            <SectionTag>Workshop services</SectionTag>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold uppercase leading-[1.05] text-bone md:text-4xl">
              The workshop, <span className="text-blood">by the job.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06} className="h-full">
                <ServiceCard s={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-line bg-coal">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <Reveal>
            <SectionTag>The work order</SectionTag>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold uppercase leading-[1.05] text-bone md:text-4xl">
              From first call <span className="text-blood">to road-tested handover.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06} className="h-full">
                <div className="relative h-full rounded-xl border border-line bg-white p-5">
                  <span className="font-display text-3xl font-bold text-line">{p.step}</span>
                  <h3 className="mt-3 font-display text-base font-semibold uppercase tracking-wide text-bone">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-smoke">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
