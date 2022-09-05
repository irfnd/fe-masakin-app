import useSWR from "swr";
import searchRecipes from "helpers/axios/searchRecipes";

export default function usePopularForYou() {
	const { data, error, mutate } = useSWR("popularForYou", () => searchRecipes.popularForYou());
	const loading = !data && !error;

	return { data, mutate, loading };
}
