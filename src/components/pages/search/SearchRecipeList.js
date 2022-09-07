import useSearch from "hooks/useSearch";

// Styles + Icons
import { SimpleGrid, Flex, Spinner } from "@chakra-ui/react";

// Components + Images
import SearchRecipeCard from "components/cards/SearchRecipeCard";

export default function SearchRecipeList(props) {
	const { filter } = props;
	const { data, loading } = useSearch(filter);

	if (loading) {
		return (
			<Flex justify="center" w="full" py={10}>
				<Spinner size="xl" thickness="4px" color="orange.400" />
			</Flex>
		);
	}

	return (
		<SimpleGrid columns={{ base: 1, sm: 1, md: 3, xl: 4 }} spacing={4} w="full">
			{data.results.data.rows.map((el) => (
				<SearchRecipeCard recipe={el} key={el.id} />
			))}
		</SimpleGrid>
	);
}
