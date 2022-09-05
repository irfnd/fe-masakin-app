import api from "helpers/axios/api";

const searchRecipes = {
	search: (params) => {
		return api.get("/recipes", { params }).then((res) => res.data);
	},
	popularForYou: () => {
		return api.get("/recipes/popular").then((res) => res.data.results.data[0]);
	},
	newRecipe: () => {
		return api.get("/recipes/new?size=10&sort=createdAt&order=desc").then((res) => res.data.results.data.rows[0]);
	},
	popularRecipe: () => {
		return api.get("/recipes/popular").then((res) => res.data.results.data);
	},
};

export default searchRecipes;
