import { profile } from "../data/profile";
import { c, display, offset } from "../styles/tokens";
import Label from "./Label";
import Logo from "./Logo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-5 py-24 text-center sm:px-10 sm:py-32"
      style={{ background: c.pink }}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <Label>Contact</Label>

        <h2
          className="mt-5"
          style={{
            fontFamily: display,
            fontWeight: 800,
            color: c.ink,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            fontSize: "clamp(2rem, 5.5vw, 3.4rem)",
          }}
        >
          Find me here
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {profile.contact.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              /* label on the anchor, hidden svg: screen readers say "GitHub" */
              aria-label={link.name}
              title={link.name}
              className="block-shift grid place-items-center"
              style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "9999px",
                background: c.paperLight,
                color: c.ink,
                border: `2px solid ${c.ink}`,
                boxShadow: offset(c.ink, 5),
              }}
            >
              <Logo name={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
