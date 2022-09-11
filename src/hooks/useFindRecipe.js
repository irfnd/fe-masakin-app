import useSWR from "swr";
import recipes from "helpers/axios/recipes";

export default function useFindRecipe(id) {
	const { data, error, mutate } = useSWR("findRecipe", () => recipes.findRecipe(id));
	const loading = !data && !error;

	return { data, mutate, loading, error };
}
