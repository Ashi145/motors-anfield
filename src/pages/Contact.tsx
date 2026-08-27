import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle, Landmark, Send } from "lucide-react";
import { ADDRESS, HOURS, PHONE, PHONE_HREF, WHATSAPP } from "@/data/content";
import { PageHero, Reveal, SectionTag } from "@/components/shared";

const inputCls =
  "w-full border border-line bg-ink px-4 py-3.5 text-sm text-bone placeholder:text-smoke/50 outline-none transition-colors focus:border-blood";

export default function Contact() {
  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const [issue, setIssue] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Anfield Motors, I'd like to book my car in.\n\nName: ${name || "-"}\nCar: ${
        car || "-"
      }\nProblem: ${issue || "-"}`
    );
    window.open(`${WHATSAPP}?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <>
      <PageHero
        tag="Find the workshop"
        title={
          <>
            Book your car in. <span className="text-stroke-red">Today.</span>
          </>
        }
        description="Call, WhatsApp, or send the form — describe the symptom and we'll tell you exactly what happens next. First step is always the same: a full scan."
      />

      <section className="bg-ink">
        <div className="mx-auto grid max-w-7xl gap-px border border-line bg-line lg:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: "Address",
              lines: [ADDRESS],
            },
            {
              icon: Clock,
              title: "Working hours",
              lines: [HOURS],
            },
            {
              icon: Landmark,
              title: "Landmark",
              lines: [
                "Look for Landing Washing Bay — Anfield Motors is right next door, on the Kireka trading-center side of the highway.",
              ],
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="h-full">
              <div className="h-full bg-ink p-8">
                <c.icon className="h-6 w-6 text-blood" />
                <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-bone">
                  {c.title}
                </h3>
                {c.lines.map((l) => (
                  <p key={l} className="mt-2 text-sm leading-relaxed text-smoke">
                    {l}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-2">
          {/* form */}
          <div>
            <Reveal>
              <SectionTag>Booking form</SectionTag>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-semibold uppercase leading-tight text-bone md:text-4xl">
                Tell us the symptom. <span className="text-stroke">We'll do the rest.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <form onSubmit={onSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-smoke">
                      Your name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Moses"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-smoke">
                      Car &amp; year
                    </label>
                    <input
                      value={car}
                      onChange={(e) => setCar(e.target.value)}
                      placeholder="e.g. Range Rover Sport 2014"
                      className={inputCls}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-smoke">
                    What's it doing?
                  </label>
                  <textarea
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    rows={5}
                    placeholder="Describe the noise, warning light, leak or loss of power…"
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 bg-blood px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-ember sm:w-auto"
                >
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  {sent ? "Opening WhatsApp…" : "Send via WhatsApp"}
                </motion.button>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-smoke">
                  // Your message opens in WhatsApp — no account or email needed.
                </p>
              </form>
            </Reveal>
          </div>

          {/* direct contact */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <a
                href={PHONE_HREF}
                className="group block border border-line bg-panel p-8 transition-colors duration-300 hover:border-blood"
              >
                <Phone className="h-7 w-7 text-blood" />
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
                  Call the workshop
                </p>
                <p className="mt-2 font-display text-3xl font-semibold text-bone transition-colors group-hover:text-blood">
                  {PHONE}
                </p>
              </a>
            </Reveal>
            <Reveal delay={0.16}>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group block border border-line bg-panel p-8 transition-colors duration-300 hover:border-blood"
              >
                <MessageCircle className="h-7 w-7 text-blood" />
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
                  WhatsApp us
                </p>
                <p className="mt-2 font-display text-3xl font-semibold text-bone transition-colors group-hover:text-blood">
                  Chat now →
                </p>
                <p className="mt-3 text-sm leading-relaxed text-smoke">
                  Send a photo of the warning light or a voice note of the noise — it genuinely
                  helps us diagnose faster.
                </p>
              </a>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="relative flex-1 overflow-hidden border border-line">
                <img
                  src="/images/diagnostics.jpg"
                  alt="Diagnostics laptop connected to a vehicle"
                  className="h-full min-h-[220px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.3em] text-bone">
                  Step one, always: the scan.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
