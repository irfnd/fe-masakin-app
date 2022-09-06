import useSWR from "swr";
import recipes from "helpers/axios/recipes";

export default function usePopularForYou() {
	const { data, error, mutate } = useSWR("popularForYou", () => recipes.popularForYou());
	const loading = !data && !error;

	return { data, mutate, loading };
}
