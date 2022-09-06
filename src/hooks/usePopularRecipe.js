import useSWR from "swr";
import recipes from "helpers/axios/recipes";

export default function usePopularRecipe() {
	const { data, error, mutate } = useSWR("popularRecipe", () => recipes.popularRecipe());
	const loading = !data && !error;

	return { data, mutate, loading };
}
