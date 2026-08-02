# teresatavernelli.com

Personal site. React + Vite + Tailwind v4, deployed as a static build.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Where things live

```
src/
  data/profile.js      all personal content — name, roles, courses, links
  styles/tokens.js     colours, fonts, the offset-shadow helper
  components/          one file per piece of UI
  index.css            global styles, fonts, grain texture, motion
public/portrait.png    pixel-art portrait
```

**Editing content never means touching a component.** `profile.js` drives
everything: add a company to `work` and a new block appears, add a role to its
`roles` array and it renders as another bullet, leave `shipped` empty and the
project cards are skipped.

## Design notes

One flat colour family — pink, lilac, grey, black — printed on a pale lilac
paper. Each block carries a solid offset shadow, like a misregistered ink
layer, and lifts on hover.

Three typefaces do three jobs: Tenor Sans for the name only (it works as a
wordmark), Bricolage Grotesque for headings, Space Grotesk for reading, Space
Mono for labels and dates. Tenor Sans ships a single weight, so emphasis comes
from size and letter-spacing — never from faked bold.

`prefers-reduced-motion` disables the marquee and all hover transitions.

## Deploying

Any static host works. Build, then point it at `dist/`.

- **Netlify / Vercel** — connect the repo, build command `npm run build`,
  publish directory `dist`
- **GitHub Pages** — push `dist/` to a `gh-pages` branch, or use an action

## To do

- Real URLs for the Tecnisistema and Tecnicargo cards (both are `#` today)
- Open Graph image and meta tags for link previews
