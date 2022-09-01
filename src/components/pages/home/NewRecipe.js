// Styles + Icons
import { Box, Flex, Stack, Text, Divider, Image, AspectRatio, Button } from "@chakra-ui/react";

// Components + Images
import CustomContainer from "components/layouts/CustomContainer";
import DiscoverImg from "assets/images/discover.jpg";

export default function NewRecipe() {
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
						>
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
							>
								Healthy Bone Broth Ramen (Quick & Easy)
							</Text>
							<Divider borderColor="gray.800" w="20%" />
							<Text fontSize={{ base: 16, md: 18, lg: 20 }}>
								Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That&apos;s right!
							</Text>
							<Button
								bg="yellow.400"
								fontSize={16}
								fontWeight="medium"
								color="white"
								_hover={{ bg: "yellow.500" }}
								_active={{ bg: "yellow.400" }}
								w={{ base: "full", md: "fit-content" }}
								py={7}
								px={10}
							>
								Learn More
							</Button>
						</Flex>
						<Flex
							justify={{ base: "center", md: "end" }}
							align="center"
							w={{ base: "full", sm: "80%", md: "50%" }}
						>
							<AspectRatio w="450px" ratio={1}>
								<Image src={DiscoverImg} rounded="2xl" alt="Photo Section 1" objectFit="cover" />
							</AspectRatio>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</CustomContainer>
	);
}
