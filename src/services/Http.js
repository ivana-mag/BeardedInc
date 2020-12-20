export class Http {
	//class constructor method
	constructor() {
		this.instance = axios.create({
			baseURL: 'https://localhost:5001/',
			timeout: 3000,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
	//Get product balms
	// getProductBalms() {
	// 	return axios.get('https://localhost:5001/balms');
	// }
	getProductBalms(endpoint = '', params = {}) {
		return this.instance.get(endpoint, { params });
	}
	getProductOils(endpoint = '', params = {}) {
		return this.instance.get(endpoint, { params });
	}
	getProductSoaps(endpoint = '', params = {}) {
		return this.instance.get(endpoint, { params });
	}
	login(endpoint = '', params = {}) {
		return this.instance.post(endpoint, params);
	}
	addProduct(endpoint = '', params = {}, headers = {}) {
		return this.instance.post(endpoint, params, headers);
	}
	editProduct(endpoint = '', params = {}, headers = {}) {
		return this.instance.post(endpoint, params, headers);
	}
	deleteProduct(endpoint = '', headers = {}) {
		return this.instance.delete(endpoint, headers);
	}
}

export const http = new Http();
