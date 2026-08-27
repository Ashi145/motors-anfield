import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, AlertTriangle, BookOpen } from "lucide-react";
import { brands } from "@/data/content";
import { PageHero, Reveal, SectionTag, CTABand, ArrowLink } from "@/components/shared";
import { cn } from "@/utils/cn";

function BrandBlock({ brand, flip }: { brand: (typeof brands)[number]; flip: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="border-b border-line bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* header row */}
        <Reveal>
          <div className="flex items-end justify-between border-b border-line pb-6">
            <div>
              <span className="font-mono text-sm text-blood">{brand.index}</span>
              <h2 className="mt-2 font-display text-4xl font-semibold uppercase leading-none text-bone md:text-6xl">
                {brand.name}
              </h2>
            </div>
            <p className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-smoke sm:block">
              {brand.origin}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 font-display text-lg font-light uppercase tracking-[0.15em] text-smoke">
            {brand.tagline}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* image */}
          <Reveal className={cn(flip && "lg:order-2")}>
            <div className="group relative overflow-hidden border border-line">
              <motion.img
                style={{ y: imgY }}
                src={brand.image}
                alt={brand.name}
                className="aspect-[4/3] w-full scale-110 object-cover transition-transform duration-700 group-hover:scale-[1.14]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <div className="absolute left-4 top-4 border border-bone/15 bg-ink/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-bone backdrop-blur">
                Est. specialist platform
              </div>
            </div>

            {/* engines chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {brand.engines.map((e) => (
                <Link
                  key={e}
                  to="/engines"
                  className="border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-smoke transition-all hover:border-blood hover:text-blood"
                >
                  {e}
                </Link>
              ))}
            </div>
          </Reveal>

          {/* story */}
          <div className={cn(flip && "lg:order-1")}>
            <Reveal>
              <SectionTag>The story of the car</SectionTag>
            </Reveal>
            {brand.story.map((p, i) => (
              <Reveal key={i} delay={0.08 + i * 0.08}>
                <p className="mt-5 leading-relaxed text-smoke first-of-type:text-bone/90">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="mt-8 border border-line bg-panel p-6">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-blood">
                  <BookOpen className="h-4 w-4" /> War story from the floor
                </div>
                <h4 className="mt-3 font-display text-lg font-semibold uppercase text-bone">
                  {brand.warStory.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{brand.warStory.body}</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* expertise + faults */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="h-full border border-line bg-coal p-8">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-blood">
                <ShieldCheck className="h-4 w-4" /> What we fix weekly
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {brand.expertise.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-sm text-bone/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-blood" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full border border-line bg-coal p-8">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-blood">
                <AlertTriangle className="h-4 w-4" /> Faults we know by heart
              </div>
              <ul className="mt-6 space-y-4">
                {brand.faults.map((f) => (
                  <li key={f.code} className="flex items-start gap-4">
                    <span className="shrink-0 bg-blood/15 px-2 py-1 font-mono text-[10px] font-bold tracking-wider text-blood">
                      {f.code}
                    </span>
                    <span className="text-sm leading-relaxed text-smoke">{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Brands() {
  return (
    <>
      <PageHero
        tag="Makes we specialise in"
        title={
          <>
            Three brands. <span className="text-stroke-red">One deep focus.</span>
          </>
        }
        description="We concentrate on the makes we know inside out — so every job benefits from real, repeated experience on that platform. Here's the story of each marque, and how we keep them alive on Ugandan roads."
      />
      {brands.map((b, i) => (
        <BrandBlock key={b.id} brand={b} flip={i % 2 === 1} />
      ))}
      <section className="bg-ink py-16 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-smoke">
            Own something else? <span className="text-bone">We'll still scan it straight.</span>
          </p>
          <ArrowLink to="/contact" className="mt-4">
            Ask about your car
          </ArrowLink>
        </Reveal>
      </section>
      <CTABand />
    </>
  );
}
