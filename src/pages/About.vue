<template>
	<div class="aboutDiv">
		<h3 class="brandname">Bearded Inc.</h3>
		<div class="aboutText col-sm-8">
			<h3 class="title">About</h3>
			<p>
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum."
			</p>
			<p>
				"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
				illo inventore veritatis et quasi architecto beatae vitae dicta sunt
				explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
				odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
				voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
				quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
				eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
				voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
				corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
				Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
				quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
				voluptas nulla pariatur?"
			</p>
			<h3>The Team</h3>
			<span
				><img src="http://localhost:3000/images/w-avatar.jpg" alt=""
			/></span>
			<p>
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum."
			</p>
			<span
				><img src="http://localhost:3000/images/m-avatar.jpg" alt=""
			/></span>
			<p>
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum."
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'About',
};
</script>
<style scoped>
.aboutDiv {
	min-height: 75vh;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
}
.brandname {
	position: relative;
	text-align: center;
	color: #fff;
	font-size: 48px;
	text-shadow: rgb(231, 157, 20) 1px 1px;
}

.aboutText {
	position: relative;
	text-align: justify;
	align-self: center;
}
span {
	float: left;
}
img {
	height: 100px;
	width: auto;
	margin: 10px;
}

@media (max-width: 768px) {
	.aboutText {
		flex: 100%;
		font-size: 11px;
	}
	img {
		height: 60px;
		width: auto;
		margin: 10px;
	}
	h3 {
		font-size: 18px;
	}
}
</style>
