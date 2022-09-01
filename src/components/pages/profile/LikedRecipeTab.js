// Styles + Icons
import { Box, Flex, SimpleGrid, Text, Image } from "@chakra-ui/react";

// Components + Images
import DiscoverImg from "assets/images/discover.jpg";

export default function LikedRecipeTab() {
	return (
		<SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 4 }} spacing={8} w="full">
			{[...Array(8)].map((el) => (
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
			))}
		</SimpleGrid>
	);
}
