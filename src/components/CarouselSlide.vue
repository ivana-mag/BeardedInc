<template>
	<transition :name="direction">
		<div class="carousel-slide" v-show="visibleSlide === index">
			<slot></slot>
		</div>
	</transition>
</template>
<script>
export default {
	name: 'CarouselSlide',
	props: ['visibleSlide', 'index', 'direction'],
	data() {
		return {};
	},
};
</script>

<style scoped>
.carousel-slide {
	position: relative;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.left-enter-active {
	animation: LeftInAnimation 0.6s ease-in-out;
}
.left-leave-active {
	animation: LeftOutAnimation 0.6s ease-in-out;
}
@keyframes leftInAnimation {
	from {
		transform: translateX(70%);
	}
	to {
		transform: translateX(0);
	}
}
@keyframes LeftOutAnimation {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-70%);
	}
}

.right-enter-active {
	animation: RightInAnimation 0.6s ease-in-out;
}
.right-leave-active {
	animation: RightOutAnimation 0.6s ease-in-out;
}
@keyframes RightInAnimation {
	from {
		transform: translateX(-70%);
	}
	to {
		transform: translateX(0%);
	}
}
@keyframes RightOutAnimation {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(70%);
	}
}
</style>
