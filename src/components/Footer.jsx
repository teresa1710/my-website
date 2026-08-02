import { profile } from "../data/profile";
import { c, mono } from "../styles/tokens";

export default function Footer() {
  return (
    <footer
      className="flex flex-col gap-2 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10"
      style={{ background: c.ink }}
    >
      <span
        className="text-xs uppercase"
        style={{ fontFamily: mono, letterSpacing: "0.18em", color: c.paper }}
      >
        {profile.name} — {new Date().getFullYear()}
      </span>
      <span
        className="text-xs uppercase"
        style={{ fontFamily: mono, letterSpacing: "0.18em", color: c.pinkSoft }}
      >
        Built by hand, no template
      </span>
    </footer>
  );
}
