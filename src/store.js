import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    works: [
      {
        title: "The Caf",
        meta: "content managment",
        subtitle: "Good food, better coffee",
        technology: "Node.js, Express, Vue.js, MongoDB",
        description: "",
        year: "2018",
        image: require("./assets/the-caf-main.jpg"),
        route: "thecaf",
        tag: "the-caf",
        active: true
      },
      {
        title: "Sandy Pages Books",
        meta: "E-commerce",
        year: "2018",
        team: "Turina Marchant",
        subtitle: "The Book lovers Haven",
        description:
          "Sandy Pages Books is a book lovers haven featuring a wide variety of fiction and non-fiction titles with a special focus on childrens’ literature. A select range of locally crafted and exclusive gifts and puzzles are also on offer. Sandy Pages Books came to me with the needs to upgrade their existing website with a more modern approach. An E-commerce solution was needed as Sandy Pages books partnered with local schools to provide an outlet for students to buy books during the schools book fest week.",
        image: require("./assets/shamini.jpg"),
        route: "sandypagesbooks",
        technology: "Wordpress, Woo-commerce",
        tag: "sandy-pages-books",
        active: false
      },
      {
        title: "Georgia Stevenson",
        meta: "Website / E-commerce",
        subtitle: "A handcrafted, local solution",
        message:
          "Georgia is a maker, in mediums of clay, twine and paper. Her aim is to surround people with objects that hold meaning and thoughtfulness in their design. A move away from manufactured, mass produced products to a handcrafted, local solution. Georgia’s ceramics are created with form and texture as the focus, paired with simplistic use of glazes. The materiality and tactility of the clay is the emphasis.",
        image: require("./assets/theCaf.jpg"),
        active: false,
        route: "georgiastevenson",
        technology: "Node.js, Express, Vue.js, MongoDB, Stripe"
      },
      {
        title: "Taroom Welding Worx",
        meta: "Website / Content Managment",
        year: "2018",
        team: "N/A",
        subtitle:
          '"Tarooms best quality metal manufacturor; catering to your needs."',
        description: "",
        image: require("./assets/theCaf.jpg"),
        active: false,
        route: "weldingworx",
        commission: "Freelance",
        technology: "Node.js, Express, Vue.js, MongoDB"
      }
    ]
  },
  mutations: {
    selected(state, payload) {
      state.works[0].active = false;
      state.works[1].active = false;
      state.works[2].active = false;
      state.works[3].active = false;
      state.works[payload].active = true;
    }
  }
});
