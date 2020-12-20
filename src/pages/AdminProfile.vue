<template>
	<div class="container profileDiv page">
		<div class="profile-form col-sm-12">
			<h3>
				<span>{{ $store.state.user.userRole }}</span> Profile
			</h3>
			<p>
				<span>{{ $store.state.user.userRole }}</span
				>: {{ $store.state.user.userName }}
			</p>
			<div class="chooseProductBtns">
				<button
					type="button"
					class="btn btn-lg btn-outline-warning chooseBtn"
					@click="toggleBalmsTableView()"
				>
					Balms
				</button>
				<button
					type="button"
					class="btn btn-lg btn-outline-warning chooseBtn"
					@click="toggleOilsTableView()"
				>
					Oils
				</button>
				<button
					type="button"
					class="btn btn-lg btn-outline-warning chooseBtn"
					@click="toggleSoapsTableView()"
				>
					Soaps
				</button>
			</div>

			<CreateProduct />

			<EditProduct
				v-show="false"
				:productId="productId"
				:productBrand="productBrand"
				:productDescription="productDescription"
				:productScent="productScent"
				:productEdition="productEdition"
				:productUnitPrice="productUnitPrice"
				:productUnitQuantity="productUnitQuantity"
				:productVolume="productVolume"
				:productLiquidVolume="productLiquidVolume"
				:productFilePath="productFilePath"
				:productName="productName"
			/>

			<div class="manageBalms" v-if="showBalmsTable">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>#</th>
							<th>Balms</th>
							<th>Brand</th>
							<th>Description</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Volume</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(balm, i) in $store.state.products.balms" :key="i">
							<th scope="row">{{ i + 1 }}</th>
							<td><img :src="balm.filePath" alt="" /></td>
							<td>{{ balm.brand }}</td>
							<td>{{ balm.description }}</td>
							<td>{{ balm.unitPrice }} <span>&#8364;</span></td>
							<td>{{ balm.unitQuantity }}</td>
							<td>{{ balm.volume }} ml</td>
							<td>
								<button
									class="btn btn-dark"
									data-toggle="modal"
									data-target="#editProductModal"
									:productId="balm.id"
									:productBrand="balm.brand"
									:productDescription="balm.description"
									:productUnitPrice="balm.unitPrice"
									:productUnitQuantity="balm.unitQuantity"
									:productVolume="balm.volume"
									:productFilePath="balm.filePath"
									:productName="$store.state.productKeys[0]"
									@click="getTargetProduct($event)"
								>
									Edit
								</button>
							</td>
							<td>
								<button
									class="btn btn-dark"
									:productId="balm.id"
									:productName="$store.state.productKeys[0]"
									@click="deleteProduct($event)"
								>
									Delete
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="manageOils" v-if="showOilsTable">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>#</th>
							<th>Oils</th>
							<th>Brand</th>
							<th>Description</th>
							<th>Scent</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Volume</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(oil, i) in $store.state.products.oils" :key="i">
							<th scope="row">{{ i + 1 }}</th>
							<td><img :src="oil.filePath" alt="" /></td>
							<td>{{ oil.brand }}</td>
							<td>{{ oil.scent }}</td>
							<td>{{ oil.description }}</td>
							<td>{{ oil.unitPrice }}<span>&#8364;</span></td>
							<td>{{ oil.unitQuantity }}</td>
							<td>{{ oil.liquidVolume }} ml</td>
							<td>
								<button
									class="btn btn-dark"
									data-toggle="modal"
									data-target="#editProductModal"
									:productId="oil.id"
									:productBrand="oil.brand"
									:productDescription="oil.description"
									:productScent="oil.scent"
									:productUnitPrice="oil.unitPrice"
									:productUnitQuantity="oil.unitQuantity"
									:productLiquidVolume="oil.liquidVolume"
									:productFilePath="oil.filePath"
									:productName="$store.state.productKeys[1]"
									@click="getTargetProduct($event)"
								>
									Edit
								</button>
							</td>
							<td>
								<button
									class="btn btn-dark"
									:productId="oil.id"
									:productName="$store.state.productKeys[1]"
									@click="deleteProduct($event)"
								>
									Delete
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="manageSoaps" v-if="showSoapsTable">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>#</th>
							<th>Soaps</th>
							<th>Brand</th>
							<th>Description</th>
							<th>Edition</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(soap, i) in $store.state.products.soaps" :key="i">
							<th scope="row">{{ i + 1 }}</th>
							<td><img :src="soap.filePath" alt="" /></td>
							<td>{{ soap.brand }}</td>
							<td>{{ soap.description }}</td>
							<td>{{ soap.edition }}</td>
							<td>{{ soap.unitPrice }} <span>&#8364;</span></td>
							<td>{{ soap.unitQuantity }}</td>
							<td>
								<button
									class="btn btn-dark"
									data-toggle="modal"
									data-target="#editProductModal"
									:productId="soap.id"
									:productBrand="soap.brand"
									:productDescription="soap.description"
									:productEdition="soap.edition"
									:productUnitPrice="soap.unitPrice"
									:productUnitQuantity="soap.unitQuantity"
									:productFilePath="soap.filePath"
									:productName="$store.state.productKeys[2]"
									@click="getTargetProduct($event)"
								>
									Edit
								</button>
							</td>
							<td>
								<button
									class="btn btn-dark"
									:productId="soap.id"
									:productName="$store.state.productKeys[2]"
									@click="deleteProduct()"
								>
									Delete
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import CreateProduct from '../components/CreateProduct.vue';
import EditProduct from '../components/EditProduct.vue';
import { http } from '../services/Http.js';

export default {
	name: 'Profile',
	data() {
		return {
			showBalmsTable: false,
			showOilsTable: false,
			showSoapsTable: false,
			productId: '',
			productBrand: '',
			productDescription: '',
			productScent: '',
			productEdition: '',
			productUnitPrice: null,
			productUnitQuantity: null,
			productVolume: null,
			productLiquidVolume: null,
			productFilePath: '',
			productName: '',
		};
	},
	methods: {
		toggleBalmsTableView() {
			this.showBalmsTable = !this.showBalmsTable;
		},
		toggleOilsTableView() {
			this.showOilsTable = !this.showOilsTable;
		},
		toggleSoapsTableView() {
			this.showSoapsTable = !this.showSoapsTable;
		},
		getTargetProduct() {
			this.productId = event.target.getAttribute('productId');
			this.productBrand = event.target.getAttribute('productBrand');
			this.productDescription = event.target.getAttribute('productDescription');
			this.productScent = event.target.getAttribute('productScent');
			this.productEdition = event.target.getAttribute('productEdition');
			this.productUnitPrice = event.target.getAttribute('productUnitPrice');
			this.productUnitQuantity = event.target.getAttribute(
				'productUnitQuantity'
			);
			this.productVolume = event.target.getAttribute('productVolume');
			this.productLiquidVolume = event.target.getAttribute(
				'productLiquidVolume'
			);
			this.productFilePath = event.target.getAttribute('productFilePath');
			this.productName = event.target.getAttribute('productName');
			console.log(this.productName);
		},
		deleteProduct() {
			this.productId = event.target.getAttribute('productId');
			this.productName = event.target.getAttribute('productName');
			const token = localStorage.getItem('token');
			const tokenAuth = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			// console.log(this.productId, this.productName);

			http
				.deleteProduct(`${this.productName}/${this.productId}`, tokenAuth)
				.then((resp) => {
					console.log(resp);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	components: { CreateProduct, EditProduct },
};
</script>

<style scoped>
.profileDiv {
	min-height: 80vh;
}
span {
	text-transform: uppercase;
}
.profile-form {
	position: relative;
	top: 50px;
	background-color: transparent;
	padding-top: 20px;
}

img {
	height: auto;
	width: 100px;
}
.descrDiv {
	position: relative;
	left: 250px;
	top: -200px;
}
table {
	width: 80vw;
	margin-top: 30px;
}
tr {
	color: rgb(231, 157, 20);
}
tr:hover {
	color: #fff !important;
	background-color: rgb(59, 59, 59) !important;
}
.choseProductBtns {
	margin-bottom: 20px;
}
.chooseBtn {
	cursor: pointer !important;
	padding: 10px;
	margin: 10px;
	width: 100px;
}

.chooseBtn:hover {
	background-color: rgb(165, 114, 20);
}
</style>
