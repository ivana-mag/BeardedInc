<template>
	<div class="container registerDiv page">
		<form class="login-form col-sm-6" @submit.prevent="register" novalidate>
			<h3>Register</h3>
			<div class="form-group">
				<div class="col-sm-8">
					<input
						type="text"
						class="form-control"
						placeholder="Username"
						v-model="userName"
					/>
				</div>
				<div class="col-sm-8">
					<input
						type="email"
						class="form-control"
						placeholder="Email"
						v-model="email"
					/>
				</div>
				<div class="col-sm-8">
					<input
						type="password"
						class="form-control"
						placeholder="Password"
						v-model="password"
					/>
				</div>
				<div class="col-sm-8">
					<input
						type="password"
						class="form-control"
						placeholder="Confirm password"
						v-model="confirmPassword"
					/>
				</div>
			</div>
			<button type="submit" class="btn btn-secondary col-sm-3 submitBtn">
				Register
			</button>
			<div v-if="errors.length > 0" class="alert mt-3" role="alert">
				<p v-for="(err, i) in errors" :key="i">{{ err }}</p>
			</div>
			<hr />
			<router-link to="/login" class="router-text"
				>Already have an account? Login here.</router-link
			>
		</form>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'Register',
	data() {
		return {
			userName: '',
			email: '',
			password: '',
			errors: [],
			tokens: [],
		};
	},
	methods: {
		register() {
			this.errors = [];
			const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
			const passwordRegex = /[A-Z]/;
			//front-end email validation
			if (this.userName === '') {
				this.errors.push('Username is required');
			}

			if (this.email === '') {
				this.errors.push('Email is required');
			} else if (!emailRegex.test(this.email)) {
				this.errors.push('Email is not valid');
			}

			//front-end password validation
			if (this.password === '') {
				this.errors.push('Password is required');
			} else if (!passwordRegex.test(this.password[0])) {
				this.errors.push('Password must start with a capital letter');
			}

			if (this.confirmPassword === '') {
				this.errors.push('Password must be confirmed');
			} else if (this.password !== this.confirmPassword) {
				this.errors.push('The password does not match');
			}

			if (this.errors.length > 0) {
				return;
			}

			var newUser = {
				userName: this.userName,
				email: this.email,
				password: this.password,
				confirmPassword: this.confirmPassword,
			};
			axios
				.post('https://localhost:5001/account/register', newUser)
				.then((resp) => {
					this.$router.push('/login');
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style scoped>
.submitBtn {
	background-color: rgb(231, 157, 20);
	color: #fff;
	border: none;
}
.submitBtn:hover {
	background-color: rgb(165, 114, 20);
}
.registerDiv {
	height: 80vh;
}
.login-form {
	position: relative;
	top: 50px;
	background-color: transparent;
	padding-top: 20px;
}
input {
	position: relative;
	left: -20px;
	margin: 5px;
	background: rgb(231, 157, 20);
	border: none;
	color: #fff;
}
.router-text {
	color: rgb(231, 157, 20);
}
hr {
	height: 1px;
	border-width: 0;
	color: rgb(231, 157, 20);
	background-color: rgb(231, 157, 20);
}
</style>
