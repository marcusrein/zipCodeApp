<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />

		<h3>
			<input
				v-model.lazy.number.trim="zipcode"
				type="text"
				placeholder="Enter Your Zip Code"
			/>
			{{ zipcode }}
			{{ zipCodeInfo }}
			<ZipCodeCard :zipCodeCard="zipCodeInfo" />
		</h3>
	</div>
</template>

<script>
// @ is an alias to /src
import ZipCodeCard from "@/components/ZipCodeCard.vue";
import GetZipCodeData from "@/services/GetZipCodeData";

export default {
	name: "ZipCodeList",
	components: {
		ZipCodeCard,
	},
	data() {
		return {
			zipcode: "",
			zipCodeInfo: null,
		};
	},
	updated() {
		let zipcode = this.zipcode;
		GetZipCodeData.getZipCodeData(zipcode)
			.then((response) => {
				this.zipCodeInfo = response.data;
				console.log(zipCodeInfo);
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
</script>
