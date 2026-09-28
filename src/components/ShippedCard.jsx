import { c, body, display, mono, offset } from "../styles/tokens";

/* One thing built during a role. `ink` comes from the parent company. */
export default function ShippedCard({ item, ink }) {
  return (
    <article
      className="block-shift flex flex-col p-5"
      style={{
        background: c.paperLight,
        border: `2px solid ${c.ink}`,
        boxShadow: offset(ink.strong, 5),
      }}
    >
      <h4
        className="text-xl"
        style={{
          fontFamily: display,
          fontWeight: 800,
          color: c.ink,
          letterSpacing: "-0.01em",
        }}
      >
        {item.name}
      </h4>

      <p
        className="mt-2 flex-1 text-base"
        style={{ fontFamily: body, color: c.ink, lineHeight: 1.55 }}
      >
        {item.blurb}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs"
            style={{
              fontFamily: mono,
              color: c.ink,
              border: `1.5px solid ${c.ink}`,
              background: ink.soft,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Only rendered when the project has a real url to point to */}
      {item.url && (
        <a
          href={item.url}
          className="link mt-5 self-start text-sm uppercase"
          style={{
            fontFamily: mono,
            letterSpacing: "0.14em",
            color: c.ink,
            borderBottom: `2px solid ${ink.strong}`,
          }}
        >
          View project →
        </a>
      )}
    </article>
  );
}
