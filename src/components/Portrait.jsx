import { profile } from "../data/profile";
import { c, display, offset } from "../styles/tokens";

/* Falls back to initials when `photo` is empty. */
export default function Portrait() {
  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className="block-shift shrink-0 overflow-hidden"
      style={{
        width: "clamp(9rem, 24vw, 15rem)",
        aspectRatio: "1 / 1",
        borderRadius: "9999px",
        border: `2px solid ${c.ink}`,
        boxShadow: offset(c.pink, 8),
        background: c.lilacMid,
        display: "grid",
        placeItems: "center",
      }}
    >
      {profile.photo ? (
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          className="h-full w-full"
          /* pixelated keeps the pixel art crisp instead of blurring it */
          style={{ objectFit: "cover", imageRendering: "pixelated" }}
        />
      ) : (
        <span
          style={{
            fontFamily: display,
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 7vw, 4rem)",
            letterSpacing: "-0.02em",
            color: c.ink,
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}
