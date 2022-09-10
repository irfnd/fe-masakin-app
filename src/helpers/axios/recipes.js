import api from "helpers/axios/api";

const paramNewRecipe = { size: 10, sort: "createdAt", order: "desc" };
const setBearer = (token) => ({ headers: { Authorization: `Bearer ${token}` } });

const recipes = {
	search: (params) => api.get("/recipes", { params }).then((res) => res.data),
	addRecipe: (token, data) => api.post("/recipes/", data, setBearer(token)).then((res) => res.data),
	popularForYou: () => api.get("/recipes/popular").then((res) => res.data.results.data[0]),
	newRecipe: () => api.get("/recipes/new", { params: paramNewRecipe }).then((res) => res.data.results.data.rows[0]),
	popularRecipe: () => api.get("/recipes/popular").then((res) => res.data.results.data),
	myRecipe: (token) => api.get("/recipes/mine", setBearer(token)).then((res) => res.data.results.data),
	likedRecipe: (token) => api.get("/recipes/liked", setBearer(token)).then((res) => res.data.results.data),
	savedRecipe: (token) => api.get("/recipes/saved", setBearer(token)).then((res) => res.data.results.data),
};

export default recipes;
