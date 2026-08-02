import { profile } from "../data/profile";
import { c, mono } from "../styles/tokens";

/* The stack, doubled so the marquee loops without a visible seam. */
export default function Ticker() {
  const row = [...profile.stack, ...profile.stack];

  return (
    <div
      className="overflow-hidden py-4"
      style={{
        background: c.lilacDeep,
        borderTop: `2px solid ${c.ink}`,
        borderBottom: `2px solid ${c.ink}`,
      }}
    >
      <div className="ticker flex w-max gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="text-sm uppercase"
            style={{ fontFamily: mono, letterSpacing: "0.2em", color: c.paperLight }}
          >
            {item} <span style={{ color: c.pinkSoft }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
