import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Zap, ShieldCheck, Truck, BadgeCheck } from "lucide-react";
import {
  products,
  categories,
  wiringServices,
  services,
  perks,
  testimonials,
  waLink,
} from "@/data/content";
import { Reveal, SectionTag, SectionHeading, StarRating, IconByName, CTABand, ArrowLink } from "@/components/shared";
import ProductCard from "@/components/ProductCard";
import Countdown from "@/components/Countdown";

const categoryImages: Record<string, string> = {
  "auto-spares": "./images/products/filters-plugs.jpg",
  diagnostics: "./images/products/obd2-scanner.jpg",
  wiring: "./images/products/wiring-loom.jpg",
  suspension: "./images/products/brake-kit.jpg",
  batteries: "./images/products/jump-starter.jpg",
  tools: "./images/products/socket-set.webp",
};

/* ------------------------------ Hero ------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blood via-blood to-[#9c0200] text-white">
      <img
        src="./images/hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.16] mix-blend-luminosity"
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur">
            <Zap className="h-3.5 w-3.5" /> Official Anfield Motors Store
          </span>
        </Reveal>
        <Reveal delay={0.07}>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Genuine parts. Honest service. <span className="text-white/70">Ordered on WhatsApp.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Spare parts, diagnostic tools and workshop services for Range Rover, BMW &amp; Toyota —
            chat with a real mechanic, pay on MoMo, and get it delivered or fitted in Kireka.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
            <Link
              to="/shop"
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-blood transition-colors hover:bg-ink"
            >
              Shop now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services?focus=wiring"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/60 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-blood"
            >
              <MessageCircle className="h-4 w-4" />
              Book wiring service
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90">
            {[
              { icon: BadgeCheck, label: "100% genuine parts" },
              { icon: Truck, label: "Free Kampala delivery over UGX 300k" },
              { icon: ShieldCheck, label: "Warranty included" },
              { icon: MessageCircle, label: "WhatsApp ordering" },
            ].map((t) => (
              <span key={t.label} className="flex items-center gap-2">
                <t.icon className="h-4 w-4" />
                {t.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Category tiles ------------------------------ */

function CategoryTiles() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-2 gap-y-6 px-4 py-8 sm:grid-cols-6 sm:px-6">
        {categories.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.05}>
            <Link to={`/shop?cat=${c.id}`} className="group flex flex-col items-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-coal text-blood transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-blood group-hover:text-white">
                <IconByName name={c.icon} className="h-7 w-7" />
              </span>
              <span className="mt-3 text-[13px] font-semibold leading-tight text-bone transition-colors group-hover:text-blood">
                {c.name}
              </span>
              <span className="mt-1 hidden text-[11px] text-smoke sm:block">{c.blurb}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Flash sale ------------------------------ */

function FlashSale() {
  const deals = products
    .filter((p) => p.oldPrice)
    .sort((a, b) => {
      const da = (a.oldPrice! - a.price) / a.oldPrice!;
      const db = (b.oldPrice! - b.price) / b.oldPrice!;
      return db - da;
    })
    .slice(0, 6);

  return (
    <section className="border-b border-line bg-coal">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Reveal>
              <SectionTag>Deals of the day</SectionTag>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight text-bone md:text-4xl">
                Flash <span className="text-blood">sale</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-5">
              <span className="hidden text-sm font-semibold uppercase tracking-wide text-smoke sm:block">
                Ends in
              </span>
              <Countdown />
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-3 lg:grid-cols-6">
          {deals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Category cards ------------------------------ */

function CategoryCards() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
        <SectionHeading
          tag="Shop by category"
          title={
            <>
              Everything for the <span className="text-blood">workshop floor.</span>
            </>
          }
          action={<ArrowLink to="/shop">View all products</ArrowLink>}
        />

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 0.07}>
              <Link
                to={`/shop?cat=${c.id}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:border-blood/40 hover:shadow-[0_14px_40px_rgba(22,22,26,0.10)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                  <img
                    src={categoryImages[c.id] ?? "./images/parts.jpg"}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-coal text-blood transition-colors group-hover:bg-blood group-hover:text-white">
                    <IconByName name={c.icon} className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold uppercase tracking-wide text-bone">
                      {c.name}
                    </p>
                    <p className="text-xs text-smoke">{c.blurb}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Featured products ------------------------------ */

function FeaturedProducts() {
  const featured = products.slice(0, 8);
  return (
    <section className="border-t border-line bg-coal">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
        <SectionHeading
          tag="Featured products"
          title={
            <>
              Best sellers <span className="text-blood">in the garage.</span>
            </>
          }
          action={<ArrowLink to="/shop">Browse the full shop</ArrowLink>}
        />
        <div className="mt-10 grid grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Wiring services ------------------------------ */

function WiringServices() {
  return (
    <section className="relative overflow-hidden bg-bone text-white">
      <div className="blueprint absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-blood/25 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
                <span className="inline-block h-2 w-2 bg-blood" /> Auto electrical &amp; wiring
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold uppercase leading-[1.05] text-white md:text-4xl lg:text-5xl">
                Wiring services, <span className="text-blood">done right.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-xl text-white/70">
                Burnt wires, dead circuits, flickering lights — most garages patch them. We trace,
                repair and re-wire to factory standard, then test every circuit.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.14} className="shrink-0">
            <ArrowLink to="/services?focus=wiring" className="text-white">
              All wiring services
            </ArrowLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {wiringServices.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.07} className="h-full">
              <div className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-blood/60 hover:bg-white/10">
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
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.includes.slice(0, 3).map((inc) => (
                    <span key={inc} className="rounded bg-white/10 px-2 py-1 text-[11px] text-white/80">
                      {inc}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between pt-5">
                  <div>
                    <p className="text-sm font-bold text-white">{s.price}</p>
                    <p className="text-xs text-white/60">{s.duration}</p>
                  </div>
                  <a
                    href={waLink(`Hello Anfield Motors, I'd like to book: ${s.title} (${s.price}).`)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366] text-white transition-transform hover:scale-105"
                    aria-label={`Book ${s.title} on WhatsApp`}
                  >
                    <MessageCircle className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Workshop services ------------------------------ */

function WorkshopServices() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
        <SectionHeading
          tag="Workshop services"
          title={
            <>
              Book a mechanic, <span className="text-blood">not just a part.</span>
            </>
          }
          action={<ArrowLink to="/services">All services</ArrowLink>}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.07} className="h-full">
              <div className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blood/40 hover:shadow-[0_14px_40px_rgba(22,22,26,0.08)]">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-coal text-blood transition-colors group-hover:bg-blood group-hover:text-white">
                    <IconByName name={s.icon} className="h-5 w-5" />
                  </span>
                  {s.tag && (
                    <span className="rounded-full bg-blood/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blood">
                      {s.tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide text-bone">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{s.body}</p>
                <div className="mt-auto flex items-center justify-between pt-5">
                  <div>
                    <p className="text-sm font-bold text-blood">{s.price}</p>
                    <p className="text-xs text-smoke">{s.duration}</p>
                  </div>
                  <Link
                    to="/services"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-smoke transition-all group-hover:border-blood group-hover:text-blood"
                    aria-label={`Book ${s.title}`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Visual gallery (Cars & craft) ------------------------------ */

const visualGallery = [
  {
    title: "Audi A7",
    note: "European grand touring",
    src: "https://wallpapers.com/images/hd/audi-a7-black-on-the-road-v4a5uz0a0i4mlhvg.jpg",
    fallback: "./images/bmw.jpg",
    source: "Wallpapers.com",
    sourceUrl: "https://wallpapers.com/wallpapers/audi-a7-black-on-the-road-v4a5uz0a0i4mlhvg.html",
  },
  {
    title: "Range Rover Vogue",
    note: "Luxury built for any road",
    src: "./images/range-rover.jpg",
    fallback: "./images/range-rover.jpg",
    source: "Anfield Motors collection",
    sourceUrl: "",
  },
  {
    title: "Workshop culture",
    note: "Old-school craft, modern tools",
    src: "https://images.pexels.com/photos/4116232/pexels-photo-4116232.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    fallback: "./images/workshop.jpg",
    source: "Jose Ricardo Barraza Morachis / Pexels",
    sourceUrl: "https://www.pexels.com/photo/red-retro-car-in-repair-shop-4116232/",
  },
  {
    title: "Toyota GR Supra",
    note: "The performance side of Toyota",
    src: "https://toyota-cms-media.s3.amazonaws.com/wp-content/uploads/2019/05/2020_GR_Supra_Renaissance_Red_001_751979DA7706E4CAAA83E32C9A6AC509990F3512-1500x900.jpg",
    fallback: "./images/toyota.jpg",
    source: "Toyota USA Newsroom",
    sourceUrl: "https://pressroom.toyota.com/album/2020-gr-supra-renaissance-red-2-0/",
  },
] as const;

function VisualGallery() {
  return (
    <section className="border-y border-line bg-coal">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
        <SectionHeading
          tag="Cars & craft"
          title={
            <>
              The machines that keep <span className="text-blood">us looking closer.</span>
            </>
          }
        />
        <Reveal delay={0.06}>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-smoke">
            From long-distance luxury to Japanese performance, every shape hides an engineering
            story worth understanding.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-12">
          {visualGallery.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.08}
              className={index % 3 === 0 ? "md:col-span-7" : "md:col-span-5"}
            >
              <figure className="group relative h-[300px] overflow-hidden rounded-xl bg-mist md:h-[410px]">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(event) => {
                    if (event.currentTarget.src !== new URL(item.fallback, window.location.href).href) {
                      event.currentTarget.src = item.fallback;
                    }
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <figcaption>
                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-blood">
                      0{index + 1} · {item.note}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold uppercase text-bone">
                      {item.title}
                    </h3>
                  </figcaption>
                  {item.sourceUrl ? (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="max-w-36 text-right font-mono text-[8px] uppercase leading-relaxed tracking-[0.14em] text-bone/55 transition-colors hover:text-bone"
                    >
                      Image: {item.source}
                    </a>
                  ) : (
                    <span className="max-w-36 text-right font-mono text-[8px] uppercase leading-relaxed tracking-[0.14em] text-bone/55">
                      {item.source}
                    </span>
                  )}
                </div>
                <motion.span
                  className="absolute left-0 top-0 h-0.5 bg-blood"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.25 + index * 0.08 }}
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Brands strip ------------------------------ */

function BrandStrip() {
  const items = [
    { name: "Range Rover & Land Rover", img: "./images/range-rover.jpg" },
    { name: "BMW", img: "./images/bmw.jpg" },
    { name: "Toyota", img: "./images/toyota.jpg" },
  ];
  return (
    <section className="border-t border-line bg-coal">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
        <SectionHeading
          tag="Three makes, one deep focus"
          title={
            <>
              We only touch what we <span className="text-blood">know inside out.</span>
            </>
          }
          action={<ArrowLink to="/brands">Explore the brands</ArrowLink>}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.08}>
              <Link to="/brands" className="group relative block overflow-hidden rounded-xl border border-line">
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bone/90 via-bone/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                  <h3 className="font-display text-2xl font-semibold uppercase text-white">{b.name}</h3>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-all group-hover:border-blood group-hover:bg-blood">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Perks ------------------------------ */

function Perks() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:grid-cols-6">
        {perks.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <div className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-coal text-blood">
                <IconByName name={p.icon} className="h-5 w-5" />
              </span>
              <p className="mt-3 text-sm font-bold text-bone">{p.title}</p>
              <p className="mt-1 text-xs text-smoke">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Testimonials ------------------------------ */

function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
        <SectionHeading
          tag="Customer reviews"
          title={
            <>
              What drivers <span className="text-blood">tell us.</span>
            </>
          }
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-xl border border-line bg-white p-6">
                <StarRating rating={t.rating} />
                <blockquote className="mt-4 flex-1 leading-relaxed text-bone/90">“{t.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blood font-display text-lg font-bold text-white">
                    {t.name[0]}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-bone">{t.name}</span>
                    <span className="block text-xs text-smoke">{t.place}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Page ------------------------------ */

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryTiles />
      <FlashSale />
      <CategoryCards />
      <FeaturedProducts />
      <WiringServices />
      <WorkshopServices />
      <VisualGallery />
      <BrandStrip />
      <Perks />
      <Testimonials />
      <CTABand />
    </>
  );
}
