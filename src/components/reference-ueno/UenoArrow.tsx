export function UenoArrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className="w-4 h-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      viewBox="0 0 24 24"
    >
      <path d={direction === "right" ? "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" : "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"} />
    </svg>
  );
}
