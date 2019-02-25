import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    menuActive: false,
    works: [
      {
        commercial: [
          {
            title: "The Caf",
            image: require("./assets/thecaf.png"),
            description:
              "I was tasked to redesign their existing website to better reflect their current in house personality while giving them the ability to manage content.  UX/UI design was created through sketch along with collaboration with the client.",
            url: "http://thecafcoolum.com",
            tag: [
              { name: "Wordpress" },
              { name: "Theme customization" },
              { name: "HTML" },
              { name: "CSS" },
              { name: "Bootstrap" },
              { name: "cPanel" }
            ]
          },
          {
            title: "Sandy Pages Books",
            image: require("./assets/sandypagesbooks.png"),
            url: "https://sandypagesbooks.com.au",
            description:
              "I was tasked to upgrade their existing website with a more modern approach. An E-commerce solution was required as Sandy Pages books partnered with local schools to provide an outlet for students to purchase books during the schools book fest week.",
            tag: [
              { name: "E-commerce" },
              { name: "Wordpress" },
              { name: "Theme customization" },
              { name: "HTML" },
              { name: "CSS" },
              { name: "jQuery" },
              { name: "Bootstrap" },
              { name: "cPanel" },
              { name: "SSL" }
            ]
          },
          {
            title: "North Shore Realty",
            image: require("./assets/northshorerealty.png"),
            url: "https://sandypagesbooks.com.au",
            description:
              "I was tasked to upgrade their existing website with a more modern approach. An E-commerce solution was required as Sandy Pages books partnered with local schools to provide an outlet for students to purchase books during the schools book fest week.",
            tag: [{ name: "HTML" }, { name: "CSS" }, { name: "Email" }]
          }
        ]
      },
      {
        fullStack: [
          {
            title: "Busy Brisbane",
            image: require("./assets/busybrisbane.png"),
            description:
              "I was tasked to redesign their existing website to better reflect their current in house personality while giving them the ability to manage content.  UX/UI design was created through sketch along with collaboration with the client.",
            url: "http://thecafcoolum.com",
            tag: [
              { name: "Vuetify" },
              { name: "Vuex" },
              { name: "Express" },
              { name: "Postgresql" },
              { name: "JWT" }
            ]
          },
          {
            title: "The Caf (remade)",
            image: require("./assets/sandypagesbooks.png"),
            url: "https://sandypagesbooks.com.au",
            description:
              "I decided to remake The Caf's website with a different design and drop wordpress. Content is managed from within the admin portal where full CRUD permissions are available.",
            tag: [
              { name: "Vue" },
              { name: "Vuex" },
              { name: "Express" },
              { name: "MongoDB" },
              { name: "JWT" },
              { name: "facebook API" },
              { name: "Bulma" }
            ]
          },
          {
            title: "Portfolio",
            image: require("./assets/portfolio.png"),
            url: "https://sandypagesbooks.com.au",
            description:
              "I was tasked to upgrade their existing website with a more modern approach. An E-commerce solution was required as Sandy Pages books partnered with local schools to provide an outlet for students to purchase books during the schools book fest week.",
            tag: [{ name: "HTML" }, { name: "CSS" }, { name: "Email" }]
          }
        ]
      },
      {
        frontEnd: [
          {
            title: "Welding Worx",
            image: require("./assets/busybrisbane.png"),
            description:
              "I was tasked to redesign their existing website to better reflect their current in house personality while giving them the ability to manage content.  UX/UI design was created through sketch along with collaboration with the client.",
            url: "http://thecafcoolum.com",
            tag: [
              { name: "Vuetify" },
              { name: "Vuex" },
              { name: "Express" },
              { name: "Postgresql" },
              { name: "JWT" }
            ]
          },
          {
            title: "The Caf (remade)",
            image: require("./assets/sandypagesbooks.png"),
            url: "https://sandypagesbooks.com.au",
            description:
              "I decided to remake The Caf's website with a different design and drop wordpress. Content is managed from within the admin portal where full CRUD permissions are available.",
            tag: [
              { name: "Vue" },
              { name: "Vuex" },
              { name: "Express" },
              { name: "MongoDB" },
              { name: "JWT" },
              { name: "facebook API" },
              { name: "Bulma" }
            ]
          },
          {
            title: "Portfolio",
            image: require("./assets/portfolio.png"),
            url: "https://sandypagesbooks.com.au",
            description:
              "I was tasked to upgrade their existing website with a more modern approach. An E-commerce solution was required as Sandy Pages books partnered with local schools to provide an outlet for students to purchase books during the schools book fest week.",
            tag: [{ name: "HTML" }, { name: "CSS" }, { name: "Email" }]
          }
        ]
      }
    ]
  },
  mutations: {}
});
