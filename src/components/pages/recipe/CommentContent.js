import useGetDataUser from "hooks/useGetDataUser";

// Styles + Icons
import { Flex, Text, Skeleton } from "@chakra-ui/react";

// Components + Images
import AddComment from "components/pages/recipe/AddComment";
import CommentList from "components/pages/recipe/CommentList";

export default function CommentContent(props) {
	const { id, mutate, loading } = props;
	const { token } = useGetDataUser();

	return (
		<Flex direction="column" gap={10} boxSize="full">
			<Flex direction="column" w="full" gap={token.data ? 8 : 6}>
				<Skeleton isLoaded={!loading}>
					<Text textAlign="left" fontSize={18} fontWeight="semibold" color="purple.800" w="full">
						Comments
					</Text>
				</Skeleton>
				{token.data && (
					<Skeleton isLoaded={!loading}>
						<AddComment id={id} mutate={mutate} />
					</Skeleton>
				)}
				<CommentList id={id} />
			</Flex>
		</Flex>
	);
}
