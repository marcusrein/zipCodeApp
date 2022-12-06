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
			<ZipCodeCard :zipCodeCard="zipCodeInfo" />
		</h3>
	</div>
</template>

<script>
// @ is an alias to /src
import ZipCodeCard from "@/components/ZipCodeCard.vue";
import axios from "axios";

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
	created() {
		axios
			.get("https://api.zippopotam.us/us/30030")
			.then((response) => {
				this.zipCodeInfo = response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
</script>
