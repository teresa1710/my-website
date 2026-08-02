import { profile } from "../data/profile";
import { c, display } from "../styles/tokens";
import Label from "./Label";
import Company from "./Company";

export default function Work() {
  return (
    <section
      id="work"
      className="px-5 py-20 sm:px-10 sm:py-28"
      style={{ background: c.lilacMid, borderBottom: `2px solid ${c.ink}` }}
    >
      <div className="mx-auto max-w-5xl">
        <Label>Work</Label>
        <h2
          className="mt-3 text-4xl sm:text-6xl"
          style={{
            fontFamily: display,
            fontWeight: 800,
            color: c.ink,
            letterSpacing: "-0.03em",
          }}
        >
          Where I have worked
        </h2>

        <div className="mt-10" style={{ borderTop: `2px solid ${c.ink}` }}>
          {profile.work.map((entry) => (
            <Company key={entry.company} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
