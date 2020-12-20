import { createStore, createLogger } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { http } from '../services/Http.js';

export const store = createStore({
	state() {
		return {
			user: { userName: '', userRole: '', isAuthenticated: false },
			products: { balms: [], oils: [], soaps: [] },
			productKeys: ['balms', 'oils', 'soaps'],
		};
	},
	mutations: {
		setUserInfo(state, userInfo) {
			state.user = userInfo;
		},
		setProductBalms(state, productBalms = []) {
			state.products.balms = productBalms;
		},
		setProductOils(state, productBalms = []) {
			state.products.oils = productBalms;
		},
		setProductSoaps(state, productBalms = []) {
			state.products.soaps = productBalms;
		},
	},
	actions: {
		setUserInfo({ commit, state }, userInfo = {}) {
			const { user } = userInfo;
			commit('setUserInfo', userInfo.user);
		},
		setProductBalms({ commit }) {
			http
				.getProductSoaps('balms')
				.then((resp) => {
					commit('setProductBalms', resp.data.balms);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		setProductOils({ commit }) {
			http
				.getProductSoaps('oils')
				.then((resp) => {
					commit('setProductOils', resp.data.oils);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		setProductSoaps({ commit }) {
			http
				.getProductSoaps('soaps')
				.then((resp) => {
					commit('setProductSoaps', resp.data.soaps);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},

	plugins: [
		createLogger(),
		createPersistedState({
			storage: window.sessionStorage,
		}),
	],

	getters: {},
});
