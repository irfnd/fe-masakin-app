// Styles + Icons
import { Flex, SimpleGrid, Heading } from "@chakra-ui/react";

// Components + Images
import FullLayout from "components/layouts/FullLayout";
import CustomContainer from "components/layouts/CustomContainer";
import DetailRecipeContent from "components/pages/recipe/DetailRecipeContent";
import CommentContent from "components/pages/recipe/CommentContent";

export default function DetailRecipe() {
	return (
		<FullLayout title="Add Recipe">
			<CustomContainer h="full">
				<Flex direction="column" pt={{ base: "120px", md: "140px" }} pb="120px" px={{ base: 5, md: 0 }} gap={10}>
					<Heading textAlign={{ base: "center", md: "start" }} color="purple.800" fontSize={{ base: "2xl", sm: "3xl" }}>
						Add Recipe
					</Heading>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
						<DetailRecipeContent />
						<CommentContent />
					</SimpleGrid>
				</Flex>
			</CustomContainer>
		</FullLayout>
	);
}
