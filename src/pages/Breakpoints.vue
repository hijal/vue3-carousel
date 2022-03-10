<template>
	<div class="container py-5">
		<carousel :settings="settings" :breakpoints="breakpoints">
			<slide v-for="slide in 10" :key="slide">
				<base-card>
					<template v-slot:title>
						<h3>{{ slide }}</h3>
					</template>
					<template v-slot:content>
						<p class="card-text">
							With supporting text below as a natural lead-in to additional
							content.
						</p>
						<a href="#" class="btn btn-primary">Button</a>
					</template>
				</base-card>
			</slide>
			<template #addons>
				<navigation></navigation>
			</template>
		</carousel>
	</div>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel';
export default {
	name: 'Breakpoints',
	components: {
		Carousel,
		Navigation,
		Slide,
	},
	data: () => ({
		settings: {
			itemToShow: 3.5,
			snapAlign: 'center',
		},
		breakpoints: {
			600: {
				itemToShow: 1,
				snapAlign: 'center',
			},
			991: {
				itemsToShow: 2,
				snapAlign: 'start',
			},
			1024: {
				itemsToShow: 5,
				snapAlign: 'start',
			},
		},
	}),
};
</script>

<style scoped></style>
