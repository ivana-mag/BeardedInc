<template>
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="logo">
				<router-link to="/" class="text-light">
					<img
						src="http://localhost:3000/images/logo.jpg"
						height="50"
						width="50"
						loading="lazy"
					/>
				</router-link>
				<div>
					<router-link to="/" class="nav-link brandname">{{
						brandName
					}}</router-link>
				</div>
			</div>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<select class="nav-link" @change="changeRoute">
							Products
							<option
								v-for="(option, i) in options"
								:key="i"
								v-bind:value="option.value"
							>
								{{ option.text }}
							</option>
						</select>
					</li>
					<li class="nav-item active">
						<router-link to="/contact" class="nav-link">Contact</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/about" class="nav-link">About</router-link>
					</li>
				</ul>

				<div>
					<router-link
						to="/AdminProfile"
						v-if="
							$store.state.user.isAuthenticated &&
							$store.state.user.userRole === 'admin'
						"
						class="profileVue btn btn-sm bg-secondary"
						>{{ $store.state.user.userRole }} profile
					</router-link>
					<router-link
						to="/userProfile"
						v-if="
							$store.state.user.isAuthenticated &&
							$store.state.user.userRole === 'user'
						"
						class="profileVue btn btn-sm bg-secondary"
						>{{ $store.state.user.userRole }} profile
					</router-link>
					<router-link
						to="/login"
						class="btn btn-sm signIn-Out"
						@click="signOut()"
						v-if="$store.state.user.isAuthenticated"
						>Sign Out</router-link
					>
					<router-link to="/login" class="btn btn-sm signIn-Out" v-else
						>Login</router-link
					>
				</div>
			</div>
		</nav>
		<Cart />
	</header>
</template>

<script>
import Cart from '../components/Cart.vue';
export default {
	name: 'Header',
	data() {
		return {
			userName: '',
			userRole: '',
			options: [
				{ text: 'Products', value: '01' },
				{ text: 'Balms', value: '02' },
				{ text: 'Oils', value: '03' },
				{ text: 'Soaps', value: '04' },
			],
		};
	},
	props: {
		brandName: {
			type: String,
			required: true,
		},
	},
	methods: {
		signOut() {
			this.$store.commit('setUserInfo', {
				userName: '',
				userRole: '',
				isAuthenticated: false,
			});
			localStorage.removeItem('token');
			sessionStorage.clear();
			this.$router.replace('/login');
		},
		changeRoute(e) {
			switch (e.target.value) {
				case '01':
					this.$router.push({ path: '/' });
					break;
				case '02':
					this.$router.push({ path: '/balms' });
					break;
				case '03':
					this.$router.push({ path: '/oils' });
					break;
				case '04':
					this.$router.push({ path: '/soaps' });
					break;
			}
		},
	},
	components: { Cart },
};
</script>

<style scoped>
header {
	position: sticky !important;
	top: 0;
	z-index: 9999;
}
.navbar {
	margin-bottom: 25px;
	font-family: 'Montserrat', sans-serif;
}
.nav-item {
	height: 50px;
}
.logo {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.signIn-Out {
	background-color: rgb(231, 157, 20);
	color: #fff;
	border: none;
}
.signIn-Out:hover {
	background-color: rgb(165, 114, 20);
}
.brandname {
	color: #fff;
	text-shadow: rgb(231, 157, 20) 1px 1px;
}
.profileVue {
	color: #fff;
	margin-right: 20px;
}
select {
	background-color: transparent;
	border: none;
	cursor: pointer;
}
option {
	background-color: rgb(231, 157, 20);
	border: none;
	font-weight: bolder;
	cursor: pointer;
}
</style>
