import { useNavigate } from "react-router-dom";
import useNewRecipe from "hooks/useNewRecipe";

// Styles + Icons
import { Box, Flex, Stack, Text, Divider, Image, AspectRatio, Button, Skeleton } from "@chakra-ui/react";

// Components + Images
import CustomContainer from "components/layouts/CustomContainer";

// Constants
import ASSETS from "constants/AssetsConst";

export default function NewRecipe() {
	const { data, loading } = useNewRecipe();
	const navigate = useNavigate();

	return (
		<CustomContainer position="relative">
			<Flex direction={{ base: "column", md: "row" }} py={{ base: 10, md: "60px" }} px={{ base: 5, md: 0 }}>
				<Box
					display={{ base: "none", md: "block" }}
					bg="orange.500"
					position="absolute"
					borderTopStartRadius="2xl"
					right={0}
					w={{ md: "30%", lg: "25%" }}
					mt={32}
					h={{ md: "55%", lg: "60%" }}
					zIndex={-1}
				>
					{" "}
				</Box>
				<Flex direction="column" align="center" w="full" gap={{ base: 10, md: 20 }}>
					<Flex w={{ base: "full", sm: "80%", md: "full" }} align="center">
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
								New Recipe
							</Text>
						</Stack>
					</Flex>
					<Flex direction={{ base: "column", md: "row" }} w="full" align="center" gap={{ base: 10, md: 14 }}>
						<Flex
							direction="column"
							justify={{ base: "center", md: "start" }}
							align={{ base: "center", md: "start" }}
							w={{ base: "full", sm: "80%", md: "50%" }}
							gap={4}
							order={{ base: 2, md: 1 }}
						>
							<Skeleton w="full" isLoaded={!loading}>
								<Text
									color="purple.900"
									fontWeight="semibold"
									fontSize={{
										base: "2xl",
										sm: "3xl",
										md: 28,
										lg: 40,
										xl: 48,
									}}
									w="full"
									noOfLines={1}
								>
									{data?.name}
								</Text>
							</Skeleton>
							<Divider borderColor="purple.900" w={{ base: "full", sm: "50%", md: "20%" }} />
							<Skeleton w="full" isLoaded={!loading}>
								<Text w="full" fontSize={{ base: 16, md: 18, lg: 20 }} noOfLines={5}>
									{data?.shortDesc}
								</Text>
							</Skeleton>
							<Skeleton w="full" isLoaded={!loading}>
								<Button
									bg="yellow.400"
									fontSize={16}
									fontWeight="medium"
									color="purple.900"
									_hover={{ bg: "yellow.500" }}
									_active={{ bg: "yellow.400" }}
									w={{ base: "full", md: "fit-content" }}
									py={7}
									px={10}
									onClick={() => navigate(`/recipe/${data?.id}`)}
								>
									Learn More
								</Button>
							</Skeleton>
						</Flex>
						<Flex
							justify={{ base: "center", md: "end" }}
							align="center"
							w={{ base: "full", sm: "80%", md: "50%" }}
							order={{ base: 1, md: 2 }}
						>
							<AspectRatio w="450px" ratio={1}>
								<Skeleton rounded="2xl" isLoaded={!loading}>
									<Image
										src={data?.photo || ASSETS.recipePlaceholder.url}
										alt={data?.photoName || ASSETS.recipePlaceholder.alt}
										objectFit="cover"
										boxSize="full"
										rounded="2xl"
									/>
								</Skeleton>
							</AspectRatio>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</CustomContainer>
	);
}
