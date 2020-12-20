<template>
	<footer class="fixed bottom">
		<div class="d-flex flex-row bd-highlight mb-3">
				<router-link to="/about" class="brandname">&#169 {{ brandName }}</router-link>

			<a href="/localhost:3000/#/contact" class="fa fa-facebook p-2 bd-highlight"></a>
			<a href="/localhost:3000/#/contact" class="fa fa-twitter p-2 bd-highlight"></a>
			<a href="/localhost:3000/#/contact" class="fa fa-instagram p-2 bd-highlight"></a>
			<a href="/localhost:3000/#/contact" class="fa fa-youtube p-2 bd-highlight"></a>
		</div>
	
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	props: {
		brandName: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped>
footer {
	position: sticky !important;
	z-index: 9999;
	height: 80px;
	margin-left: 15px;
	margin-top: 35px;
	text-decoration: none;
	color: rgb(231, 157, 20);
	padding-top: 60px;
	padding-bottom: 20px;
}

a {
	color: rgb(231, 157, 20);
	z-index: 9999;
}
.brandname {
	position: absolute;
	padding-top: 60px;
	padding-bottom: 20px;
	top: 35px;
	color: rgb(231, 157, 20);
	font-size: 10px;
}
</style>
