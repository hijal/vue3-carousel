<template>
	<div class="card w-50">
		<div class="card-body">
			<slot name="title"> </slot>
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BaseCard',
};
</script>

<style scoped></style>
