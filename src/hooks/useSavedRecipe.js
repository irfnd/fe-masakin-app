import useSWR from "swr";
import recipes from "helpers/axios/recipes";

export default function useSavedRecipe(token) {
	const { data, error, mutate } = useSWR("savedRecipe", () => recipes.savedRecipe(token));
	const loading = !data && !error;

	return { data, mutate, loading, error };
}
