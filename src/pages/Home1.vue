<template>
	<div class="home">
		<carousel @next="next" @prev="prev">
			<carousel-slide
				v-for="(slide, index) in slides"
				:key="slide"
				:index="index"
				:visibleSlide="visibleSlide"
				:direction="direction"
			>
				<img :src="slide" style="opacity: 0.5; height: 85vh; width: auto" />
				<div class="carousel-caption">
					<h1>
						<router-link class="cats" :to="categories[index]">{{
							labels[index]
						}}</router-link>
					</h1>
					<p>{{ tags[index] }}</p>
				</div>
			</carousel-slide>
		</carousel>
	</div>
</template>
<script>
import Carousel from '../components/Carousel.vue';
import CarouselSlide from '../components/CarouselSlide.vue';
export default {
	name: 'Home1',
	data() {
		return {
			slides: [
				'http://localhost:3000/images/beard-man-barber-shop-logo-vector-illustration_56473-434.jpg',
				'http://localhost:3000/images/balms/apothecary-87-Wg3J83R1YSQ-unsplash-cropped.jpg',
				'http://localhost:3000/images/oils/sarah-gualtieri-9oLEkjtYhCI-unsplash-cropped.jpg',
				'http://localhost:3000/images/soaps/micheile-henderson-Xgn6rIpBEWo-unsplash-cropped.jpg',
			],
			labels: ['Bearded Inc.', 'Balms', 'Oils', 'Soaps'],
			categories: ['/register', '/balms', '/oils', '/soaps'],
			tags: [
				'Register to become one of the fam.',
				'Find the perfect balm for your mange.',
				'Nurture your beard with our natural oils.',
				'Find scents and ingredients for your perfect soap.',
			],
			visibleSlide: 0,
			visibleCat: 0,
			direction: '',
		};
	},
	computed: {
		slideLen() {
			return this.slides.length;
		},
		cat0() {
			return this.categories[0];
		},
	},
	methods: {
		next() {
			if (this.visibleSlide >= this.slideLen - 1) {
				this.visibleSlide = 0;
			} else {
				this.visibleSlide++;
			}
			this.direction = 'left';
		},
		prev() {
			if (this.visibleSlide <= 0) {
				this.visibleSlide = this.slideLen - 1;
			} else {
				this.visibleSlide--;
			}
			this.direction = 'right';
		},
	},
	components: { Carousel, CarouselSlide },
};
</script>

<style scoped>
.home {
	display: flex;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
}
.carousel-caption {
	position: absolute;
	top: 200px;
	font-family: 'Major Mono Display', monospace;
	color: rgb(241, 245, 244);
	flex: auto;
}
.carousel-caption h1 {
	font-size: 150px;
	text-shadow: rgb(231, 157, 20) 5px 5px;
	flex: auto;
}

p {
	font-size: 36px;
	text-shadow: rgb(231, 157, 20) 2px 2px;
	flex: auto;
}
.cats {
	text-decoration: none;
	color: rgb(241, 245, 244);
	flex: auto;
}
</style>
