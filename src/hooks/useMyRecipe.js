import useSWR from "swr";
import recipes from "helpers/axios/recipes";

export default function useMyRecipe(token) {
	const { data, error, mutate } = useSWR("myRecipe", () => recipes.myRecipe(token));
	const loading = !data && !error;

	return { data, mutate, loading, error };
}
