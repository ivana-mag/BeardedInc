<template>
	<div class="container loginDiv page">
		<form class="login-form col-sm-6" @submit.prevent="login" novalidate>
			<h3>Login</h3>
			<div class="form-group">
				<div class="col-sm-6">
					<input
						type="text"
						class="form-control"
						placeholder="Username"
						v-model="userName"
					/>
				</div>
				<div class="col-sm-6">
					<input
						type="password"
						class="form-control"
						placeholder="Password"
						v-model="password"
					/>
				</div>
			</div>
			<button
				type="submit"
				class="btn col-sm-2 signIn-Out"
				:disabled="isLoading"
			>
				Login
			</button>
			<div
				v-if="errors.length > 0"
				class="alert alert-dismissible"
				role="alert"
			>
				<p v-for="(err, i) in errors" :key="i">{{ err }}</p>
			</div>
			<hr />
			<router-link to="/register" class="router-text"
				>Don't have an account? Register here.</router-link
			>
		</form>
	</div>
</template>

<script>
import { http } from '../services/Http.js';

export default {
	name: 'Login',
	data() {
		return {
			userName: '',
			userRole: '',
			password: '',
			errors: [],
			isLoading: false,
		};
	},
	methods: {
		login() {
			this.errors = [];
			if (this.userName === '') {
				this.errors.push('Username is required');
				// console.log(this.errors);
			}
			var regexPassword = /[A-Z]/.test(this.password[0]);
			if (this.password === '') {
				this.errors.push('Password is required');
			} else if (!regexPassword) {
				this.errors.push('Password must start with a capital letter');
			}
			if (this.errors.length > 0) {
				return;
			}

			var loginInfo = {
				userName: this.userName,
				password: this.password,
				returnSecureToken: true,
			};
			this.isLoading = true;

			http
				.login('account/signin', loginInfo)
				.then((resp) => {
					//token set in local storage and set an expire interval
					// var token = resp.data.token;
					localStorage.setItem('token', resp.data.token);
					// console.log(resp.data);
					// const oneHourFromLogin = new Date().getTime() +60*60*1000;
					// localStoragesetItem('expiresIn', oneHourFromNow);
					if (localStorage.getItem('token') === resp.data.token) {
						this.$store.dispatch('setUserInfo', {
							user: {
								userName: resp.data.userName,
								userRole: resp.data.role,
								isAuthenticated: true,
							},
						});
					}
					this.$router.push('/');
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					this.isLoading = false;
				});
		},
	},
};
</script>

<style scoped>
.signIn-Out {
	background-color: rgb(231, 157, 20);
	color: #fff;
	border: none;
}
.signIn-Out:hover {
	background-color: rgb(165, 114, 20);
}
.loginDiv {
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
