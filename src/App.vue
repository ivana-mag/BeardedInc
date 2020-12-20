<template>
	<div>
		<Header :brandName="brandName" />
		<router-view />
		<Footer :brandName="brandName" />
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'App',
	data() {
		return {
			brandName: 'Bearded Inc.',
			loginBTN: 'Login',
		};
	},
	Computed: {
		balmsArr() {
			return this.$store.state.products.balms;
		},
		oilsArr() {
			return this.$store.state.products.oils;
		},
		soapsArr() {
			return this.$store.state.products.soaps;
		},
	},
	created() {
		this.$store.dispatch('setProductBalms');
		this.$store.dispatch('setProductOils');
		this.$store.dispatch('setProductSoaps');
		if (!localStorage.getItem('token')) {
			this.$store.dispatch('setUserInfo', {
				user: {
					userName: '',
					userRole: '',
					isAuthenticated: false,
				},
			});
		}
	},
	components: { Header, Footer },
};
</script>

<style>
body {
	background-color: rgb(48, 46, 46);
	color: #fff;
}
</style>
