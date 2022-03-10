<template>
	<header class="container mb-5">
		<the-header></the-header>
	</header>
	<router-view></router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
export default {
	name: 'App',
	components: {
		TheHeader,
	},
};
</script>

<style></style>
