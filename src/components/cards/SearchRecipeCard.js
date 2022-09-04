import moment from "moment";

// Styles + Icons
import { Flex, Text, Image, Icon } from "@chakra-ui/react";
import { RiHeartFill, RiBookmarkFill, RiCalendarEventFill, RiUserStarFill } from "react-icons/ri";

// Components + Images
import RecipePlaceholder from "assets/images/recipe-placeholder.png";

export default function SearchRecipeCard(props) {
	const { recipe } = props;

	return (
		<Flex direction="column" border="1px" borderColor="gray.300" rounded="xl" p={4}>
			<Flex w="full" h="200px">
				<Image
					src={recipe.photo || RecipePlaceholder}
					boxSize="full"
					objectFit="cover"
					alt="Photo Recipe"
					rounded="xl"
				/>
			</Flex>
			<Flex direction="column" pt={4} gap={1}>
				<Text fontSize={18} fontWeight="semibold" color="purple.900">
					{recipe.name}
				</Text>
				<Flex gap={1} align="center" color="gray.600">
					<Icon as={RiUserStarFill} boxSize="14px" />
					<Text fontSize={14}>{recipe.user.name}</Text>
				</Flex>
				<Flex gap={1} align="center" color="gray.600">
					<Icon as={RiCalendarEventFill} boxSize="14px" />
					<Text fontSize={14}>{moment(recipe.createdAt).format("MMMM DD, YYYY")}</Text>
				</Flex>
				<Flex gap={4} pt={2}>
					<Flex align="center" gap={1}>
						<Icon as={RiHeartFill} boxSize={22} color="orange.400" />
						<Text fontWeight="semibold" color="purple.900">
							{recipe.likedCount}
						</Text>
					</Flex>
					<Flex align="center" gap={1}>
						<Icon as={RiBookmarkFill} boxSize={22} color="orange.400" />
						<Text fontWeight="semibold" color="purple.900">
							{recipe.savedCount}
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
