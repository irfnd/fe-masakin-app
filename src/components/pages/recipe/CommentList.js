import useFindRecipe from "hooks/useFindRecipe";

// Styles + Icons
import { Flex, Skeleton } from "@chakra-ui/react";

// Components + Images
import CommentCard from "components/cards/CommentCard";

export default function CommentList(props) {
	const { id } = props;
	const { data, loading } = useFindRecipe(id);

	return (
		<Flex direction="column" gap={6}>
			{data &&
				data?.comments.map((el, i) => (
					<Skeleton isLoaded={!loading} key={i}>
						<CommentCard data={el} />
					</Skeleton>
				))}
		</Flex>
	);
}
