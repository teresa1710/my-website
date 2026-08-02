/* Design tokens.
   One flat colour family — pink, lilac, grey, black — so the offset ink
   reads as a single print run. Each ink carries three levels:
     strong → fills and drop shadows
     soft   → tag and label backgrounds
     text   → small type, dark enough to stay legible          */

export const inks = {
  pink:   { strong: "#FF4D9D", soft: "#FFD3E6", text: "#C8155F" },
  lilac:  { strong: "#9B6FD4", soft: "#E4D6F7", text: "#6A3CA6" },
  grey:   { strong: "#7C7589", soft: "#DCD8E3", text: "#4A4456" },
  black:  { strong: "#14101A", soft: "#E3DFEA", text: "#14101A" },
};

export const c = {
  paper: "#EFEAF3",
  paperLight: "#FBF8FD",
  ink: "#14101A",
  pink: inks.pink.strong,
  pinkSoft: inks.pink.soft,
  lilac: inks.lilac.strong,
  lilacMid: "#CDB4EE",
  lilacDeep: "#6A3CA6",
  grey: inks.grey.strong,
};

export const display = "'Bricolage Grotesque', 'Archivo Black', system-ui, sans-serif";
/* Used only for your name (nav + hero + sign-off), so it reads as a wordmark.
   Tenor Sans ships a single weight, so emphasis comes from size and
   letter-spacing rather than bolding — never fake it with font-weight.
   Want a different feel? Swap the first family below and change the
   matching line in the @import in src/index.css:
     'Tenor Sans'         — airy, no serifs, quietly modern (current)
     'Marcellus'          — delicate serif, roman inscription roots
     'Cormorant Garamond' — fine, high-contrast serif
     'Jost'               — geometric sans, bauhaus lineage        */
export const wordmark = "'Tenor Sans', 'Marcellus', system-ui, sans-serif";
export const wordmarkWeight = 400;

export const body = "'Space Grotesk', system-ui, sans-serif";
export const mono = "'Space Mono', ui-monospace, monospace";

/* Offset ink shadow: the gesture repeated across the whole site */
export const offset = (color, d = 6) => `${d}px ${d}px 0 ${color}`;
