import { useState } from "react";

/* ───────────────────────────────────────────────────────────
   1. TUS DATOS — edita solo este objeto y el sitio se actualiza
   ─────────────────────────────────────────────────────────── */
const datos = {
  nombre: "Teresa Tavernelli",
  /* Pixel-art portrait, embedded so the file works on its own.
     Swap in a URL or a path like "/portrait.jpg" any time. */
  foto: "data:image/png;base64,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",
  rol: "Web developer",
  ubicacion: "Open to relocation",
  intro:
    "Italian computer scientist with five years building web applications. I specialize in front-end work for dynamic, responsive products, and I'm equally at home in the data layer \u2014 lakes, warehouses and the queries that make them useful.",
  stack: [
    "JavaScript",
    "React",
    "HTML / HAML",
    "CSS / Flexbox",
    "Ruby on Rails",
    "CoffeeScript",
    "jQuery",
    "PostgreSQL",
    "SQL",
    "GitHub",
    "Scrum",
  ],
  /* One entry per company. Roles held there go in `roles` as bullets. */
  trabajo: [
    {
      empresa: "Akdemia",
      periodo: "2021 - 2026",
      tinta: "rosa",
      roles: [
        {
          puesto: "Full-stack web developer",
          periodo: "2021 - 2026",
          detalle:
            "I lead projects end to end, from in-depth analysis through to release. Day to day that means building complex multi-join queries, developing and managing Rails background jobs, and optimizing database interactions so the app stays fast and responsive under load. I also implemented CRUD operations, redesigned views, and bar-chart visualizations built on aggregated metrics.",
        },
        {
          puesto: "Thesis supervisor and tutor",
          periodo: "2023 - 2024",
          detalle:
            "Guided four students through their graduation projects on Data Lake and Big Data implementations, bridging the university and Akdemia so they finished with practical AWS experience alongside the degree.",
        },
      ],
      construido: [],
    },
    {
      empresa: "Tecnisistema Lanwork Place",
      periodo: "2019 — 2021",
      tinta: "gris",
      roles: [
        {
          puesto: "Front-end web developer",
          detalle:
            "Owned two company websites end to end, from AdobeXD designs through to deployment, and handled DNS management for both.",
        },
      ],
      construido: [
        {
          titulo: "Tecnisistema Web",
          resumen:
            "Built from scratch: AdobeXD for design, HTML and CSS for structure and styling, Bootstrap for responsive layout.",
          tags: ["HTML/CSS", "Bootstrap", "AdobeXD"],
          url: "#",
        },
        {
          titulo: "Tecnicargo Web",
          resumen:
            "Second site for the same group, with jQuery driving the interactive pieces and a tighter turnaround.",
          tags: ["jQuery", "HTML/CSS", "Responsive"],
          url: "#",
        },
      ],
    },
  ],
  formacion: {
    titulo: "BSc in Computer Science",
    institucion: "Universidad Central de Venezuela",
    periodo: "2010 — 2018",
    detalle:
      "Thesis: a business intelligence solution based on a Big Data architecture for the Web Archive of Venezuela.",
    cursos: [
      "React — Hooks, Router, Redux, Next (Udemy, 2023)",
      "jQuery: novice to expert (Udemy, 2022)",
      "Professional Web Design, complete practical course (Udemy, 2020)",
      "Advanced English — British Council Caracas (2018 — 2023)",
    ],
  },
  idiomas: ["Spanish — native", "English — C2", "Italian"],
  contacto: {
    /* `icono` picks the logo drawn in the Logo component below */
    enlaces: [
      { nombre: "GitHub", icono: "github", url: "https://github.com/teresa1710" },
      {
        nombre: "LinkedIn",
        icono: "linkedin",
        url: "https://www.linkedin.com/in/teresa-tavernelli-99707a184/",
      },
    ],
  },
};

/* ───────────────────────────────────────────────────────────
   2. PALETA — una sola gama: rosa, lila, gris, negro
   Cada tinta en tres niveles:
     fuerte → rellenos y sombras   suave → etiquetas   texto → tipografía pequeña
   ─────────────────────────────────────────────────────────── */
const tintas = {
  rosa:  { fuerte: "#FF4D9D", suave: "#FFD3E6", texto: "#C8155F" },
  lila:  { fuerte: "#9B6FD4", suave: "#E4D6F7", texto: "#6A3CA6" },
  gris:  { fuerte: "#7C7589", suave: "#DCD8E3", texto: "#4A4456" },
  negro: { fuerte: "#14101A", suave: "#E3DFEA", texto: "#14101A" },
};

const t = {
  papel: "#EFEAF3",
  papelClaro: "#FBF8FD",
  tinta: "#14101A",
  rosa: tintas.rosa.fuerte,
  rosaSuave: tintas.rosa.suave,
  lila: tintas.lila.fuerte,
  lilaMedio: "#CDB4EE",
  lilaHondo: "#6A3CA6",
  gris: tintas.gris.fuerte,
};

const display = "'Bricolage Grotesque', 'Archivo Black', system-ui, sans-serif";
/* Used only for your name (nav + hero + sign-off), so it reads as a wordmark.
   Tenor Sans ships a single weight, so emphasis comes from size and
   letter-spacing rather than bolding — never fake it with font-weight.
   Want a different feel? Swap the first family below and change the
   matching line in the @import at the bottom of the file:
     'Tenor Sans'         — airy, no serifs, quietly modern (current)
     'Marcellus'          — delicate serif, roman inscription roots
     'Cormorant Garamond' — fine, high-contrast serif
     'Jost'               — geometric sans, bauhaus lineage        */
const titular = "'Tenor Sans', 'Marcellus', system-ui, sans-serif";
const titularPeso = 400;

const cuerpo = "'Space Grotesk', system-ui, sans-serif";
const mono = "'Space Mono', ui-monospace, monospace";

/* Sombra de tinta desplazada: el gesto que se repite en todo el sitio */
const registro = (color, d = 6) => `${d}px ${d}px 0 ${color}`;

/* ───────────────────────────────────────────────────────────
   3. PIEZAS
   ─────────────────────────────────────────────────────────── */

function Rotulo({ children, color = t.tinta }) {
  return (
    <span
      className="inline-block text-xs uppercase"
      style={{ fontFamily: mono, letterSpacing: "0.18em", color }}
    >
      {children}
    </span>
  );
}

function Boton({ children, href, fondo }) {
  const [presionado, setPresionado] = useState(false);
  return (
    <a
      href={href}
      onMouseDown={() => setPresionado(true)}
      onMouseUp={() => setPresionado(false)}
      onMouseLeave={() => setPresionado(false)}
      className="pieza inline-block px-6 py-3 text-base"
      style={{
        fontFamily: cuerpo,
        fontWeight: 700,
        background: fondo,
        color: t.tinta,
        border: `2px solid ${t.tinta}`,
        boxShadow: registro(t.tinta, presionado ? 2 : 6),
        transform: presionado ? "translate(4px, 4px)" : "none",
      }}
    >
      {children}
    </a>
  );
}

function Encabezado() {
  const enlaces = [
    ["Work", "#work"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between px-5 py-3 sm:px-10"
      style={{ background: t.papel, borderBottom: `2px solid ${t.tinta}` }}
    >
      <a
        href="#inicio"
        className="text-lg"
        style={{
          fontFamily: titular,
          fontWeight: titularPeso,
          letterSpacing: "0.06em",
          color: t.tinta,
        }}
      >
        {datos.nombre}
      </a>
      <nav className="flex gap-4 sm:gap-7">
        {enlaces.map(([nombre, ancla]) => (
          <a
            key={ancla}
            href={ancla}
            className="enlace text-xs uppercase sm:text-sm"
            style={{ fontFamily: mono, letterSpacing: "0.12em", color: t.tinta }}
          >
            {nombre}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Retrato() {
  const iniciales = datos.nombre
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className="pieza shrink-0 overflow-hidden"
      style={{
        width: "clamp(9rem, 24vw, 15rem)",
        aspectRatio: "1 / 1",
        borderRadius: "9999px",
        border: `2px solid ${t.tinta}`,
        boxShadow: registro(t.rosa, 8),
        background: t.lilaMedio,
        display: "grid",
        placeItems: "center",
      }}
    >
      {datos.foto ? (
        <img
          src={datos.foto}
          alt={`Portrait of ${datos.nombre}`}
          className="h-full w-full"
          style={{ objectFit: "cover", imageRendering: "pixelated" }}
        />
      ) : (
        <span
          style={{
            fontFamily: display,
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 7vw, 4rem)",
            letterSpacing: "-0.02em",
            color: t.tinta,
          }}
        >
          {iniciales}
        </span>
      )}
    </div>
  );
}

function Portada() {
  const palabras = datos.nombre.split(" ");
  const gama = ["#F0387F", null, "#8B58CC"]; /* null = contorno vacío */
  return (
    <section id="inicio" className="px-5 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-24">
      <div className="mx-auto max-w-5xl">
        <Rotulo>
          {datos.rol} · {datos.ubicacion}
        </Rotulo>

        {/* Portrait sits on top on mobile, beside the name on wider screens */}
        <div className="mt-6 flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
          <h1
            className="flex flex-col"
            style={{
              fontFamily: titular,
              fontWeight: titularPeso,
              lineHeight: 1.02,
              letterSpacing: "0.01em",
              fontSize: "clamp(2.9rem, 10vw, 6.2rem)",
            }}
          >
            {palabras.map((palabra, i) => {
              const color = gama[i % gama.length];
              return (
                <span
                  key={palabra}
                  style={{
                    color: color ?? "transparent",
                    WebkitTextStroke: color ? "none" : `1.25px ${t.tinta}`,
                    textShadow: color ? `3px 3px 0 ${t.tinta}` : "none",
                  }}
                >
                  {palabra}
                </span>
              );
            })}
          </h1>

          <Retrato />
        </div>

        <p
          className="mt-8 max-w-xl text-lg sm:text-xl"
          style={{ fontFamily: cuerpo, color: t.tinta, lineHeight: 1.55 }}
        >
          {datos.intro}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Boton href="#work" fondo={t.rosa}>
            See my work
          </Boton>
          <Boton href="#contact" fondo={t.papelClaro}>
            Get in touch
          </Boton>
        </div>
      </div>
    </section>
  );
}

function Cinta() {
  const fila = [...datos.stack, ...datos.stack];
  return (
    <div
      className="overflow-hidden py-4"
      style={{
        background: t.lilaHondo,
        borderTop: `2px solid ${t.tinta}`,
        borderBottom: `2px solid ${t.tinta}`,
      }}
    >
      <div className="cinta flex w-max gap-10 whitespace-nowrap">
        {fila.map((item, i) => (
          <span
            key={i}
            className="text-sm uppercase"
            style={{ fontFamily: mono, letterSpacing: "0.2em", color: t.papelClaro }}
          >
            {item} <span style={{ color: t.rosaSuave }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Construido({ item, ink }) {
  return (
    <article
      className="pieza flex flex-col p-5"
      style={{
        background: t.papelClaro,
        border: `2px solid ${t.tinta}`,
        boxShadow: registro(ink.fuerte, 5),
      }}
    >
      <h4
        className="text-xl"
        style={{
          fontFamily: display,
          fontWeight: 800,
          color: t.tinta,
          letterSpacing: "-0.01em",
        }}
      >
        {item.titulo}
      </h4>

      <p
        className="mt-2 flex-1 text-base"
        style={{ fontFamily: cuerpo, color: t.tinta, lineHeight: 1.55 }}
      >
        {item.resumen}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs"
            style={{
              fontFamily: mono,
              color: t.tinta,
              border: `1.5px solid ${t.tinta}`,
              background: ink.suave,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={item.url}
        className="enlace mt-5 self-start text-sm uppercase"
        style={{
          fontFamily: mono,
          letterSpacing: "0.14em",
          color: t.tinta,
          borderBottom: `2px solid ${ink.fuerte}`,
        }}
      >
        View project →
      </a>
    </article>
  );
}

function Puesto({ r }) {
  const ink = tintas[r.tinta] ?? tintas.rosa;
  return (
    <div className="py-10" style={{ borderBottom: `2px solid ${t.tinta}` }}>
      <div className="grid gap-3 sm:grid-cols-12 sm:gap-6">
        <div className="sm:col-span-3">
          <Rotulo color={ink.texto}>{r.periodo}</Rotulo>
        </div>

        <div className="sm:col-span-9">
          {/* Company first: the roles below all happened here */}
          <h3
            className="text-2xl sm:text-3xl"
            style={{
              fontFamily: display,
              fontWeight: 800,
              color: t.tinta,
              letterSpacing: "-0.02em",
            }}
          >
            {r.empresa}
          </h3>

          <ul className="mt-5 flex flex-col gap-6">
            {r.roles.map((rol) => (
              <li key={rol.puesto} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 shrink-0"
                  style={{
                    width: "0.6rem",
                    height: "0.6rem",
                    background: ink.fuerte,
                    border: `1.5px solid ${t.tinta}`,
                    borderRadius: "9999px",
                  }}
                />
                <div>
                  <p
                    className="text-lg"
                    style={{
                      fontFamily: display,
                      fontWeight: 800,
                      color: t.tinta,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {rol.puesto}
                    {rol.periodo && (
                      <span
                        className="ml-3 align-middle text-xs uppercase"
                        style={{
                          fontFamily: mono,
                          fontWeight: 400,
                          letterSpacing: "0.14em",
                          color: ink.texto,
                        }}
                      >
                        {rol.periodo}
                      </span>
                    )}
                  </p>
                  <p
                    className="mt-2 max-w-2xl text-base"
                    style={{ fontFamily: cuerpo, color: t.tinta, lineHeight: 1.6 }}
                  >
                    {rol.detalle}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* What came out of this role, if anything shippable did */}
          {r.construido.length > 0 && (
            <div className="mt-8">
              <Rotulo color={ink.texto}>What I shipped</Rotulo>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                {r.construido.map((item) => (
                  <Construido key={item.titulo} item={item} ink={ink} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Trabajo() {
  return (
    <section
      id="work"
      className="px-5 py-20 sm:px-10 sm:py-28"
      style={{ background: t.lilaMedio, borderBottom: `2px solid ${t.tinta}` }}
    >
      <div className="mx-auto max-w-5xl">
        <Rotulo>Work</Rotulo>
        <h2
          className="mt-3 text-4xl sm:text-6xl"
          style={{
            fontFamily: display,
            fontWeight: 800,
            color: t.tinta,
            letterSpacing: "-0.03em",
          }}
        >
          Where I have worked
        </h2>

        <div className="mt-10" style={{ borderTop: `2px solid ${t.tinta}` }}>
          {datos.trabajo.map((r) => (
            <Puesto key={r.empresa} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Formacion() {
  const f = datos.formacion;
  return (
    <section id="education" className="px-5 py-20 sm:px-10 sm:py-24" style={{ background: t.papel }}>
      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-12">
        <div className="sm:col-span-5">
          <Rotulo>Education</Rotulo>
          <h2
            className="mt-3 text-3xl sm:text-4xl"
            style={{
              fontFamily: display,
              fontWeight: 800,
              color: t.tinta,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            {f.titulo}
          </h2>
          <p className="mt-3 text-base" style={{ fontFamily: mono, color: t.tinta }}>
            {f.institucion} · {f.periodo}
          </p>
          <p
            className="mt-4 text-base"
            style={{ fontFamily: cuerpo, color: t.tinta, lineHeight: 1.6 }}
          >
            {f.detalle}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {datos.idiomas.map((idioma) => (
              <span
                key={idioma}
                className="px-2 py-1 text-xs"
                style={{
                  fontFamily: mono,
                  color: t.tinta,
                  border: `1.5px solid ${t.tinta}`,
                  background: t.rosaSuave,
                }}
              >
                {idioma}
              </span>
            ))}
          </div>
        </div>

        <div className="sm:col-span-7">
          <Rotulo>Courses</Rotulo>
          <ul className="mt-5" style={{ borderTop: `2px solid ${t.tinta}` }}>
            {f.cursos.map((curso) => (
              <li
                key={curso}
                className="fila py-4 text-base"
                style={{
                  fontFamily: cuerpo,
                  color: t.tinta,
                  borderBottom: `2px solid ${t.tinta}`,
                  lineHeight: 1.5,
                }}
              >
                {curso}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Logo({ nombre }) {
  const trazos = {
    github:
      "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    linkedin:
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={trazos[nombre]} />
    </svg>
  );
}

function Contacto() {
  return (
    <section
      id="contact"
      className="px-5 py-24 text-center sm:px-10 sm:py-32"
      style={{ background: t.rosa }}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <Rotulo>Contact</Rotulo>

        <h2
          className="mt-5"
          style={{
            fontFamily: display,
            fontWeight: 800,
            color: t.tinta,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            fontSize: "clamp(2rem, 5.5vw, 3.4rem)",
          }}
        >
          Find me here
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {datos.contacto.enlaces.map((e) => (
            <a
              key={e.nombre}
              href={e.url}
              target="_blank"
              rel="noreferrer"
              aria-label={e.nombre}
              title={e.nombre}
              className="pieza grid place-items-center"
              style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "9999px",
                background: t.papelClaro,
                color: t.tinta,
                border: `2px solid ${t.tinta}`,
                boxShadow: registro(t.tinta, 5),
              }}
            >
              <Logo nombre={e.icono} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer
      className="flex flex-col gap-2 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10"
      style={{ background: t.tinta }}
    >
      <span
        className="text-xs uppercase"
        style={{ fontFamily: mono, letterSpacing: "0.18em", color: t.papel }}
      >
        {datos.nombre} — {new Date().getFullYear()}
      </span>
      <span
        className="text-xs uppercase"
        style={{ fontFamily: mono, letterSpacing: "0.18em", color: t.rosaSuave }}
      >
        Built by hand, no template
      </span>
    </footer>
  );
}

/* ───────────────────────────────────────────────────────────
   4. PÁGINA
   ─────────────────────────────────────────────────────────── */
export default function SitioPersonal() {
  return (
    <div className="min-h-screen" style={{ background: t.papel }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Tenor+Sans&family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap');

        html { scroll-behavior: smooth; }

        .pieza { transition: transform 140ms ease, box-shadow 140ms ease; }
        .pieza:hover { transform: translate(-3px, -3px); }

        .enlace { transition: opacity 140ms ease; }
        .enlace:hover { opacity: 0.6; }

        .fila { transition: background 140ms ease; }
        .fila:hover { background: rgba(255, 77, 157, 0.28); }

        a:focus-visible, button:focus-visible {
          outline: 3px solid ${t.tinta};
          outline-offset: 3px;
        }

        @keyframes correr {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .cinta { animation: correr 28s linear infinite; }

        /* Textura de impresión */
        .grano {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 40;
          opacity: 0.2;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .cinta { animation: none; }
          .pieza, .pieza:hover, .enlace, .fila { transition: none; transform: none; }
        }
      `}</style>

      <div className="grano" aria-hidden="true" />

      <Encabezado />
      <main>
        <Portada />
        <Cinta />
        <Trabajo />
        <Formacion />
        <Contacto />
      </main>
      <Pie />
    </div>
  );
}
