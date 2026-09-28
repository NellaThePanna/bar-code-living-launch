import type { ReactNode } from "react";

export function UenoPlate({
  fig,
  children,
  note = "Placeholder",
  tone = "light",
}: {
  fig: string;
  children: ReactNode;
  note?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`mt-3 flex items-start justify-between gap-4 border-t pt-3 font-mono text-[11px] uppercase tracking-[0.14em] ${
        dark ? "border-white/14 text-(--cream-deep)/80" : "border-(--burgundy-ink)/18 text-(--burgundy-light)"
      }`}
    >
      <p>
        <span className={dark ? "text-(--cream-deep)" : "text-(--burgundy-ink)"}>Fig. {fig}</span> — {children}
      </p>
      <p className="shrink-0 text-right">{note}</p>
    </div>
  );
}
