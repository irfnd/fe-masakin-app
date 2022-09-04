// Styles + Icons
import { SimpleGrid } from "@chakra-ui/react";

// Components + Images
import SearchRecipeCard from "components/cards/SearchRecipeCard";

export default function SearchRecipeList(props) {
	const { recipes } = props;

	return (
		<SimpleGrid columns={{ base: 1, sm: 1, md: 3, xl: 4 }} spacing={4}>
			{recipes?.results?.data?.rows?.map((el, i) => (
				<SearchRecipeCard recipe={el} key={i} />
			))}
		</SimpleGrid>
	);
}
