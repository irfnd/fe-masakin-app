import useGetDataUser from "hooks/useGetDataUser";
import useLikedRecipe from "hooks/useLikedRecipe";

// Styles + Icons
import { Flex, SimpleGrid, Spinner, Skeleton } from "@chakra-ui/react";

// Components + Images
import ProfileRecipe from "components/cards/ProfileRecipe";

export default function LikedRecipeTab() {
	const { token } = useGetDataUser();
	const { data, loading } = useLikedRecipe(token.data.accessToken);

	if (loading) {
		return (
			<Flex justify="center" w="full" py={10}>
				<Spinner size="xl" thickness="4px" color="orange.400" />
			</Flex>
		);
	}

	return (
		<SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 4 }} spacing={8} w="full">
			{data.map((el) => (
				<ProfileRecipe key={`liked-recipe-${el.id}`} recipe={el} />
			))}
		</SimpleGrid>
	);
}
