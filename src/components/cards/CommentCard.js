// Styles + Icons
import { Flex, Text, Avatar } from "@chakra-ui/react";

// Components + Images
import PlaceholderUser from "assets/images/profile-placeholder.png";

export default function CommentCard(props) {
	const { name, photo, comment } = props;

	return (
		<Flex gap={4}>
			<Avatar src={photo || PlaceholderUser} />
			<Flex direction="column" fontSize={14}>
				<Text fontWeight="semibold" fontSize={16} color="purple.800">
					{name}
				</Text>
				<Text>{comment}</Text>
			</Flex>
		</Flex>
	);
}
