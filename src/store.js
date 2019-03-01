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
		token: null,
		loggedIn: false,
		loading: false,
		error: null,
		projects: [],

		// Dev Seed
		works: [
			{
				commercial: [
					{
						title: 'The Caf',
						image: require('./assets/thecaf.png'),
						description:
							'I was tasked to redesign their existing website to better reflect their current in house personality while giving them the ability to manage content.  UX/UI design was created through sketch along with collaboration with the client.',
						url: 'http://thecafcoolum.com',
						tag: [
							{ name: 'Wordpress' },
							{ name: 'Theme customization' },
							{ name: 'HTML' },
							{ name: 'CSS' },
							{ name: 'Bootstrap' },
							{ name: 'cPanel' }
						]
					},
					{
						title: 'Sandy Pages Books',
						image: require('./assets/sandypagesbooks.png'),
						url: 'https://sandypagesbooks.com.au',
						description:
							'I was tasked to upgrade their existing website with a more modern approach. An E-commerce solution was required as Sandy Pages books partnered with local schools to provide an outlet for students to purchase books during the schools book fest week.',
						tag: [
							{ name: 'E-commerce' },
							{ name: 'Wordpress' },
							{ name: 'Theme customization' },
							{ name: 'HTML' },
							{ name: 'CSS' },
							{ name: 'jQuery' },
							{ name: 'Bootstrap' },
							{ name: 'cPanel' },
							{ name: 'SSL' }
						]
					},
					{
						title: 'North Shore Realty',
						image: require('./assets/northshorerealty.png'),
						url: 'https://sandypagesbooks.com.au',
						description:
							'I was tasked to upgrade their existing website with a more modern approach. An E-commerce solution was required as Sandy Pages books partnered with local schools to provide an outlet for students to purchase books during the schools book fest week.',
						tag: [ { name: 'HTML' }, { name: 'CSS' }, { name: 'Email' } ]
					}
				]
			},
			{
				fullStack: [
					{
						title: 'Busy Brisbane',
						image: require('./assets/busybrisbane.png'),
						description:
							'I was tasked to redesign their existing website to better reflect their current in house personality while giving them the ability to manage content.  UX/UI design was created through sketch along with collaboration with the client.',
						url: 'http://thecafcoolum.com',
						tag: [
							{ name: 'Vuetify' },
							{ name: 'Vuex' },
							{ name: 'Express' },
							{ name: 'Postgresql' },
							{ name: 'JWT' }
						]
					},
					{
						title: 'The Caf (remade)',
						image: require('./assets/sandypagesbooks.png'),
						url: 'https://sandypagesbooks.com.au',
						description:
							"I decided to remake The Caf's website with a different design and drop wordpress. Content is managed from within the admin portal where full CRUD permissions are available.",
						tag: [
							{ name: 'Vue' },
							{ name: 'Vuex' },
							{ name: 'Express' },
							{ name: 'MongoDB' },
							{ name: 'JWT' },
							{ name: 'facebook API' },
							{ name: 'Bulma' }
						]
					},
					{
						title: 'Portfolio',
						image: require('./assets/portfolio.png'),
						url: 'https://sandypagesbooks.com.au',
						description:
							'I was tasked to upgrade their existing website with a more modern approach. An E-commerce solution was required as Sandy Pages books partnered with local schools to provide an outlet for students to purchase books during the schools book fest week.',
						tag: [ { name: 'HTML' }, { name: 'CSS' }, { name: 'Email' } ]
					}
				]
			},
			{
				frontEnd: [
					{
						title: 'Welding Worx',
						image: require('./assets/busybrisbane.png'),
						description:
							'I was tasked to redesign their existing website to better reflect their current in house personality while giving them the ability to manage content.  UX/UI design was created through sketch along with collaboration with the client.',
						url: 'http://thecafcoolum.com',
						tag: [
							{ name: 'Vuetify' },
							{ name: 'Vuex' },
							{ name: 'Express' },
							{ name: 'Postgresql' },
							{ name: 'JWT' }
						]
					},
					{
						title: 'Float Out',
						image: require('./assets/sandypagesbooks.png'),
						url: 'https://sandypagesbooks.com.au',
						description:
							"I decided to remake The Caf's website with a different design and drop wordpress. Content is managed from within the admin portal where full CRUD permissions are available.",
						tag: [
							{ name: 'Vue' },
							{ name: 'Vuex' },
							{ name: 'Express' },
							{ name: 'MongoDB' },
							{ name: 'JWT' },
							{ name: 'facebook API' },
							{ name: 'Bulma' }
						]
					},
					{
						title: 'Guess the colour',
						image: require('./assets/portfolio.png'),
						url: 'https://sandypagesbooks.com.au',
						description:
							'I was tasked to upgrade their existing website with a more modern approach. An E-commerce solution was required as Sandy Pages books partnered with local schools to provide an outlet for students to purchase books during the schools book fest week.',
						tag: [ { name: 'HTML' }, { name: 'CSS' }, { name: 'Email' } ]
					}
				]
			}
		]
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
			} else {
				state.loggedIn = false;
			}
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
							description: data[key].description
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
			console.log(localStorage.token);
			console.log(payload.tags);
			const project = {
				name: payload.name,
				description: payload.description,
				image: payload.image,
				tags: payload.tags
			};

			axios
				.post(url + '/users/5c7517f35b368f043ac656f5/projects', project, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + localStorage.token
					}
				})
				.then((response) => {
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	}
	// getters: {
	// 	loadedProjects(state) {
	// 		return state.projects;
	// 	}
	// }
});
