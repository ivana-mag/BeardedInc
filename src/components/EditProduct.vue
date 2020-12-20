<template>
	<div
		class="modal fade"
		id="editProductModal"
		tabindex="-1"
		aria-labelledby="editProductModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header bg-dark">
					<h5 class="modal-title" id="editProductModalLabel">Edit product</h5>
				</div>
				<div class="modal-body bg-dark">
					<form>
						<div class="form-group">
							<label for="#productId">Id</label>
							<input
								id="productId"
								type="text"
								class="form-control productParams"
								placeholder="Id"
								v-model="productId"
								disabled
							/>
							<label for="#productBrand">Brand</label>
							<input
								id="productBrand"
								type="text"
								class="form-control productParams"
								placeholder="Brand"
								v-model="productBrand"
							/>
							<label for="#productDescription">Description</label>
							<input
								id="productDescription"
								type="text"
								class="form-control productParams"
								placeholder="Description"
								v-model="productDescription"
							/>
							<label for="#productScent" v-if="productName === 'oils'"
								>Scent</label
							>
							<input
								v-if="productName === 'oils'"
								id="productScent"
								type="text"
								class="form-control productParams"
								placeholder="Scent"
								v-model="productScent"
							/>
							<label for="#productEdition" v-if="productName === 'soaps'"
								>Edition</label
							>

							<input
								v-if="productName === 'soaps'"
								id="productEdition"
								type="text"
								class="form-control productParams"
								placeholder="Edition"
								v-model="productEdition"
							/>
							<label for="#productUnitPrice">Price</label>
							<input
								id="productUnitPrice"
								type="text"
								class="form-control productParams"
								placeholder="Price"
								v-model="productUnitPrice"
							/>
							<label for="#productUnitQuantity">Quantity</label>
							<input
								id="productUnitQuantity"
								type="text"
								class="form-control productParams"
								placeholder="Quantity"
								v-model="productUnitQuantity"
							/>
							<label for="#productVolume" v-if="productName === 'balms'"
								>Volume</label
							>
							<input
								v-if="productName === 'balms'"
								id="productVolume"
								type="text"
								class="form-control productParams"
								placeholder="Volume"
								v-model="productVolume"
							/>
							<label for="#productLiquidVolume" v-if="productName === 'oils'"
								>Liquid Volume</label
							>
							<input
								v-if="productName === 'oils'"
								id="productLiquidVolume"
								type="text"
								class="form-control productParams"
								placeholder="Liquid Volume"
								v-model="productLiquidVolume"
							/>
							<label for="#productFilePath">Image</label>
							<input
								id="productFilePath"
								type="text"
								class="form-control productParams"
								placeholder="FilePath"
								v-model="productFilePath"
							/>
						</div>
					</form>
				</div>
				<div class="modal-footer bg-dark">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">
						Close
					</button>
					<button
						type="submit"
						class="btn btn-outline-warning"
						data-dismiss="modal"
						@click="editProduct()"
					>
						Save product
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { http } from '../services/Http.js';
export default {
	name: 'EditProduct',
	data() {
		return {};
	},
	props: {
		productId: String,
		productBrand: String,
		productDescription: String,
		productScent: String,
		productEdition: String,
		productUnitPrice: String,
		productUnitQuantity: String,
		productVolume: String,
		productFilePath: String,
		productName: String,
		productLiquidVolume: String,
	},
	methods: {
		editProduct() {
			var productProps = {
				id: this.productId,
				brand: this.productBrand,
				description: this.productDescription,
				scent: this.productScent,
				edition: this.productEdition,
				unitPrice: parseInt(this.productUnitPrice),
				unitQuantity: parseInt(this.productUnitQuantity),
				volume: parseInt(this.productVolume),
				liquidVolume: parseInt(this.productLiquidVolume),
				filePath: this.productFilePath,
			};

			const token = localStorage.getItem('token');
			const tokenAuth = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			console.log('click me');

			http
				.editProduct(`${this.productName}`, productProps, tokenAuth)
				.then((resp) => {
					console.log(resp);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style scoped>
label {
	float: left;
	width: 120px;
	margin-right: 20px;
}
.modal {
	position: fixed;
	top: 80px;
}
.modal-dialog {
	color: rgb(231, 157, 20);
}
.modal-header,
.modal-footer,
.modal-body {
	border: none;
	width: 650px;
}
.modal-content {
	position: relative;
	left: -100px;
	margin-bottom: 100px;
}

button:hover {
	background-color: rgb(231, 157, 20);
}
.productParams {
	margin: 5px;
	width: 380px;
}
</style>
