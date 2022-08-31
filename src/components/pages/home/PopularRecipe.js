// Styles + Icons
import { Box, Flex, Stack, Text, Divider, Image, SimpleGrid } from "@chakra-ui/react";

// Components + Images
import CustomContainer from "components/layouts/CustomContainer";
import DiscoverImg from "assets/images/discover.jpg";

export default function PopularRecipe() {
	return (
		<CustomContainer>
			<Flex direction={{ base: "column", md: "row" }} py={{ base: 10, md: "60px" }} px={{ base: 5, md: 0 }}>
				<Flex direction="column" align="center" gap={{ base: 10, md: 20 }}>
					<Flex w={{ base: "full", sm: "80%", md: "full" }} align="center">
						<Stack direction="row" align="center" h="90px" gap={4} py={4}>
							<Divider orientation="vertical" borderWidth={6} borderColor="orange.500" opacity={1} />
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
					<SimpleGrid
						columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
						w={{ base: "full", sm: "80%", md: "full" }}
						spacing={5}
					>
						<Flex position="relative" cursor="pointer">
							<Box
								position="absolute"
								bgGradient="linear(transparent, rgba(0, 0, 0, 0.5) 80%)"
								rounded="2xl"
								boxSize="full"
							>
								{" "}
							</Box>
							<Text position="absolute" bottom={0} color="white" fontSize={20} fontWeight="medium" mb={5} ml={5}>
								Chicken Kare
							</Text>
							<Image src={DiscoverImg} rounded="2xl" alt="Photo Section 1" objectFit="cover" />
						</Flex>
					</SimpleGrid>
				</Flex>
			</Flex>
		</CustomContainer>
	);
}
