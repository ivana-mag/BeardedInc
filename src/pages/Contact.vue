<template>
	<div class="contactDiv">
		<img
			src="http://localhost:3000/images/ashkan-forouzani-d0kvBZZsMMw-unsplash.jpg"
			alt="barber-shop"
			style="width: 100vw; height: auto"
		/>
		<div class="contactInfo">
			<p>Contact us!</p>
			<p>email: beardedInc@gmail.com</p>
			<p>tel: +000 123 456 789</p>
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

		<div class="map">
			<h5>Our location</h5>
			<span
				><iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.1590879535484!2d20.803154915554735!3d41.10921652115588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350dca8751adab9%3A0x5837422f06cc7ca!2sKej%20Makedonija%2C%20Ohrid!5e0!3m2!1sen!2smk!4v1606854218035!5m2!1sen!2smk"
					width="600"
					height="450"
					frameborder="0"
					style="border: 5px solid rgb(231, 157, 20)"
					allowfullscreen=""
					aria-hidden="false"
					tabindex="0"
				></iframe>
			</span>
		</div>
		<div class="message-div">
			<form>
				<div class="form-group">
					<h5>Send us a message!</h5>

					<input
						type="email"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="your email address"
					/>
				</div>
				<div class="form-group">
					<label for="exampleFormControlTextarea1"
						>Give us some feedback.</label
					>
					<textarea
						class="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
					></textarea>
					<button type="submit" class="btn btn-outline-warning">Send</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Contact',
};
</script>

<style scoped>
.contactDiv {
	position: relative;
	min-height: 70vh;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
	text-align: center;
}
.fa {
	margin: 0 50px 0 50px;
	color: rgb(231, 157, 20);
	text-decoration: none;
	font-size: 56px;
}

.fa:hover {
	animation: color-fade;
	animation-duration: 1s;
	animation-timing-function: ease-in-out;
}
@keyframes color-fade {
	0% {
		color: rgb(231, 157, 20);
	}
	50% {
		color: rgb(75, 30, 0);
	}
	100% {
		color: rgb(231, 157, 20);
	}
}

.form-control {
	background: rgb(231, 157, 20);
	color: #fff;
	width: 50vw;
	border: none;
}
button {
	margin-top: 30px;
}
.map {
	position: relative;
	margin-top: 100px;
}

.message-div {
	position: relative;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
	height: auto;
	margin-top: 100px;
}
.contactInfo {
	position: relative;
	top: -350px;
	background-color: rgba(231, 157, 20, 0.568);
	opacity: 0.8;
	padding: 10px;
}
</style>
