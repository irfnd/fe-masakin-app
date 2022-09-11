import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import useGetDataUser from "hooks/useGetDataUser";
import useCheckRecipe from "hooks/useCheckRecipe";
import recipes from "helpers/axios/recipes";

// Styles + Icons
import { Flex, Text, Image, Icon, Spinner } from "@chakra-ui/react";
import {
	RiHeartFill,
	RiBookmarkFill,
	RiCalendarEventFill,
	RiUserStarFill,
	RiHeartLine,
	RiBookmarkLine,
} from "react-icons/ri";

// Components + Images
import RecipePlaceholder from "assets/images/recipe-placeholder.png";

export default function SearchRecipeCard(props) {
	const { recipe, mutate: searchMutate } = props;
	const { token } = useGetDataUser();
	const check = token.data ? useCheckRecipe(recipe.id, token.data.accessToken) : null;
	const [likeLoading, setLikeloading] = useState(false);
	const [saveLoading, setSaveloading] = useState(false);
	const navigate = useNavigate();

	const onLike = () => {
		setLikeloading(true);
		recipes.addLike(recipe.id, token.data.accessToken).finally(() => {
			setTimeout(() => {
				searchMutate();
				check.mutate();
				setTimeout(() => setLikeloading(false), 500);
			}, 3000);
		});
	};

	const onUnlike = () => {
		setLikeloading(true);
		recipes.removeLike(recipe.id, token.data.accessToken).finally(() => {
			setTimeout(() => {
				searchMutate();
				check.mutate();
				setTimeout(() => setLikeloading(false), 500);
			}, 3000);
		});
	};

	const onSave = () => {
		setSaveloading(true);
		recipes.addSave(recipe.id, token.data.accessToken).finally(() => {
			setTimeout(() => {
				searchMutate();
				check.mutate();
				setTimeout(() => setSaveloading(false), 500);
			}, 3000);
		});
	};

	const onUnsave = () => {
		setSaveloading(true);
		recipes.removeSave(recipe.id, token.data.accessToken).finally(() => {
			setTimeout(() => {
				searchMutate();
				check.mutate();
				setTimeout(() => setSaveloading(false), 500);
			}, 3000);
		});
	};

	return (
		<Flex direction="column" border="1px" borderColor="gray.300" rounded="xl" p={4}>
			<Flex w="full" h="200px" cursor="pointer" onClick={() => navigate(`/recipe/${recipe.id}`)}>
				<Image
					src={recipe.photo || RecipePlaceholder}
					boxSize="full"
					objectFit="cover"
					alt="Photo Recipe"
					rounded="xl"
				/>
			</Flex>
			<Flex direction="column" pt={4} gap={1}>
				<Text
					fontSize={18}
					fontWeight="semibold"
					color="purple.900"
					cursor="pointer"
					onClick={() => navigate(`/recipe/${recipe.id}`)}
				>
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
				{token.data && (
					<Flex gap={4} pt={2}>
						{!check.loading && check.data.liked ? (
							<Flex align="center" gap={1} cursor="pointer" onClick={onUnlike}>
								{likeLoading && !check.loading ? (
									<Spinner color="orange.500" size="sm" />
								) : (
									<>
										<Icon as={RiHeartFill} boxSize={22} color="orange.400" />
										<Text fontWeight="semibold" color="purple.900">
											{recipe.likedCount}
										</Text>
									</>
								)}
							</Flex>
						) : (
							<Flex align="center" gap={1} cursor="pointer" onClick={onLike}>
								{likeLoading && !check.loading ? (
									<Spinner color="orange.500" size="sm" />
								) : (
									<>
										<Icon as={RiHeartLine} boxSize={22} color="orange.400" />
										<Text fontWeight="semibold" color="purple.900">
											{recipe.likedCount}
										</Text>
									</>
								)}
							</Flex>
						)}
						{!check.loading && check.data.saved ? (
							<Flex align="center" gap={1} cursor="pointer" onClick={onUnsave}>
								{saveLoading && !check.loading ? (
									<Spinner color="orange.500" size="sm" />
								) : (
									<>
										<Icon as={RiBookmarkFill} boxSize={22} color="orange.400" />
										<Text fontWeight="semibold" color="purple.900">
											{recipe.savedCount}
										</Text>
									</>
								)}
							</Flex>
						) : (
							<Flex align="center" gap={1} cursor="pointer" onClick={onSave}>
								{saveLoading && !check.loading ? (
									<Spinner color="orange.500" size="sm" />
								) : (
									<>
										<Icon as={RiBookmarkLine} boxSize={22} color="orange.400" />
										<Text fontWeight="semibold" color="purple.900">
											{recipe.savedCount}
										</Text>
									</>
								)}
							</Flex>
						)}
					</Flex>
				)}
				{!token.data && (
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
				)}
			</Flex>
		</Flex>
	);
}
