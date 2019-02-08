import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    menuActive: false,
    works: [
      {
        title: "The Caf",
        website: "http://thecafcoolum.com",
        meta: "Content Managment",
        description:
          "The Caf in Coolum Beach is one the most popular cafes in the region, sporting second place in Trip Advisors best restaurants in the area. I was tasked to redesign their existing website to better reflect their current in house personality while giving them the ability to manage content.  UX/UI design was created through sketch along with collaboration with the client.",
        image: require("./assets/the-caf-home.jpg"),
        route: "thecaf",
        active: false
      },
      {
        title: "Sandy Pages Books",
        website: "https://sandypagesbooks.com.au",
        meta: "E-commerce",
        description:
          "Sandy Pages Books is a book lovers haven featuring a wide variety of fiction and non-fiction titles with a special focus on children's literature. A select range of locally crafted and exclusive gifts and puzzles are also on offer. Sandy Pages Books came to me with the need to upgrade their existing website with a more modern approach. An E-commerce solution was required as Sandy Pages books partnered with local schools to provide an outlet for students to purchase books during the schools book fest week.",
        image: require("./assets/sandy-pages-books-home.jpg"),
        imageTwo: require("./assets/sandy-pages-books-shop.jpg"),
        secondImage: true,
        route: "sandypagesbooks",
        active: false
      }
    ]
  },
  mutations: {
    selected(state, payload) {
      state.works[0].active = false;
      state.works[1].active = false;
      state.works[payload].active = true;
    },
    thecaf(state) {
      state.works[1].active = false;
      state.works[0].active = true;
    },
    sandyPagesBooks(state) {
      state.works[0].active = false;
      state.works[1].active = true;
    },
    menuState(state) {
      state.menuActive = !state.menuActive;
    },
    menuStateFalse(state) {
      state.menuActive = false;
    }
  }
});
