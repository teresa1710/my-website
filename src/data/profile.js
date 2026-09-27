/* Everything personal lives here. Edit this file, not the components. */

export const profile = {
  name: "Teresa Tavernelli",
  /* Lives in public/, so swap the file and keep the path. */
  photo: "/portrait.png",
  role: "Web developer",
  location: "Data Analyst",
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
  work: [
    {
      company: "Akdemia",
      period: "2021 - 2026",
      ink: "pink",
      roles: [
        {
          title: "Full-stack web developer",
          period: "2021 - 2026",
          summary:
            "I lead projects end to end, from in-depth analysis through to release. Day to day that means building complex multi-join queries, developing and managing Rails background jobs, and optimizing database interactions so the app stays fast and responsive under load. I also implemented CRUD operations, redesigned views, and bar-chart visualizations built on aggregated metrics.",
        },
        {
          title: "Thesis supervisor and tutor",
          period: "2023 - 2024",
          summary:
            "Guided four students through their graduation projects on Data Lake and Big Data implementations, bridging the university and Akdemia so they finished with practical AWS experience alongside the degree.",
        },
      ],
      shipped: [],
    },
    {
      company: "Tecnisistema Lanwork Place",
      period: "2019 — 2021",
      ink: "grey",
      roles: [
        {
          title: "Front-end web developer",
          summary:
            "Owned two company websites end to end, from AdobeXD designs through to deployment, and handled DNS management for both.",
        },
      ],
      shipped: [
        {
          name: "Tecnisistema Web",
          blurb:
            "Built from scratch: AdobeXD for design, HTML and CSS for structure and styling, Bootstrap for responsive layout.",
          tags: ["HTML/CSS", "Bootstrap", "AdobeXD"],
          url: "#",
        },
        {
          name: "Tecnicargo Web",
          blurb:
            "Second site for the same group, with jQuery driving the interactive pieces and a tighter turnaround.",
          tags: ["jQuery", "HTML/CSS", "Responsive"],
          url: "#",
        },
      ],
    },
  ],
  /* One entry per degree, most recent first. */
  education: [
    {
      degree: "MSc in Business Analytics",
      school: "Dublin City University",
      location: "Dublin, Ireland",
      period: "2026 — in progress",
      detail: "",
    },
    {
      degree: "BSc in Computer Science",
      school: "Universidad Central de Venezuela",
      location: "",
      period: "2010 — 2018",
      detail:
        "Thesis: a business intelligence solution based on a Big Data architecture for the Web Archive of Venezuela.",
    },
  ],
  courses: [
    "React — Hooks, Router, Redux, Next (Udemy, 2023)",
    "jQuery: novice to expert (Udemy, 2022)",
    "Professional Web Design, complete practical course (Udemy, 2020)",
    "Advanced English — British Council Caracas (2018 — 2023)",
  ],
  languages: ["Spanish — native", "English — C2", "Italian"],
  contact: {
    /* `icono` picks the logo drawn in the Logo component below */
    links: [
      { name: "GitHub", icon: "github", url: "https://github.com/teresa1710" },
      {
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://www.linkedin.com/in/teresa-tavernelli-99707a184/",
      },
    ],
  },
}
