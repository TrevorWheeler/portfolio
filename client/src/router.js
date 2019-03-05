import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Dashboard from './views/Dashboard.vue';
import Edit from './views/Edit.vue';
Vue.use(Router);
const router = new Router({
	mode: 'history',
	linkExactActiveClass: 'active',
	routes: [
		{
			path: '*',
			redirect: '/'
		},
		{
			path: '/',
			component: Home,
			name: 'home'
		},

		//for testing lazy loading
		// {
		// 	path: '/',
		// 	name: 'home',
		// 	component: () => import('./views/Home.vue')
		// },
		{
			path: '/login',
			component: Login,
			name: 'login'
		},
		{
			path: '/dashboard',
			component: Dashboard,
			name: 'dashboard',
			meta: {
				requiresAuth: true
			}
		},
		{
			path: 'dashboard/:id/edit/',
			name: 'edit',
			component: Edit,
			props: true,
			meta: {
				requiresAuth: true
			}
		}
	],

	scrollBehavior() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({ x: 0, y: 0 });
			}, 500);
		});
	}
});
export default router;

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		// this route requires auth, check if logged in
		// if not, redirect to login page.
		if (!localStorage.token) {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			});
		} else {
			next();
		}
	} else {
		next(); // make sure to always call next()!
	}
});
