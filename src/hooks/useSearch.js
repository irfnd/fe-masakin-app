import useSWR from "swr";
import searchRecipes from "helpers/axios/searchRecipes";

export default function useSearch(filter) {
	const swrOption = { revalidateOnFocus: false };
	const { data, mutate } = useSWR("search", () => searchRecipes.search(filter), swrOption);

	return { data, mutate };
}
