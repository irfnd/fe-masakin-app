// Styles + Icons
import { Flex } from "@chakra-ui/react";

// Components + Images
import AddComment from "components/pages/recipe/AddComment";
import CommentList from "components/pages/recipe/CommentList";

export default function CommentContent() {
	return (
		<Flex direction="column" gap={10} boxSize="full">
			<Flex direction="column" w="full" gap={10}>
				<AddComment />
				<CommentList />
			</Flex>
		</Flex>
	);
}
