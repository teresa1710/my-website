import { inks, c, body, display, mono } from "../styles/tokens";
import Label from "./Label";
import ShippedCard from "./ShippedCard";

/* One company, with every role held there as a bullet. */
export default function Company({ entry }) {
  const ink = inks[entry.ink] ?? inks.pink;

  return (
    <div className="py-10" style={{ borderBottom: `2px solid ${c.ink}` }}>
      <div className="grid gap-3 sm:grid-cols-12 sm:gap-6">
        <div className="sm:col-span-3">
          <Label color={ink.text}>{entry.period}</Label>
        </div>

        <div className="sm:col-span-9">
          {/* Company first: the roles below all happened here */}
          <h3
            className="text-2xl sm:text-3xl"
            style={{
              fontFamily: display,
              fontWeight: 800,
              color: c.ink,
              letterSpacing: "-0.02em",
            }}
          >
            {entry.company}
          </h3>

          <ul className="mt-5 flex flex-col gap-6">
            {entry.roles.map((role) => (
              <li key={role.title} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 shrink-0"
                  style={{
                    width: "0.6rem",
                    height: "0.6rem",
                    background: ink.strong,
                    border: `1.5px solid ${c.ink}`,
                    borderRadius: "9999px",
                  }}
                />
                <div>
                  <p
                    className="text-lg"
                    style={{
                      fontFamily: display,
                      fontWeight: 800,
                      color: c.ink,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {role.title}
                    {role.period && (
                      <span
                        className="ml-3 align-middle text-xs uppercase"
                        style={{
                          fontFamily: mono,
                          fontWeight: 400,
                          letterSpacing: "0.14em",
                          color: ink.text,
                        }}
                      >
                        {role.period}
                      </span>
                    )}
                  </p>
                  <p
                    className="mt-2 max-w-2xl text-base"
                    style={{ fontFamily: body, color: c.ink, lineHeight: 1.6 }}
                  >
                    {role.summary}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Only rendered when the role actually produced something */}
          {entry.shipped.length > 0 && (
            <div className="mt-8">
              <Label color={ink.text}>What I shipped</Label>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                {entry.shipped.map((item) => (
                  <ShippedCard key={item.name} item={item} ink={ink} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
