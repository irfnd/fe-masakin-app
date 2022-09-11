import { useParams } from "react-router-dom";
import useFindRecipe from "hooks/useFindRecipe";

// Styles + Icons
import { Flex, SimpleGrid, Heading, Skeleton } from "@chakra-ui/react";

// Components + Images
import FullLayout from "components/layouts/FullLayout";
import CustomContainer from "components/layouts/CustomContainer";
import DetailRecipeContent from "components/pages/recipe/DetailRecipeContent";
import CommentContent from "components/pages/recipe/CommentContent";

export default function DetailRecipe() {
	const { id } = useParams();
	const { data, mutate, loading } = useFindRecipe(id);

	return (
		<FullLayout title={data ? data?.name : "Loading"}>
			<CustomContainer minH="100vh">
				<Flex direction="column" pt={{ base: "120px", md: "140px" }} pb="120px" px={{ base: 5, md: 0 }} gap={10}>
					<Skeleton rounded="md" isLoaded={!loading}>
						<Heading
							textAlign={{ base: "center", md: "start" }}
							color="purple.800"
							fontSize={{ base: "2xl", sm: "3xl" }}
						>
							{data ? data?.name : "Recipe name"}
						</Heading>
					</Skeleton>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
						<DetailRecipeContent id={id} />
						<CommentContent id={id} loading={loading} mutate={mutate} />
					</SimpleGrid>
				</Flex>
			</CustomContainer>
		</FullLayout>
	);
}
