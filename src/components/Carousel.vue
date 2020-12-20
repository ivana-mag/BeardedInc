<template>
	<div class="carousel">
		<slot></slot>
		<button @click="next" class="next">
			<svg
				width="1em"
				height="1em"
				viewBox="0 0 16 16"
				class="bi bi-chevron-right"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
				/>
			</svg>
		</button>
		<button @click="prev" class="prev">
			<svg
				width="1em"
				height="1em"
				viewBox="0 0 16 16"
				class="bi bi-chevron-left"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
				/>
			</svg>
		</button>
	</div>
</template>
<script>
export default {
	name: 'Carousel',
	data() {
		return {};
	},
	methods: {
		next() {
			this.$emit('next');
		},
		prev() {
			this.$emit('prev');
		},
	},
};
</script>

<style scoped>
.carousel {
	position: relative;
	height: 85vh;
	width: auto;
	overflow: hidden;
}
button {
	position: absolute;
	height: 85vh;
	width: 50px;
	top: 0;
	background-color: transparent;
	border: none;
	color: rgb(0, 0, 0);
}

button:focus,
button:hover {
	outline: none;
	border: none;
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.281);
}
.next {
	right: 0;
}
.prev {
	left: 0;
}
</style>
