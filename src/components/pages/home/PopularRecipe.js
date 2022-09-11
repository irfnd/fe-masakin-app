// Styles + Icons
import { Flex, Stack, Text, Divider } from "@chakra-ui/react";

// Components + Images
import CustomContainer from "components/layouts/CustomContainer";
import PopularRecipeSlider from "components/pages/home/PopularRecipeSlider";

export default function PopularRecipe() {
	return (
		<CustomContainer>
			<Flex
				direction={{ base: "column", md: "row" }}
				justify="center"
				align="center"
				w="full"
				pt={{ base: 10, md: "60px" }}
				pb="120px"
				px={{ base: 5, md: 0 }}
			>
				<Flex direction="column" w={{ base: "full", sm: "80%", md: "full" }} gap={{ base: 10, md: 20 }}>
					<Flex w="full" align="center">
						<Stack direction="row" align="center" h="90px" gap={4} py={4}>
							<Divider orientation="vertical" bg="orange.500" borderWidth={6} borderColor="orange.500" opacity={1} />
							<Text
								color="purple.900"
								fontWeight="medium"
								fontSize={{
									base: "2xl",
									sm: "3xl",
									md: 28,
									lg: 40,
								}}
								lineHeight={0}
								w="full"
							>
								Popular Recipe
							</Text>
						</Stack>
					</Flex>
					<Flex w="full" justify="center">
						<PopularRecipeSlider />
					</Flex>
				</Flex>
			</Flex>
		</CustomContainer>
	);
}
