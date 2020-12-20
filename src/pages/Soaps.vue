<template>
	<div class="page">
		<h3 class="cat-title">Soaps</h3>
		<div
			class="flex-container flex-wrap catsDiv"
			v-for="(soap, i) in soapsArr"
			:key="i"
		>
			<div
				class="product-card"
				:style="{ backgroundImage: `url(${soap.filePath})` }"
			>
				{{ soap.brand }}
			</div>
		</div>
	</div>
</template>

<script>
// import { http } from '../services/Http.js';
export default {
	name: 'Soaps',
	computed: {
		soapsArr() {
			return this.$store.state.products.soaps;
		},
	},
	created() {
		this.$store.dispatch('setProductSoaps');
	},
};
</script>
