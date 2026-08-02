import { profile } from "../data/profile";
import { c, body, display, mono } from "../styles/tokens";
import Label from "./Label";

export default function Education() {
  const e = profile.education;

  return (
    <section
      id="education"
      className="px-5 py-20 sm:px-10 sm:py-24"
      style={{ background: c.paper }}
    >
      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-12">
        <div className="sm:col-span-5">
          <Label>Education</Label>
          <h2
            className="mt-3 text-3xl sm:text-4xl"
            style={{
              fontFamily: display,
              fontWeight: 800,
              color: c.ink,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            {e.degree}
          </h2>
          <p className="mt-3 text-base" style={{ fontFamily: mono, color: c.ink }}>
            {e.school} · {e.period}
          </p>
          <p
            className="mt-4 text-base"
            style={{ fontFamily: body, color: c.ink, lineHeight: 1.6 }}
          >
            {e.detail}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {profile.languages.map((language) => (
              <span
                key={language}
                className="px-2 py-1 text-xs"
                style={{
                  fontFamily: mono,
                  color: c.ink,
                  border: `1.5px solid ${c.ink}`,
                  background: c.pinkSoft,
                }}
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        <div className="sm:col-span-7">
          <Label>Courses</Label>
          <ul className="mt-5" style={{ borderTop: `2px solid ${c.ink}` }}>
            {e.courses.map((course) => (
              <li
                key={course}
                className="row py-4 text-base"
                style={{
                  fontFamily: body,
                  color: c.ink,
                  borderBottom: `2px solid ${c.ink}`,
                  lineHeight: 1.5,
                }}
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
