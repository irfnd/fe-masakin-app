import useSWR from "swr";
import searchRecipes from "helpers/axios/searchRecipes";

export default function useNewRecipe() {
	const { data, error, mutate } = useSWR("newRecipe", () => searchRecipes.newRecipe());
	const loading = !data && !error;

	return { data, mutate, loading };
}
