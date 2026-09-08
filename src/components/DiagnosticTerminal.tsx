import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const codes = [
  { code: "P0300", label: "Random Misfire Detected", result: "COIL PACK · CYL 3" },
  { code: "P0171", label: "System Too Lean (Bank 1)", result: "VACUUM LEAK FOUND" },
  { code: "P0420", label: "Catalyst Efficiency Low", result: "SENSOR CONFIRMED" },
  { code: "C1131-62", label: "Air Suspension Height Signal", result: "VALVE BLOCK FAULT" },
  { code: "P0012", label: "Camshaft Timing Over-Retarded", result: "CHAIN STRETCHED" },
];

type Phase = "scanning" | "found";

export default function DiagnosticTerminal() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("scanning");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    setPhase("scanning");
    const tick = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 100;
        return p + Math.floor(Math.random() * 12) + 4;
      });
    }, 120);
    return () => clearInterval(tick);
  }, [index]);

  useEffect(() => {
    if (progress >= 100 && phase === "scanning") {
      setPhase("found");
      const t = setTimeout(() => {
        setIndex((i) => (i + 1) % codes.length);
      }, 2200);
      return () => clearTimeout(t);
    }
  }, [progress, phase]);

  const current = codes[index];

  return (
    <div className="relative overflow-hidden border border-line bg-panel shadow-[0_24px_60px_-24px_rgba(var(--shadow-ink),0.35)]">
      {/* scanline */}
      <div className="pointer-events-none absolute left-0 h-px w-full animate-scanline bg-blood/60" />

      {/* title bar */}
      <div className="flex items-center justify-between border-b border-line bg-ink px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blood/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
          Anfield OBD-II · Live Session
        </p>
      </div>

      <div className="p-6 font-mono text-sm">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-smoke">
          <span>Protocol: ISO 15765-4 (CAN)</span>
          <span className="flex items-center gap-2">
            <span className={phase === "scanning" ? "text-blood animate-blink" : "text-emerald-600 dark:text-emerald-400"}>
              ●
            </span>
            {phase === "scanning" ? "BUS ACTIVE" : "FAULT LOCKED"}
          </span>
        </div>

        <div className="mt-6 min-h-[110px] border border-line/60 bg-ink p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${index}-${phase}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-blood px-2 py-0.5 text-xs font-bold text-white">{current.code}</span>
                <span className="text-xs text-bone/80">{current.label}</span>
              </div>
              <p className="mt-3 text-xs text-smoke">
                {phase === "scanning" ? (
                  <span className="animate-blink">READING ECU MEMORY…</span>
                ) : (
                  <span className="text-emerald-600 dark:text-emerald-400">&gt; ROOT CAUSE: {current.result}</span>
                )}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* progress */}
        <div className="mt-5">
          <div className="flex justify-between text-[10px] uppercase tracking-[0.25em] text-smoke">
            <span>ECU scan depth</span>
            <span className={phase === "found" ? "text-emerald-600 dark:text-emerald-400" : "text-blood"}>
              {Math.min(progress, 100)}%
            </span>
          </div>
          <div className="mt-2 h-1 w-full bg-line">
            <div
              className="h-full bg-blood transition-all duration-150"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 text-center">
          {["ENGINE", "CHASSIS", "BODY"].map((m, i) => (
            <div key={m} className="border border-line/60 px-2 py-3">
              <p className="text-[9px] uppercase tracking-[0.25em] text-smoke">{m}</p>
              <p className={`mt-1 text-xs ${i === 0 ? "text-blood" : "text-emerald-600/90 dark:text-emerald-400/80"}`}>
                {i === 0 ? (phase === "scanning" ? "SCANNING" : "FAULT") : "OK"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
