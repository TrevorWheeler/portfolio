import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);
// import Api from './services/Api';
const url = 'http://localhost:8081/api';
export default new Vuex.Store({
	//plugin to persist state
	plugins: [ createPersistedState() ],
	state: {
		username: null,
		id: null,
		token: null,
		loggedIn: false,
		loading: false,
		error: null,
		projects: []
	},
	mutations: {
		setProjects(state, payload) {
			state.projects = payload;
		},
		setLoading(state, payload) {
			state.loading = payload;
		},
		setToken(state, token) {
			state.token = token;
			if (token) {
				state.loggedIn = true;
				localStorage.token = token;
			} else {
				state.loggedIn = false;
			}
		},
		setUserId(state, id) {
			state.id = id;
		},
		setUser(state, username) {
			state.username = username;
		}
	},

	actions: {
		loadProjects({ commit }) {
			commit('setLoading', true);
			axios
				.get(url + '/projects')
				.then((response) => {
					console.log(response);
					const projects = [];
					const data = response.data;
					for (let key in data) {
						projects.push({
							id: data[key]._id,
							name: data[key].name,
							description: data[key].description,
							image: data[key].image,
							tags: data[key].tags,
							link: data[key].link,
							repo: data[key].repo
						});
					}
					commit('setProjects', projects);
					commit('setLoading', false);
				})
				.catch((error) => {
					console.log(error);
					commit('setLoading', false);
				});
		},

		createProject({ commit }, payload) {
			const project = {
				name: payload.name,
				description: payload.description,
				image: payload.image,
				commercial: payload.commercial,
				fullStack: payload.fullStack,
				frontEnd: payload.frontEnd,
				backEnd: payload.backEnd,
				link: payload.link,
				url: payload.url,
				tags: payload.tags
			};

			axios
				.post(url + '/users/' + this.state.id + '/projects', project, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + this.state.token
					}
				})
				.then((response) => {
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		editProject({ commit }, payload) {
			commit('setLoading', true);
			console.log(payload);
			const updateObj = {};
			if (payload.name) {
				updateObj.name = payload.name;
			}

			axios
				.put('http://localhost:8081/api/users/' + this.state.id + '/projects/' + payload.id, payload, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + this.state.token
					}
				})
				.then(() => {
					commit('setLoading', false);
				})
				.catch((error) => {
					console.log(error);
					commit('setLoading', false);
				});
		},
		deleteProject: function({ dispatch }, payload) {
			console.log(payload);
			axios
				.delete('http://localhost:8081/api/users/' + this.state.id + '/projects/' + payload, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + this.state.token
					}
				})
				.then(() => dispatch('loadProjects', payload))
				.catch(function(error) {
					console.log(error);
				});
		}
	},
	getters: {
		loadProject(state) {
			return (itemId) => {
				return state.projects.filter((item) => {
					return item.id === itemId;
				});
			};
		}
	}
});
