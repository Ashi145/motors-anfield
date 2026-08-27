import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

interface ThemeContextValue {
  theme: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemePreference) => void;
}

const STORAGE_KEY = "anfield-theme";
const ThemeContext = createContext<ThemeContextValue | null>(null);

function isMobile(): boolean {
  if (typeof window === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768;
}

function storedTheme(): ThemePreference {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (value === "light" || value === "dark" || value === "system") return value;
  } catch {
    // Storage can be unavailable in privacy-focused browser modes.
  }
  return isMobile() ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemePreference>(storedTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const resolved: ResolvedTheme =
        theme === "system" ? (media.matches ? "dark" : "light") : theme;
      const root = document.documentElement;
      root.dataset.theme = resolved;
      root.dataset.themePreference = theme;
      root.style.colorScheme = resolved;
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", resolved === "dark" ? "#08080a" : "#f5f2eb");
      setResolvedTheme(resolved);
    };

    applyTheme();
    media.addEventListener("change", applyTheme);
    return () => media.removeEventListener("change", applyTheme);
  }, [theme]);

  function setTheme(next: ThemePreference) {
    document.documentElement.classList.add("theme-transition");
    window.setTimeout(() => document.documentElement.classList.remove("theme-transition"), 350);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The visible theme still changes even when persistence is blocked.
    }
    setThemeState(next);
  }

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}