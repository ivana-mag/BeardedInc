<template>
	<div class="createDiv">
		<button
			type="button"
			class="btn btn-outline-warning addBtn"
			data-toggle="modal"
			data-target="#createProductModal"
			:productName="$store.state.productKeys[0]"
			@click="getProductName($event)"
		>
			Add New Balm
		</button>
		<button
			type="button"
			class="btn btn-outline-warning addBtn"
			data-toggle="modal"
			data-target="#createProductModal"
			:productName="$store.state.productKeys[1]"
			@click="getProductName($event)"
		>
			Add New Oil
		</button>
		<button
			type="button"
			class="btn btn-outline-warning addBtn"
			data-toggle="modal"
			data-target="#createProductModal"
			:productName="$store.state.productKeys[2]"
			@click="getProductName($event)"
		>
			Add New Soap
		</button>

		<div
			class="modal fade"
			id="createProductModal"
			tabindex="-1"
			aria-labelledby="createProductModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header bg-dark">
						<h5 class="modal-title" id="exampleModalLabel">Add product</h5>
					</div>
					<div class="modal-body bg-dark">
						<form>
							<div class="form-group">
								<input
									type="text"
									class="form-control productParams"
									placeholder="Brand"
									v-model="Brand"
								/>
								<input
									type="text"
									class="form-control productParams"
									placeholder="Description"
									v-model="Description"
								/>
								<input
									v-if="productName === 'oils'"
									type="text"
									class="form-control productParams"
									placeholder="Scent"
									v-model="Scent"
								/>
								<input
									v-if="productName === 'soaps'"
									type="text"
									class="form-control productParams"
									placeholder="Edition"
									v-model="Edition"
								/>
								<input
									type="text"
									class="form-control productParams"
									placeholder="Price"
									v-model="Price"
								/>
								<input
									type="text"
									class="form-control productParams"
									placeholder="Quantity"
									v-model="Quantity"
								/>
								<input
									v-if="productName === 'balms'"
									type="text"
									class="form-control productParams"
									placeholder="Volume"
									v-model="Volume"
								/>
								<input
									v-if="productName === 'oils'"
									type="text"
									class="form-control productParams"
									placeholder="Liquid Volume"
									v-model="LiquidVolume"
								/>
								<input
									type="text"
									class="form-control productParams"
									placeholder="FilePath"
									v-model="FilePath"
								/>
							</div>
						</form>
					</div>
					<div class="modal-footer bg-dark">
						<button
							type="button"
							class="btn btn-secondary"
							data-dismiss="modal"
						>
							Close
						</button>
						<button
							type="submit"
							class="btn btn-outline-warning"
							:productName="productName"
							@click="addProduct"
							data-dismiss="modal"
						>
							Save product
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { http } from '../services/Http.js';
export default {
	name: 'CreateProduct',
	data() {
		return {
			Brand: null,
			Description: null,
			Scent: null,
			Edition: null,
			Price: null,
			Quantity: null,
			Volume: null,
			LiquidVolume: null,
			FilePath: null,
			productName: null,
			createdProductName: null,
		};
	},
	//http://localhost:3000/images/balms/balm-4.jpg
	//http://localhost:3000/images/oils/oil-1.jpg
	//http://localhost:3000/images/soaps/soap-3.jpg
	methods: {
		getProductName() {
			this.productName = event.target.getAttribute('productName');
		},
		addProduct() {
			var balmProps = {
				brand: this.Brand,
				description: this.Description,
				scent: this.Scent,
				edition: this.Edition,
				unitPrice: parseInt(this.Price),
				unitQuantity: parseInt(this.Quantity),
				volume: parseInt(this.Volume),
				liquidVolume: parseInt(this.LiquidVolume),
				filePath: this.FilePath,
			};

			const token = localStorage.getItem('token');
			const tokenAuth = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			console.log(this.productName);

			http
				.addProduct(`${this.productName}`, balmProps, tokenAuth)
				.then((resp) => {
					console.log(resp);
				})
				.catch((err) => {
					console.log(err);
				});

			(this.Brand = null),
				(this.Description = null),
				(this.Scent = null),
				(this.Edition = null),
				(this.Price = null),
				(this.Quantity = null),
				(this.Volume = null),
				(this.liquidVolume = null),
				(this.FilePath = null);
		},
	},
};
</script>

<style scoped>
.modal {
	position: fixed;
	top: 100px;
}
.modal-dialog {
	color: rgb(231, 157, 20);
}
.modal-header,
.modal-footer {
	border: none;
}

button:hover {
	background-color: rgb(231, 157, 20);
}
.productParams {
	margin: 5px;
	width: 400px;
	margin-left: 30px;
}
.addBtn {
	margin-right: 20px;
}
</style>
