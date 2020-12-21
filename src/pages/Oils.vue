<template>
	<div>
		<h3 class="cat-title">Oils</h3>
		<div class="page">
			<div class="catsDiv" v-for="(oil, i) in oilsArr" :key="i">
				<div
					class="product-card"
					:style="{ backgroundImage: `url(${oil.filePath})` }"
				>
					<p>Brand: {{ oil.brand }}</p>
					<p>Price: {{ oil.unitPrice }} <span>&euro;</span></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Oils',
	computed: {
		oilsArr() {
			return this.$store.state.products.oils;
		},
	},
	created() {
		this.$store.dispatch('setProductOils');
	},
};
</script>

<style>
.page {
	position: relative;

	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	width: 70vw;
	left: 12%;
}
.cat-title {
	position: relative;
	font-family: 'Montserrat', sans-serif;
	font-size: 56px;
	text-shadow: rgb(231, 157, 20) 2px 2px;
	margin-bottom: 30px;
	text-align: center;
}
.catsDiv {
	color: #fff;
	top: 10px;
	margin: 10px;
	height: 200px;
	width: 200px;
}
.product-card {
	background-size: 200px auto;
	background-repeat: no-repeat;
	height: 100%;
	width: 100%;
	height: 200px;
	width: auto;
}
.product-card p {
	color: black;
}
</style>
