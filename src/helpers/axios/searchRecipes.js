import api from "helpers/axios/api";

const searchRecipes = {
	search: (params) => api.get("recipes", { params }).then((res) => res.data),
};

export default searchRecipes;
