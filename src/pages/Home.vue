<template>
	<div class="homeDiv page">
		<div class="products">
			<div class="content-div flex-container">
				<img
					src="http://localhost:3000/images/arthur-humeau-pu20JkUx--A-unsplash.jpg"
				/>
				<div class="someInfo">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div class="seeProduct">
					<div class="prodCards">Balms</div>
					<div class="prodCards">Oils</div>
					<div class="prodCards">Soaps</div>
				</div>
			</div>
			<div class="content-div flex-container">
				<img
					src="http://localhost:3000/images/bojan-dubov-rzQcwm_ZfBI-unsplash.jpg"
				/>
				<div class="someInfo">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div class="socialMedia">
					<a
						href="/localhost:3000/#/contact"
						class="fa fa-facebook-f p-2 bd-highlight"
					></a>
					<a
						href="/localhost:3000/#/contact"
						class="fa fa-twitter p-2 bd-highlight"
					></a>
					<a
						href="/localhost:3000/#/contact"
						class="fa fa-instagram p-2 bd-highlight"
					></a>
					<a
						href="/localhost:3000/#/contact"
						class="fa fa-youtube p-2 bd-highlight"
					></a>
				</div>
			</div>
			<div class="content-div flex-container">
				<img
					src="http://localhost:3000/images/alessandro-sacchi-gTTQci15ISs-unsplash.jpg"
				/>
				<div class="someInfo">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style scoped>
.homeDiv {
	position: relative;
	left: -20px;
	min-height: 65vh;
	width: 100vw;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	font-family: 'Montserrat', sans-serif;
}
.products {
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	color: rgb(231, 157, 20) !important;
	text-decoration: none;
}

.products img {
	width: 100vw;
	height: auto;
}
.content-div {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.someInfo {
	position: relative;
	top: -450px;
	background-color: rgba(231, 157, 20, 0.568);
	color: #000;
	padding-top: 2%;
	font-size: 22px;
	opacity: 0.8;
	text-align: center;
	height: 180px;
}
.socialMedia {
	position: relative;
	top: -80px;
	align-self: center;
	margin: 50px 0 100px 0;
}
.fa {
	margin: 30px 30px;
	color: rgb(231, 157, 20);
	text-decoration: none;
	font-size: 56px;
}

.fa:hover {
	transform: scale(2);
}
.seeProduct {
	position: relative;
	top: -90px;
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
	width: 100vw;
}
.prodCards {
	height: 300px;
	width: 300px;
	background-color: #fff;
	margin: 20px;
}

@media (max-width: 800px) {
}

@media (max-width: 400px) {
}
</style>
