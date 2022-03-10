<template>
	<div class="container py-5">
		<carousel :items-to-show="1.5">
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
				<navigation />
				<pagination />
			</template>
		</carousel>
	</div>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
	name: 'Basic',
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
};
</script>

<style scoped></style>
