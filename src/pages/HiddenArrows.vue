<template>
	<div class="container py-5">
		<carousel>
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
	name: 'HiddenArrows',
	components: {
		Carousel,
		Navigation,
		Slide,
	},
};
</script>

<style scoped>
.carousel__prev--in-active,
.carousel__next--in-active {
	display: none;
}
</style>
