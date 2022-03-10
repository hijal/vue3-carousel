<template>
	<div class="container py-5">
		<carousel :autoplay="2000" :wrap-around="true">
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
				<pagination></pagination>
			</template>
		</carousel>
	</div>
</template>

<script>
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default {
	name: 'Autoplay',
	components: {
		Carousel,
		Slide,
		Pagination,
	},
};
</script>

<style scoped></style>
