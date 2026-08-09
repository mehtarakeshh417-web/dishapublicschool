import { useEffect, useState } from "react";

const BYPASS_KEY = "dps-admin-hold-bypass";

export function AdminHoldOverlay() {
  const [bypassed, setBypassed] = useState(true);

  useEffect(() => {
    setBypassed(sessionStorage.getItem(BYPASS_KEY) === "1");
  }, []);

  useEffect(() => {
    let count = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        count += 1;
        if (count >= 5) {
          sessionStorage.setItem(BYPASS_KEY, "1");
          setBypassed(true);
        }
      } else {
        count = 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (bypassed) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center px-6 text-center"
      style={{ backgroundColor: "#1e293b" }}
    >
      <div className="max-w-xl">
        <div
          className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="1.8" strokeLinecap="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v6M12 16.5v.5" />
          </svg>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl" style={{ color: "#f1f5f9" }}>
          Administrative Notice
        </h1>
        <p className="mt-4 text-sm leading-relaxed sm:text-base" style={{ color: "#cbd5e1" }}>
          Access to this preview instance has been temporarily suspended pending outstanding
          administrative or contractual approvals. Please contact the developer to resolve.
        </p>
      </div>
    </div>
  );
}
