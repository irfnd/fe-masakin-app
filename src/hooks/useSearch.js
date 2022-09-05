import useSWR from "swr";
import searchRecipes from "helpers/axios/searchRecipes";

export default function useSearch(filter) {
	const swrOption = { revalidateOnFocus: false };
	const { data, error, mutate } = useSWR("search", () => searchRecipes.search(filter), swrOption);
	const loading = !data && !error;

	return { data, mutate, loading };
}
