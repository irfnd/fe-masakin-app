import useSWR from "swr";
import recipes from "helpers/axios/recipes";

export default function useLikedRecipe(token) {
	const { data, error, mutate } = useSWR("likedRecipe", () => recipes.likedRecipe(token));
	const loading = !data && !error;

	return { data, mutate, loading, error };
}
