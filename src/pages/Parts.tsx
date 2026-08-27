import { Link } from "react-router-dom";
import { PackageSearch, BadgeCheck, MessageCircle, ArrowRight } from "lucide-react";
import { partCategories } from "@/data/content";
import {
  PageHero,
  Reveal,
  SectionTag,
  IconByName,
  Magnetic,
  CTABand,
} from "@/components/shared";

function PartCard({ cat, index }: { cat: (typeof partCategories)[number]; index: number }) {
  return (
    <Reveal delay={(index % 4) * 0.07} className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden border border-line bg-ink transition-colors duration-500 hover:border-blood/50">
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blood/0 blur-3xl transition-all duration-700 group-hover:bg-blood/15" />
        <div className="flex items-center justify-between border-b border-line p-6">
          <IconByName
            name={cat.icon}
            className="h-7 w-7 text-blood transition-transform duration-500 group-hover:scale-110"
          />
          <span className="font-mono text-[10px] text-line transition-colors duration-500 group-hover:text-blood">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-bone">
            {cat.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-smoke">{cat.description}</p>
          <ul className="mt-5 flex-1 space-y-2">
            {cat.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-bone/75">
                <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-blood" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
            {cat.brands.map((b) => (
              <span
                key={b}
                className="bg-panel px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-smoke"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Parts() {
  return (
    <>
      <PageHero
        tag="Spare parts counter"
        title={
          <>
            The right part, <span className="text-stroke-red">the first time.</span>
          </>
        }
        description="A diagnosis is only as good as the parts that follow it. We stock and source genuine and OEM-grade components for the three brands we specialise in — and we'll tell you honestly when a quality aftermarket part is the smarter buy."
      />

      {/* strip image banner */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="relative h-[320px] md:h-[420px]">
          <img
            src="/images/parts.jpg"
            alt="Spare parts on the workbench at Anfield Motors"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Reveal>
              <div className="text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-blood">
                  On the shelf · Sourced in 24–72h
                </p>
                <p className="mt-3 font-display text-3xl font-semibold uppercase text-bone md:text-5xl">
                  8 categories. Zero mystery parts.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* categories grid */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partCategories.map((cat, i) => (
              <PartCard key={cat.id} cat={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* genuine vs aftermarket */}
      <section className="border-y border-line bg-coal">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionTag>Our parts policy</SectionTag>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl font-semibold uppercase leading-[1.02] text-bone md:text-5xl">
                Genuine first. <span className="text-stroke">Honesty always.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg leading-relaxed text-smoke">
                Safety-critical components — brakes, suspension, timing — we only fit genuine or
                OEM. For consumables like filters, we'll show you the options and the price
                difference, and let you decide with full information.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-8 space-y-4">
                {[
                  ["Genuine & OEM-grade only on safety parts", BadgeCheck],
                  ["Every part itemised on your quote", PackageSearch],
                  ["Old parts returned to you on request", BadgeCheck],
                ].map(([text, Icon]) => {
                  const I = Icon as typeof BadgeCheck;
                  return (
                    <li key={text as string} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-blood">
                        <I className="h-4 w-4" />
                      </span>
                      <span className="pt-2 text-sm text-bone/80">{text as string}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          {/* source request card */}
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden border border-line bg-panel p-8 md:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blood/15 blur-3xl" />
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-blood">
                Can't find it?
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight text-bone">
                We source parts <span className="text-blood">other garages can't.</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-smoke">
                Send us your VIN or a photo of the old part. We'll find it — genuine, OEM or the
                best aftermarket option — with a straight price and a fitting quote.
              </p>
              <div className="mt-8">
                <Magnetic>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-3 bg-blood px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-ember"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Request a part
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
