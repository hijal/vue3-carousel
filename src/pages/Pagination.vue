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
				<Pagination />
				<Navigation />
			</template>
		</carousel>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
export default defineComponent({
	name: 'ExamplePagination',
	components: {
		Pagination,
		Carousel,
		Slide,
		Navigation,
	},
	data: () => ({
		// carousel settings
		settings: {
			itemsToShow: 1,
			snapAlign: 'center',
		},
		// breakpoints are mobile first
		// any settings not specified will fallback to the carousel settings
		breakpoints: {
			// 700px and up
			700: {
				itemsToShow: 3.5,
				snapAlign: 'center',
			},
			// 1024 and up
			1024: {
				itemsToShow: 5,
				snapAlign: 'start',
			},
		},
	}),
});
</script>
