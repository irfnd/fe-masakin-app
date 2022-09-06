import useSWR from "swr";
import recipes from "helpers/axios/recipes";

export default function useSearch(filter) {
	const swrOption = { revalidateOnFocus: false };
	const { data, error, mutate } = useSWR("search", () => recipes.search(filter), swrOption);
	const loading = !data && !error;

	return { data, mutate, loading };
}
