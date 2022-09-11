// Styles + Icons
import { Flex, Text, Avatar } from "@chakra-ui/react";

// Constants
import ASSETS from "constants/AssetsConst";

export default function CommentCard(props) {
	const { data } = props;

	return (
		<Flex gap={4}>
			<Avatar src={data.user.photo || ASSETS.userPlaceholder.url} />
			<Flex direction="column" fontSize={14}>
				<Text fontWeight="semibold" fontSize={16} color="purple.800">
					{data.user.name}
				</Text>
				<Text>{data.comment}</Text>
			</Flex>
		</Flex>
	);
}
