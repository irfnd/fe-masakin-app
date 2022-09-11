import useSWR from "swr";
import recipes from "helpers/axios/recipes";

export default function useCheckRecipe(id, token) {
	const { data, error, mutate } = useSWR(`checkRecipe${id}`, () => recipes.checkRecipe(id, token));
	const loading = !data && !error;

	return { data, mutate, loading, error };
}
