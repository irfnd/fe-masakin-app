import useSearch from "hooks/useSearch";

// Styles + Icons
import { SimpleGrid, Flex, Skeleton } from "@chakra-ui/react";

// Components + Images
import SearchRecipeCard from "components/cards/SearchRecipeCard";

export default function SearchRecipeList(props) {
	const { filter } = props;
	const { data, loading } = useSearch(filter);

	return (
		<Skeleton isLoaded={!loading}>
			<SimpleGrid columns={{ base: 1, sm: 1, md: 3, xl: 4 }} spacing={4}>
				{data?.results?.data?.rows?.map((el, i) => (
					<SearchRecipeCard recipe={el} key={i} />
				))}
			</SimpleGrid>
		</Skeleton>
	);
}
