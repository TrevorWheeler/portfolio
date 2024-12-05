<template>
  <section id="projects-section-container">
    <h2 class="projects-section-title">Professional & Personal Projects</h2>
    <div class="container">
      <div class="card" v-for="(project, index) in projects" :key="index" data-aos="fade-up" data-aos-duration="500">
        <div class="project-top">
          <h3 class="project-name">{{ project.name }}</h3>
          <img class="project-img" :data-src="'images/' + project.image" :alt="project.name"
            :src="'images/' + project.image">
          <p class="project-description">{{ project.description }}</p>
        </div>
        <div class="project-bottom">
          <div class="project-tag-container">
            <div class="project-tag" v-for="(tag, index) in project.tags" :key="index"> <span>{{ tag }}</span></div>
          </div>
          <div class="project-links-container">
            <a :href="project.link" target="_blank" rel="noreferrer" class="project-link project-link-live"
              v-bind:class="{ inactive: project.link === '' }">Live Site
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg></a>
            <a :href="project.repo" target="_blank" rel="noreferrer" class="project-link project-link-github"
              v-bind:class="{ inactive: project.repo === '' }">{{ project.repo !== '' ? 'View Repository' : 'Private'
              }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';
interface Project {
  name: string,
  description: String;
  tags: string[];
  image: string;
  repo: string;
  link: string;
  type: PROJECT_CATEGORY;
}

enum PROJECT_CATEGORY {
  COMMERCIAL = 'COMMERCIAL_PROJECTS',
  FULL_STACK = 'FULL_STACK',
  FRONT_END = 'FRONT_END',
  BACK_END = 'BACK_END',
  BOT_APPLICATION = 'BOT_APPLICATION'
}


const projects: ComputedRef<Project[]> = computed(() => {
  return [
    {
      name: "GoDesta",
      description: "During my five years at GoDesta, I played a key role in developing and enhancing a comprehensive transport logistics platform, guiding the project from inception to client onboarding. I worked across both the frontend and backend, building a robust, scalable system. I implemented essential features, including job booking, real-time tracking, and integrated accounting and invoicing, while managing complex third-party integrations. In addition to my technical responsibilities, I handled aspects of project management, delivering high-quality solutions that significantly improved operational efficiency and client engagement.",
      tags: ["Apache Kafka", "Java", "Spring Framework", "TypeScript", "Node.js", "JavaScript", "Vue.js", "HTML", "CSS", "webpack", "MongoDB", "Redis", "Jasper Reports", "Email", "TeamCity", "Docker", "Rancher", "Atlassian products"],
      image: "GoDesta.webp",
      repo: "",
      link: "https://godesta.com.au/",
      type: PROJECT_CATEGORY.COMMERCIAL
    },
    {
      name: "Trevy",
      description: "Trevy is a personal passion project aimed at creating a comprehensive business management solution to streamline operations across various service industries. Currently in early development, Trevy features a landing page, user sign-up, operations dashboard, client management, invoicing, interactive maps powered by Mapbox and Stripe payment subscriptions. This project highlights my expertise in modern web development and my commitment to delivering high-quality, maintainable, and visually appealing applications.",
      image: "trevy-animation.webp",
      tags: ["HTML5", "CSS3", "Vite", "Vue.js", "Go", "Echo", "Dart", "Flutter", "Stripe", "AWS SES", "AWS S3", "MinIO", "Elasticsearch", "Mapbox", "MongoDB"],
      repo: "",
      link: "",
      type: PROJECT_CATEGORY.COMMERCIAL
    },
    {
      name: "Discord Jukebox",
      description: "Discord Jukebox is a feature-rich Discord bot enhancing communal music experiences. Developed before Spotify Sessions, it allows users to queue and manage songs from various sources, including YouTube, directly within Discord. The bot pipes audio through the microphone input, enabling real-time listening for all users. With commands for playlist management and additional fun features, Discord Jukebox showcases skills in bot development, API integration, and creating engaging community tools, though it's now largely deprecated due to Spotify's introduction of shared listening features.",
      image: "discord-jukebox.webp",
      tags: ["Bot Application", "Node.js", "Typescript", "Puppeteer", "Discord.js", "FFmpeg"],
      repo: "https://github.com/TrevorWheeler/discord-jukebox",
      link: "",
      type: PROJECT_CATEGORY.BOT_APPLICATION
    },
    {
      name: "Koala Cuts",
      description: "Koala Cuts is a fictional business website created as a fun project to explore and showcase my web development and design skills. Designed for an imaginary landscaping service, the site offers a clear and inviting overview of various services to potential clients. This project focused on experimenting with Lerna and monorepos to efficiently manage and scale multiple packages within a single codebase. I also created all vector designs and the logo using Figma, demonstrating my ability to handle both development and design aspects to build robust, maintainable, and visually appealing web applications.",
      image: "koala-cuts.webp",
      tags: ["Monorepo", "Lerna", "Node.js", "TypeScript", "Vue.js", "Fastify", "HTML5", "CSS3", "Figma"],
      repo: "https://github.com/TrevorWheeler/koala-cuts",
      link: "",
      type: PROJECT_CATEGORY.COMMERCIAL
    },
    {
      name: "Forum",
      description: "Forum is a dynamic project designed to quickly spin up new forums as needed. The platform supports both anonymous users and account creation, providing flexibility in user engagement. Posts on the forum are short-lived, ensuring that the content remains fresh and the website can adapt to changing discussions. Drawing inspiration from various famous forum and social media websites, I aimed to create an intuitive and user-friendly experience. This project demonstrates my ability to integrate features from different platforms, innovate on traditional forum structures, and develop a versatile and responsive web application.",
      image: "forum-generator.webp",
      tags: ["TypeScript", "Vue.js", "Node.js", "Express.js", "HTML", "CSS"],
      repo: "https://github.com/TrevorWheeler/forum-server",
      link: "",
      type: PROJECT_CATEGORY.FULL_STACK
    },

    {
      name: "ShotBall",
      description: "Shot Ball is a 2D multiplayer online space shooting game developed in Go. The game features real-time combat in a dynamic space environment, where players can compete against each other using a click to shoot mechanic. Developing Shot Ball involved leveraging the Go programming language to create a responsive and engaging multiplayer experience. This project demonstrates my skills in game development, network programming, and real-time interaction, showcasing the ability to create complex and entertaining applications.",
      image: "shotball.webp",
      tags: ["TypeScript", "Vue.js", "Node.js", "Express.js", "HTML", "CSS", "Online Multiplayer"],
      repo: "https://github.com/TrevorWheeler/shotball-server",
      link: "",
      type: PROJECT_CATEGORY.FULL_STACK
    },
    {
      name: "The Caf",
      description: "I was tasked with updating an existing WordPress website for The Caf, a vibrant coffee shop in Coolum Beach. The goal was to create a dynamic and engaging online presence that showcased the café's events and menu. Throughout the project, I gained deeper expertise in WordPress and web design. The client was very pleased with the outcome, noting a significant improvement over their outdated previous website.",
      image: "thecaf.webp",
      tags: ["jQuery", "Wordpress", "HTML5", "CSS3", "Bootstrap", "Figma"],
      repo: "",
      link: "",
      type: PROJECT_CATEGORY.COMMERCIAL
    },
    {
      name: "Sandy Pages Books",
      description: "I was tasked to upgrade their existing website with a more modern approach. An E-commerce solution was required as Sandy Pages books partnered with local schools to provide an outlet for students to purchase books during the schools book fest week.",
      tags: ["Wordpress", "Woo-commerce", "cPanel", "HTML5", "CSS3", "Bootstrap", "jQuery", "Email"],
      image: "sandypagesbooks.webp",
      repo: "",
      link: "",
      type: PROJECT_CATEGORY.COMMERCIAL
    },
    {
      name: "North Shore Realty",
      description: "I was tasked with creating professional and cohesive email signatures for North Shore Realty, a real estate company in Coolum Beach. Utilizing HTML and CSS, I designed email signatures that were not only visually appealing but also cross-compatible with major email providers such as Outlook and Gmail. Ensuring consistency across the organization, the signatures were easily applied to their Outlook email clients. This project involved meticulous attention to detail to guarantee that the design rendered correctly across different platforms, enhancing the company's branding and communication efforts.",
      tags: ["HTML", "CSS", "Email"],
      image: "northshorerealty.webp",
      repo: "",
      link: "",
      type: PROJECT_CATEGORY.COMMERCIAL
    },
    {
      name: "HTML5 Video Player",
      description: "I developed a lightweight, customizable HTML5 video player using pure HTML and JavaScript, featuring controls for play, pause, volume, and fullscreen. This project showcases my proficiency in HTML5 and JavaScript, and my ability to create standalone web components for website integration.",
      image: "html5-video-player.webp",
      tags: ["Javascript", "HTML", "CSS"],
      repo: "https://github.com/TrevorWheeler/html5-video-player",
      link: "",
      type: PROJECT_CATEGORY.FRONT_END
    },
    {
      name: "Busy Brisbane",
      description: "Busy Brisbane is a personal hobby project that helps users find and create activities in Brisbane, QLD, with full CRUD functionality for easy activity management. This project introduced me to styled components and Vuetify, enhancing my front-end skills. I developed it from scratch, handling both front-end and back-end tasks, showcasing my expertise in user-friendly web applications and design.",
      image: "busybrisbane.webp",
      tags: ["HTML", "CSS", "vue.js", "Node.js", "Express.js", "PostgreSQL"],
      repo: "https://github.com/TrevorWheeler/busy-brisbane",
      link: "",
      type: PROJECT_CATEGORY.FULL_STACK
    },
    {
      name: "Guess The Colour",
      description: "Guess the Colour is a learning project I developed to enhance my understanding of RGB color values and improve my programming skills. The game presents users with RGB values and challenges them to guess the correct color from a set of options. This project was instrumental in reinforcing my knowledge of color theory and web development fundamentals.",
      image: "guess-the-colour.webp",
      tags: ["Javascript", "HTML", "CSS"],
      repo: "https://github.com/TrevorWheeler/guess-the-colour",
      link: "",
      type: PROJECT_CATEGORY.FRONT_END
    },
    {
      name: "Score Keeper",
      description: "Score-Keeper is an application designed to help users easily keep track of scores in turn-based games. The app provides a simple and intuitive interface for recording and managing scores, ensuring that players can focus on the game without worrying about keeping accurate tallies. Developed to enhance my skills in app design and user experience, this project showcases my ability to create practical and user-friendly applications.",
      image: "score-keeper.webp",
      tags: ["Javascript", "HTML", "CSS"],
      repo: "https://github.com/TrevorWheeler/score-keeper",
      link: "",
      type: PROJECT_CATEGORY.FRONT_END
    },
    {
      name: "Kerbside City",
      description: "Kerbside City is an application I developed to simplify the process of finding kerbside pickup dates for residents in Brisbane. Frustrated with the user experience on the council website, I created an intuitive platform where users can simply type in their suburb and instantly receive the relevant pickup dates. The application crawls the council website to gather the necessary information and presents it in a user-friendly format. This project not only addressed a common pain point for residents but also showcases my skills in web scraping, data presentation, and improving user experience.",
      image: "kerbside-city.webp",
      tags: ["SSR", "Nuxt.js", "TypeScript", "Node.js", "Express.js", "HTML", "CSS"],
      repo: "https://github.com/TrevorWheeler/kerbside-city",
      link: "",
      type: PROJECT_CATEGORY.FULL_STACK
    },
    {
      name: "Float Out",
      description: "Float Out is an application I developed to streamline cash handling tasks during my time working in hospitality. The app calculates the difference between the float amount and profits made in a straightforward, linear manner. Instead of manually adding up each denomination of coins and notes, users can simply input the total number of each denomination, and the app automatically tallies the amounts. This tool significantly simplifies the process of reconciling the cash drawer, allowing users to quickly determine the amount to take out of the float. 'Float Out' highlights my ability to identify practical problems in everyday tasks and develop efficient, user-friendly solutions to address them.",
      image: "floatout.webp",
      tags: ["Javascript", "HTML", "CSS"],
      repo: "https://github.com/TrevorWheeler/float-out",
      link: "",
      type: PROJECT_CATEGORY.FRONT_END
    },

    {
      name: "CRUD Boilerplate",
      description: "CRUD Boilerplate is a deprecated starter template for backend Node.js applications, designed to streamline the development process. This boilerplate includes built-in JWT authentication for secure user management and a simple projects route to demonstrate basic CRUD operations. The project served as a foundational template for quickly setting up new backend applications, ensuring consistent structure and best practices. Although it is no longer actively maintained, CRUD Boilerplate highlights my proficiency in Node.js, authentication mechanisms, and creating reusable code for efficient project initialization.",
      image: "CRUDapi.webp",
      tags: ["Javascript", "Node.js", "Express.js", "HTML", "CSS"],
      repo: "https://github.com/TrevorWheeler/express-mongodb-crud-jwt",
      link: "",
      type: PROJECT_CATEGORY.BACK_END
    },
  ]
})
</script>

<style lang="scss">
#projects-section-container {
  padding: 7em 1em 0;
  background-color: var(--primary);

  @media only screen and (max-height: 450px) {
    padding: 7em 4em 0;
  }

  @media only screen and (min-width: 1366px) {
    padding: 10em 1.5em 0;
  }

  @media only screen and (min-width: 1650px) {
    padding: 15em 1.5em 0;
  }

  .projects-section-title {
    font-weight: 600;
    font-size: 2.4em;
    color: var(--text-dark);
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 70px 0;

    @media only screen and (min-width: 1366px) {
      margin: 0 0 100px 0;
      font-size: 2.8em;
    }

    @media only screen and (min-width: 1650px) {
      margin: 0 0 150px 0;
    }
  }

  h4 {
    color: var(--primary);
  }

  .inactive {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
  }

  .container {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    @media only screen and (min-width: 1280px) {
      width: 1255px;
      justify-content: space-between;
      margin: 0 auto;
    }

    @media only screen and (min-width: 1650px) {
      width: 1450px;
    }

    .card {
      width: 100%;
      margin: 0 0 7em 0;
      display: flex;
      flex-direction: column;
      background-color: var(--primary);
      position: relative;
      justify-content: space-between;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2);

      &:hover {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.24);
      }

      @media only screen and (min-width: 768px) {
        width: calc(50% - 0.5em);
        margin: 0 0 7em;

        &:nth-child(odd) {
          margin-right: 0.5em;
        }

        &:nth-child(even) {
          margin-left: 0.5em;
        }
      }

      @media only screen and (min-width: 1280px) {
        width: 397px;

        &:nth-child(odd) {
          margin-right: 0;
        }

        &:nth-child(even) {
          margin-left: 0;
        }
      }

      @media only screen and (min-width: 1366px) {
        margin: 0 0 10em 0;
      }

      @media only screen and (min-width: 1650px) {
        margin: 0 0 15em 0;
        width: 450px;
      }

      .project-name {
        font-size: 2em;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        background-color: var(--secondary);
        margin: 0;
        line-height: 60px;
        color: var(--text-light);
        background-image: radial-gradient(circle at 2px 2px,
            rgba(255, 255, 255, 0.05) 1px,
            transparent 0);
        background-size: 20px 20px;
      }

      .project-img {
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
        object-position: top;
        object-fit: cover;
      }

      .project-description {

        padding: 16px;
        font-size: 1.8em;
        font-weight: 400;
      }

      .project-tag-container {
        padding: 0 16px 16px 16px;

        .project-tag {
          border: 1px solid var(--secondary);
          display: inline-flex;
          padding: 6px 8px 4px;
          margin: 0 4px 12px 0;
          border-radius: 4px;

          span {
            font-size: 1.45em;

            font-weight: 600;
            line-height: 1.3rem;
          }
        }
      }

      .project-links-container {
        display: flex;
        justify-content: space-between;
        padding: 2em 20px;
        background-color: var(--secondary);
        background-image: radial-gradient(circle at 2px 2px,
            rgba(255, 255, 255, 0.05) 1px,
            transparent 0);
        background-size: 20px 20px;

        .project-link {
          color: var(--accent);
          text-decoration: none;
          font-size: 1.7em;
          text-transform: uppercase;
          font-weight: 600;
          position: relative;
          display: inline-block;

          svg {
            position: absolute;
            right: -23px;
            top: -0.08em;
            width: 18px;
            fill: var(--accent);
          }
        }
      }
    }
  }
}
</style>
