import { createRouter, createWebHistory } from 'vue-router';

// pages for vue-router
import Basic from '../pages/Basic.vue';
import WrapAround from '../pages/WrapAround.vue';
import Breakpoints from '../pages/Breakpoints.vue';
import HiddenArrows from '../pages/HiddenArrows.vue';
import Pagination from '../pages/Pagination.vue';
import Autoplay from '../pages/Autoplay.vue';
import ActiveClasses from '../pages/ActiveClasses.vue';

const router = createRouter({
	history: createWebHistory(),
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: Basic,
		},
		{
			path: '/wrap-around',
			component: WrapAround,
		},
		{
			path: '/breakpoints',
			component: Breakpoints,
		},
		{
			path: '/hidden-arrows',
			component: HiddenArrows,
		},
		{
			path: '/pagination',
			component: Pagination,
		},
		{
			path: '/autoplay',
			component: Autoplay,
		},
		{
			path: '/active-classes',
			component: ActiveClasses,
		},
	],
});

export default router;
