<template>
	<div class="container border p-5">
		<carousel :items-to-show="2.5" :wrap-around="true">
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
	name: 'WrapAround',
	components: {
		Carousel,
		Navigation,
		Slide,
	},
};
</script>

<style scoped></style>
