<template>
	<div class="page">
		<h3 class="cat-title">Balms</h3>
		<div
			class="flex-container flex-wrap catsDiv"
			v-for="(balm, i) in balmsArr"
			:key="i"
		>
			<div
				class="product-card"
				:style="{ backgroundImage: `url(${balm.filePath})` }"
			>
				{{ balm.brand }}
			</div>
		</div>
	</div>
</template>

<script>
// import { http } from '../services/Http.js';
export default {
	name: 'Balms',
	computed: {
		balmsArr() {
			return this.$store.state.products.balms;
		},
	},

	created() {
		this.$store.dispatch('setProductBalms');
	},
};
</script>
