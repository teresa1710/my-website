import { profile } from "../data/profile";
import { c, body, wordmark, wordmarkWeight } from "../styles/tokens";
import Label from "./Label";
import Button from "./Button";
import Portrait from "./Portrait";

/* null = outlined word, so the name alternates fill and outline */
const palette = ["#F0387F", null, "#8B58CC"];

export default function Hero() {
  const words = profile.name.split(" ");

  return (
    <section id="top" className="px-5 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-24">
      <div className="mx-auto max-w-5xl">
        <Label>
          {profile.role} · {profile.location}
        </Label>

        {/* Portrait sits on top on mobile, beside the name on wider screens */}
        <div className="mt-6 flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
          <h1
            className="flex flex-col"
            style={{
              fontFamily: wordmark,
              fontWeight: wordmarkWeight,
              lineHeight: 1.02,
              letterSpacing: "0.01em",
              fontSize: "clamp(2.9rem, 10vw, 6.2rem)",
            }}
          >
            {words.map((word, i) => {
              const color = palette[i % palette.length];
              return (
                <span
                  key={word}
                  style={{
                    color: color ?? "transparent",
                    WebkitTextStroke: color ? "none" : `1.25px ${c.ink}`,
                    textShadow: color ? `3px 3px 0 ${c.ink}` : "none",
                  }}
                >
                  {word}
                </span>
              );
            })}
          </h1>

          <Portrait />
        </div>

        <p
          className="mt-8 max-w-xl text-lg sm:text-xl"
          style={{ fontFamily: body, color: c.ink, lineHeight: 1.55 }}
        >
          {profile.intro}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="#work" background={c.pink}>
            See my work
          </Button>
          <Button href="#contact" background={c.paperLight}>
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}
