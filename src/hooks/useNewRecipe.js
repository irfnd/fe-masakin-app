import useSWR from "swr";
import recipes from "helpers/axios/recipes";

export default function useNewRecipe() {
	const { data, error, mutate } = useSWR("newRecipe", () => recipes.newRecipe());
	const loading = !data && !error;

	return { data, mutate, loading };
}
