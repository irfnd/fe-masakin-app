import api from "helpers/axios/api";

const paramNewRecipe = { size: 10, sort: "createdAt", order: "desc" };
const setBearer = (token) => ({ headers: { Authorization: `Bearer ${token}` } });

const recipes = {
	search: (params) => api.get("/recipes", { params }).then((res) => res.data),
	addRecipe: (token, data) => api.post("/recipes/", data, setBearer(token)).then((res) => res.data),
	findRecipe: (id) => api.get(`/recipes/${id}`).then((res) => res.data.results.data),
	popularForYou: () => api.get("/recipes/popular").then((res) => res.data.results.data[0]),
	newRecipe: () => api.get("/recipes/new", { params: paramNewRecipe }).then((res) => res.data.results.data.rows[0]),
	popularRecipe: () => api.get("/recipes/popular").then((res) => res.data.results.data),
	myRecipe: (token) => api.get("/recipes/mine", setBearer(token)).then((res) => res.data.results.data),
	likedRecipe: (token) => api.get("/recipes/liked", setBearer(token)).then((res) => res.data.results.data),
	savedRecipe: (token) => api.get("/recipes/saved", setBearer(token)).then((res) => res.data.results.data),
	checkRecipe: (id, token) => api.get(`/recipes/check/${id}`, setBearer(token)).then((res) => res.data.results.data),
	addLike: (id, token) => api.post(`/recipes/liked/${id}`, null, setBearer(token)).then((res) => res.data),
	addSave: (id, token) => api.post(`/recipes/saved/${id}`, null, setBearer(token)).then((res) => res.data),
	removeLike: (id, token) => api.delete(`/recipes/liked/${id}`, setBearer(token)).then((res) => res.data),
	removeSave: (id, token) => api.delete(`/recipes/saved/${id}`, setBearer(token)).then((res) => res.data),
	addComment: (data, token) => api.post("/comments", data, setBearer(token)).then((res) => res.data),
};

export default recipes;
