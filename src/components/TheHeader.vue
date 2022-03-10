<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-white mb-5">
		<div class="container-fluid">
			<router-link to="/" class="navbar-brand">Carousel</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link to="/" class="nav-link">Basic</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/wrap-around" class="nav-link"
							>Wrap Around</router-link
						>
					</li>
					<li class="nav-item">
						<router-link to="/breakpoints" class="nav-link"
							>Breakpoints</router-link
						>
					</li>
					<li class="nav-item">
						<router-link to="/hidden-arrows" class="nav-link"
							>Hidden Arrows</router-link
						>
					</li>
					<li class="nav-item">
						<router-link to="/pagination" class="nav-link"
							>Pagination</router-link
						>
					</li>
					<li class="nav-item">
						<router-link to="/autoplay" class="nav-link">Autoplay</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/active-classes" class="nav-link"
							>Active Classes</router-link
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'TheHeader',
};
</script>

<style scoped>
.navbar-brand {
	font-size: 1.25rem;
}
.navbar-nav {
	margin-left: auto;
	padding: 1rem 0;
}
.navbar-nav .nav-item .nav-link.active {
	border: 1px solid #e9ecef;
	margin: 0 1rem;
	border-radius: 0.5rem;
	transform: scale(1.2);
	padding: 0.3rem 1rem;
}
</style>
