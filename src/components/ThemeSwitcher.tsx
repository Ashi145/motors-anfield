import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useTheme, type ThemePreference } from "@/components/ThemeProvider";
import { cn } from "@/utils/cn";

const options: { value: ThemePreference; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

export function ThemeChoices({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  return (
    <div className={cn("grid grid-cols-3 gap-1 border border-line bg-coal p-1", className)}>
      {options.map((option) => {
        const Icon = option.icon;
        const selected = theme === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            aria-pressed={selected}
            className={cn(
              "flex items-center justify-center gap-2 px-3 py-2.5 font-mono text-[9px] font-medium uppercase tracking-[0.16em] transition-colors",
              selected ? "bg-blood text-white" : "text-smoke hover:bg-panel hover:text-bone"
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const ActiveIcon = theme === "system" ? Monitor : resolvedTheme === "dark" ? Moon : Sun;

  useEffect(() => {
    function close(event: PointerEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={`Change theme. Current setting: ${theme}`}
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center border border-line bg-ink/50 text-bone backdrop-blur transition-colors hover:border-blood hover:text-blood"
      >
        <motion.span
          key={`${theme}-${resolvedTheme}`}
          initial={{ opacity: 0, rotate: -35, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.25 }}
        >
          <ActiveIcon className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-[calc(100%+10px)] w-48 border border-line bg-ink p-2 shadow-2xl"
          >
            <p className="px-3 py-2 font-mono text-[9px] uppercase tracking-[0.28em] text-smoke">
              Appearance
            </p>
            {options.map((option) => {
              const Icon = option.icon;
              const selected = theme === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setTheme(option.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 px-3 py-2.5 text-left text-xs transition-colors",
                    selected ? "bg-panel text-bone" : "text-smoke hover:bg-panel hover:text-bone"
                  )}
                >
                  <Icon className={cn("h-4 w-4", selected && "text-blood")} />
                  <span className="flex-1">{option.label}</span>
                  {selected && <Check className="h-3.5 w-3.5 text-blood" />}
                </button>
              );
            })}
            <p className="border-t border-line px-3 pt-3 pb-1 text-[10px] leading-relaxed text-smoke">
              System follows this browser's appearance setting.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}