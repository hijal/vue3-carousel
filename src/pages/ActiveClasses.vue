<template>
	<div class="container p-5">
		<carousel :autoplay="2000" :itemsToShow="3.95" :wrapAround="true">
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
				<pagination></pagination>
			</template>
		</carousel>
	</div>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
	name: 'ActiveClasses',
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
};
</script>

<style scoped>
.carousel__slide > .carousel__item {
	transform: scale(1);
	opacity: 0.5;
	transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
	opacity: 1;
	transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
	transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
	transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
	transform: scale(1.1);
}
</style>
