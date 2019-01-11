import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    works: [
      {
        title: "The Caf",
        website: "thecafcoolum.com",
        description:
          "The Caf in Coolum Beach is one the most popular cafes in the region, sporting second place in Trip Advisors best restraunts in the area. I was tasked to redesign their existing website to better reflect their current in house personality while giving them the abitlity to manage changing content.  UX/UI design was created through sketch along with collaboration with the client.",
        image: require("./assets/caf-website.jpg"),
        route: "thecaf",
        active: false
      },
      {
        title: "Sandy Pages Books",
        website: "sandypagesbooks.com.au",
        description:
          "Sandy Pages Books is a book lovers haven featuring a wide variety of fiction and non-fiction titles with a special focus on childrens’ literature. A select range of locally crafted and exclusive gifts and puzzles are also on offer. Sandy Pages Books came to me with the needs to upgrade their existing website with a more modern approach. An E-commerce solution was needed as Sandy Pages books partnered with local schools to provide an outlet for students to buy books during the schools book fest week.",
        // image: require("./assets/shamini.jpg"),
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
    }
  }
});
