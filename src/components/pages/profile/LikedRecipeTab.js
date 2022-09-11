import Lottie from "lottie-react";
import useGetDataUser from "hooks/useGetDataUser";
import useLikedRecipe from "hooks/useLikedRecipe";

// Styles + Icons
import { Flex, SimpleGrid, Text, Spinner } from "@chakra-ui/react";

// Components + Images
import ProfileRecipe from "components/cards/ProfileRecipe";
import noEntry from "assets/illustrations/no-entry.json";

export default function LikedRecipeTab() {
	const { token } = useGetDataUser();
	const { data, loading } = useLikedRecipe(token.data.accessToken);
	const illustrationsOptions = { animationData: noEntry, loop: true };

	if (loading) {
		return (
			<Flex justify="center" w="full" py={10}>
				<Spinner size="xl" thickness="4px" color="orange.400" />
			</Flex>
		);
	}

	if (!data || data.length < 1) {
		return (
			<Flex justify="center" w="full" h="full" py={3.5}>
				<Flex direction="column" justify="center" align="center" boxSize="100px">
					<Lottie {...illustrationsOptions} />
					<Text fontSize={12} fontStyle="italic">
						No Recipe
					</Text>
				</Flex>
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
