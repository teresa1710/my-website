import { profile } from "../data/profile";
import { c, mono, wordmark, wordmarkWeight } from "../styles/tokens";

const links = [
  ["Work", "#work"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Header() {
  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between px-5 py-3 sm:px-10"
      style={{ background: c.paper, borderBottom: `2px solid ${c.ink}` }}
    >
      <a
        href="#top"
        className="text-lg"
        style={{
          fontFamily: wordmark,
          /* Tenor Sans has a single weight, so tracking carries the emphasis */
          fontWeight: wordmarkWeight,
          letterSpacing: "0.06em",
          color: c.ink,
        }}
      >
        {profile.name}
      </a>

      <nav className="flex gap-4 sm:gap-7">
        {links.map(([name, anchor]) => (
          <a
            key={anchor}
            href={anchor}
            className="link text-xs uppercase sm:text-sm"
            style={{ fontFamily: mono, letterSpacing: "0.12em", color: c.ink }}
          >
            {name}
          </a>
        ))}
      </nav>
    </header>
  );
}
