import useSWR from "swr";
import searchRecipes from "helpers/axios/searchRecipes";

export default function usePopularRecipe() {
	const { data, error, mutate } = useSWR("popularRecipe", () => searchRecipes.popularRecipe());
	const loading = !data && !error;

	return { data, mutate, loading };
}
