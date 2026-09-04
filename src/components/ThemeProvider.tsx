"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: ResolvedTheme;
  toggleTheme: () => void;
};

const STORAGE_KEY = "korux-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: ResolvedTheme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

function readStoredTheme(): ResolvedTheme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* ignore */
  }
  return null;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ResolvedTheme>("light");
  const [hasExplicitChoice, setHasExplicitChoice] = useState(false);

  useEffect(() => {
    const stored = readStoredTheme();
    if (stored) {
      setHasExplicitChoice(true);
      setTheme(stored);
      applyTheme(stored);
      return;
    }

    const system = getSystemTheme();
    setHasExplicitChoice(false);
    setTheme(system);
    applyTheme(system);
  }, []);

  useEffect(() => {
    if (hasExplicitChoice) return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const next = media.matches ? "dark" : "light";
      setTheme(next);
      applyTheme(next);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [hasExplicitChoice]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: ResolvedTheme = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      applyTheme(next);
      return next;
    });
    setHasExplicitChoice(true);
  }, []);

  const value = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
