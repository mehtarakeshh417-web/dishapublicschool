import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";

// TEMPORARY overlay. Remove <ResourceLimitOverlay /> from __root.tsx to disable.
const BYPASS_KEY = "dps-overlay-bypass";

export function ResourceLimitOverlay() {
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (sessionStorage.getItem(BYPASS_KEY) === "1") setHidden(true);
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    if (hidden) return;
    let count = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        count += 1;
        if (count >= 5) {
          try { sessionStorage.setItem(BYPASS_KEY, "1"); } catch { /* ignore */ }
          setHidden(true);
        }
      } else {
        count = 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hidden]);

  if (!mounted || hidden) return null;

  return (
    <div
      role="alertdialog"
      aria-label="Resource limit exceeded"
      className="fixed inset-0 z-[9999] flex items-center justify-center px-6 text-center"
      style={{ backgroundColor: "#5a0b0b" }}
    >
      <div className="max-w-xl">
        <AlertTriangle size={96} strokeWidth={1.5} className="mx-auto" style={{ color: "#ffd7d7" }} />
        <h1
          className="mt-8 font-serif text-3xl font-semibold tracking-wide sm:text-5xl"
          style={{ color: "#fff" }}
        >
          RESOURCE LIMIT EXCEEDED
        </h1>
        <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: "#f3c9c9" }}>
          This website has exceeded its allowed user limit and has been temporarily ceased.
          Please contact the developer immediately.
        </p>
      </div>
    </div>
  );
}
