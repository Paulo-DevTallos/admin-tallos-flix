import axios from "axios";
const URL_API = import.meta.VITE_URL_API;

export const api = axios.create({
	baseURL: URL_API,
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
});
