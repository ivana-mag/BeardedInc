<template>
	<div class="cartDiv" @mouseenter="hover = true" @mouseleave="hover = false">
		<div class="cartImg">
			<img
				src="http://localhost:3000/images/shopping-bag.jpg"
				alt="cart-image"
			/>
			<div class="cart-count" v-if="cart.length >= 1">{{ cart.length }}</div>
		</div>
		<div class="cartItems" v-if="hover">
			<h6>My Items</h6>

			<div>
				<p v-for="(c, i) in cart" :key="i">IMG{{ c }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Cart',
	data() {
		return {
			cart: ['1', '2', '3', '4', '5', '6'],
			hover: false,
		};
	},
};
</script>

<style scoped>
.cartDiv {
	position: absolute;
	right: 0;
	top: 70px;
	width: 80px;
	/* height: 90vh; */
	font-size: 1em;
	font-family: 'Montserrat', sans-serif;
	transition: height 2s, width 2s;
	border: 1px solid red;
}
.cartImg img {
	position: absolute;
	right: 10px;
	width: 40px;
	height: auto;
	color: #fff;
}
.cartDiv:hover {
	width: 20vw;

	background-color: rgba(27, 27, 27, 0.808);
}
.cartItems h6 {
	margin-top: 10px;
	margin-bottom: 10px;
}
.cartItems div {
	list-style: none;
	font-size: 10px;
	transition: width 2s;
}
.cart-items div p {
	left: 20px;
}
.cart-count {
	position: absolute;
	right: 30px;
	top: 20px;
	height: 15px;
	width: 15px;
	background-color: red;
	color: #fff;
	font-size: 9px;
	border-radius: 50%;
	text-align: center;
	font-weight: bolder;
}
</style>
