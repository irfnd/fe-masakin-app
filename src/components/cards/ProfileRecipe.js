import { useNavigate } from "react-router-dom";

// Styles + Icons
import { Box, Flex, Text, Image } from "@chakra-ui/react";

// Constants
import ASSETS from "constants/AssetsConst";

export default function ProfileRecipe(props) {
	const { recipe } = props;
	const navigate = useNavigate();

	return (
		<Flex position="relative" h={210} cursor="pointer" onClick={() => navigate(`/recipe/${recipe.id}`)}>
			<Box position="absolute" bgGradient="linear(transparent, rgba(0, 0, 0, 0.5) 80%)" rounded="2xl" boxSize="full">
				{" "}
			</Box>
			<Text position="absolute" bottom={0} color="white" fontSize={20} fontWeight="medium" mx={5} mb={5} noOfLines={1}>
				{recipe.name}
			</Text>
			<Image
				src={recipe.photo || ASSETS.recipePlaceholder.url}
				alt={recipe.photoName || ASSETS.recipePlaceholder.alt}
				rounded="2xl"
				boxSize="full"
				objectFit="cover"
			/>
		</Flex>
	);
}
