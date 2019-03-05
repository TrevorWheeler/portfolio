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
		},
		updateProject(state, payload) {
			const project = state.projects.find((project) => {
				return project.id === project.id;
			});
			if (payload.name) {
				project.name = payload.name;
			}
			if (payload.description) {
				project.description = payload.description;
			}
			if (payload.link) {
				project.link = payload.link;
			}
			if (payload.repo) {
				project.repo = payload.repo;
			}
			if (payload.commercial) {
				project.commercial = payload.commercial;
			}
			if (payload.fullStack) {
				project.fullStack = payload.fullStack;
			}
			if (payload.frontEnd) {
				project.frontEnd = payload.frontEnd;
			}
			if (payload.backEnd) {
				project.backEnd = payload.backEnd;
			}
			if (payload.tags) {
				project.tags = payload.tags;
			}
		},
		createProject(state, payload) {
			state.projects.push(payload);
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
							repo: data[key].repo,
							tags: data[key].tags,
							commercial: data[key].commercial,
							fullStack: data[key].fullStack,
							frontEnd: data[key].frontEnd,
							backEnd: data[key].backEnd
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
				repo: payload.repo,
				tags: payload.tags
			};
			let key;
			axios
				.post(url + '/users/' + this.state.id + '/projects', project, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + this.state.token
					}
				})
				.then((response) => {
					const key = response.data._id;
					commit('createProject', {
						...project,
						id: key
					});
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
			if (payload.description) {
				updateObj.description = payload.description;
			}
			if (payload.link) {
				updateObj.link = payload.link;
			}
			if (payload.repo) {
				updateObj.repo = payload.repo;
			}
			if (payload.commercial) {
				updateObj.commercial = payload.commercial;
			}
			if (payload.fullStack) {
				updateObj.fullStack = payload.fullStack;
			}
			if (payload.frontEnd) {
				updateObj.frontEnd = payload.frontEnd;
			}
			if (payload.backEnd) {
				updateObj.backEnd = payload.backEnd;
			}
			if (payload.tags) {
				updateObj.tags = payload.tags;
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
					commit('updateProject', payload);
				})
				.catch((error) => {
					console.log(error);
					commit('setLoading', false);
				});
		},
		deleteProject: function({ dispatch }, payload) {
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
		loadProjects(state) {
			return state.projects;
		},
		loadProject(state) {
			return (itemId) => {
				return state.projects.find((item) => {
					return item.id === itemId;
				});
			};
		},
		loading(state) {
			return state.loading;
		}
	}
});
