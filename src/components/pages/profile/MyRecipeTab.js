import useGetDataUser from "hooks/useGetDataUser";
import useMyRecipe from "hooks/useMyRecipe";

// Styles + Icons
import { Flex, SimpleGrid, Spinner } from "@chakra-ui/react";

// Components + Images
import ProfileRecipe from "components/cards/ProfileRecipe";

export default function MyRecipeTab() {
	const { token } = useGetDataUser();
	const { data, loading, error } = useMyRecipe(token.data.accessToken);

	if (loading) {
		return (
			<Flex justify="center" w="full" py={10}>
				<Spinner size="xl" thickness="4px" color="orange.400" />
			</Flex>
		);
	}

	if (error || data.length <= 0) {
		<Flex justify="center" w="full" py={10}>
			<Spinner size="xl" thickness="4px" color="orange.400" />
		</Flex>;
	}

	return (
		<SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 4 }} spacing={8} w="full">
			{data.map((el) => (
				<ProfileRecipe key={`my-recipe-${el.id}`} recipe={el} />
			))}
		</SimpleGrid>
	);
}
