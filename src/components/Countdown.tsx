import { useEffect, useState } from "react";

function getTarget(): number {
  // Flash sale ends at midnight tonight (local time).
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  return end.getTime();
}

function parts(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    hours: Math.floor(total / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

export default function Countdown() {
  const [target] = useState<number>(getTarget);
  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    const t = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(t);
  }, []);

  const p = parts(target - now);
  const cells = [
    { v: p.hours, l: "Hours" },
    { v: p.minutes, l: "Mins" },
    { v: p.seconds, l: "Secs" },
  ];

  return (
    <div className="flex items-center gap-1.5">
      {cells.map((c) => (
        <div key={c.l} className="flex flex-col items-center">
          <span className="flex h-10 min-w-11 items-center justify-center rounded-md bg-bone px-2 font-mono text-lg font-bold text-white">
            {String(c.v).padStart(2, "0")}
          </span>
          <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-bone/60">{c.l}</span>
        </div>
      ))}
    </div>
  );
}
