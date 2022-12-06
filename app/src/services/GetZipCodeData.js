import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://api.zippopotam.us/",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default {
	getZipCodeData(zip) {
		return apiClient.get("us/" + zip);
	},
};
