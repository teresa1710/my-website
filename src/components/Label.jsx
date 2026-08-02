import { c, mono } from "../styles/tokens";

/* Small uppercase eyebrow used above every section heading. */
export default function Label({ children, color = c.ink }) {
  return (
    <span
      className="inline-block text-xs uppercase"
      style={{ fontFamily: mono, letterSpacing: "0.18em", color }}
    >
      {children}
    </span>
  );
}
