import { useState } from "react";
import { c, body, offset } from "../styles/tokens";

/* Presses into its own ink shadow on mousedown, like a stamp.
   Pass `download` to trigger a file download instead of navigating. */
export default function Button({ children, href, background, download }) {
  const [pressed, setPressed] = useState(false);

  return (
    <a
      href={href}
      download={download}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className="block-shift inline-block px-6 py-3 text-base"
      style={{
        fontFamily: body,
        fontWeight: 700,
        background,
        color: c.ink,
        border: `2px solid ${c.ink}`,
        boxShadow: offset(c.ink, pressed ? 2 : 6),
        transform: pressed ? "translate(4px, 4px)" : "none",
      }}
    >
      {children}
    </a>
  );
}
