// Styles + Icons
import { Flex } from "@chakra-ui/react";

// Components + Images
import CommentCard from "components/cards/CommentCard";

export default function CommentList() {
	return (
		<Flex direction="column" gap={6}>
			{[...Array(5)].map((el, i) => (
				<CommentCard key={i} />
			))}
		</Flex>
	);
}
