import { useState } from "react";
import useGetDataUser from "hooks/useGetDataUser";
import useFindRecipe from "hooks/useFindRecipe";
import useDateFormat from "hooks/useDateFormat";
import useCheckRecipe from "hooks/useCheckRecipe";
import recipes from "helpers/axios/recipes";

// Styles + Icons
import { Flex, Text, Image, ListItem, UnorderedList, Button, Skeleton } from "@chakra-ui/react";
import { BiPlay } from "react-icons/bi";
import { RiHeartFill, RiBookmarkFill, RiHeartLine, RiBookmarkLine } from "react-icons/ri";

// Components + Images
import PlaceholderImage from "assets/images/recipe-placeholder.png";

export default function DetailRecipeContent(props) {
	const { id } = props;
	const { token } = useGetDataUser();
	const { data, mutate, loading } = useFindRecipe(id);
	const check = token.data ? useCheckRecipe(id, token.data.accessToken) : null;
	const [likeLoading, setLikeloading] = useState(false);
	const [saveLoading, setSaveloading] = useState(false);

	const onLike = () => {
		setLikeloading(true);
		recipes.addLike(id, token.data.accessToken).finally(() => {
			setTimeout(() => {
				mutate();
				check.mutate();
				setTimeout(() => setLikeloading(false), 500);
			}, 3000);
		});
	};

	const onUnlike = () => {
		setLikeloading(true);
		recipes.removeLike(id, token.data.accessToken).finally(() => {
			setTimeout(() => {
				mutate();
				check.mutate();
				setTimeout(() => setLikeloading(false), 500);
			}, 3000);
		});
	};

	const onSave = () => {
		setSaveloading(true);
		recipes.addSave(id, token.data.accessToken).finally(() => {
			setTimeout(() => {
				mutate();
				check.mutate();
				setTimeout(() => setSaveloading(false), 500);
			}, 3000);
		});
	};

	const onUnsave = () => {
		setSaveloading(true);
		recipes.removeSave(id, token.data.accessToken).finally(() => {
			setTimeout(() => {
				mutate();
				check.mutate();
				setTimeout(() => setSaveloading(false), 500);
			}, 3000);
		});
	};

	return (
		<Flex direction="column" gap={10} boxSize="full">
			<Skeleton rounded="xl" isLoaded={!loading}>
				<Flex position="relative" rounded="xl" h={{ base: 250, md: 350 }} w="full">
					<Image boxSize="full" objectFit="cover" rounded="xl" src={data?.photo || PlaceholderImage} />
					{token.data ? (
						<Flex position="absolute" bottom={0} right={0} mb={2} me={2} gap={2}>
							{!check.loading && check.data.liked ? (
								<Button
									isLoading={likeLoading && !check.loading}
									colorScheme="yellow"
									size="sm"
									color="purple.900"
									leftIcon={<RiHeartFill size={18} />}
									onClick={onUnlike}
								>
									{data?.likedCount}
								</Button>
							) : (
								<Button
									isLoading={likeLoading && !check.loading}
									size="sm"
									color="purple.900"
									leftIcon={<RiHeartLine size={18} />}
									onClick={onLike}
								>
									{data?.likedCount}
								</Button>
							)}
							{!check.loading && check.data.saved ? (
								<Button
									isLoading={saveLoading && !check.loading}
									colorScheme="yellow"
									size="sm"
									color="purple.900"
									leftIcon={<RiBookmarkFill size={18} />}
									onClick={onUnsave}
								>
									{data?.savedCount}
								</Button>
							) : (
								<Button
									isLoading={saveLoading && !check.loading}
									size="sm"
									color="purple.900"
									leftIcon={<RiBookmarkLine size={18} />}
									onClick={onSave}
								>
									{data?.savedCount}
								</Button>
							)}
						</Flex>
					) : (
						<Flex position="absolute" bottom={0} right={0} mb={2} me={2} gap={2}>
							<Button size="sm" color="purple.900" leftIcon={<RiHeartFill size={18} />}>
								{data?.likedCount}
							</Button>
							<Button size="sm" color="purple.900" leftIcon={<RiBookmarkFill size={18} />}>
								{data?.savedCount}
							</Button>
						</Flex>
					)}
				</Flex>
			</Skeleton>
			<Flex direction="column" w="full" gap={10}>
				<Flex direction="column" gap={3}>
					<Skeleton rounded="md" isLoaded={!loading}>
						<Text fontSize={18} fontWeight="semibold" color="purple.800">
							Description
						</Text>
					</Skeleton>
					<Skeleton rounded="md" isLoaded={!loading}>
						{!data ? (
							<Text fontSize={16}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque suscipit odit quia reprehenderit
								autem vel ducimus eligendi iusto distinctio voluptatem! Magnam dolorum suscipit commodi unde
								exercitationem quis alias, impedit eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</Text>
						) : (
							<Text fontSize={16}>{data?.shortDesc}</Text>
						)}
					</Skeleton>
					<Skeleton rounded="md" isLoaded={!loading}>
						<Text fontSize={14} color="gray.500">
							{!data ? "September 12, 2022, 24:00 WIB" : useDateFormat(data?.createdAt)}
						</Text>
					</Skeleton>
				</Flex>
				<Flex direction="column" gap={3}>
					<Skeleton rounded="md" isLoaded={!loading}>
						<Text fontSize={18} fontWeight="semibold" color="purple.800">
							Ingredients
						</Text>
					</Skeleton>
					<Skeleton rounded="md" isLoaded={!loading}>
						{!data ? (
							<UnorderedList>
								<ListItem fontSize={16}>Lorem ipsum dolor sit amet</ListItem>
								<ListItem fontSize={16}>Consectetur adipiscing elit</ListItem>
								<ListItem fontSize={16}>Integer molestie lorem at massa</ListItem>
								<ListItem fontSize={16}>Integer molestie lorem at massa</ListItem>
								<ListItem fontSize={16}>Integer molestie lorem at massa</ListItem>
							</UnorderedList>
						) : (
							<UnorderedList>
								{data?.ingredients.map((el, i) => (
									<ListItem fontSize={16} key={i}>
										{el}
									</ListItem>
								))}
							</UnorderedList>
						)}
					</Skeleton>
				</Flex>
				<Flex direction="column" gap={3}>
					<Skeleton rounded="md" isLoaded={!loading}>
						<Text fontSize={18} fontWeight="semibold" color="purple.800">
							Steps
						</Text>
					</Skeleton>

					<Flex direction="column" gap={6}>
						{!data
							? [...Array(5)].map((el, i) => (
									<Skeleton rounded="md" isLoaded={!loading} key={i}>
										<Flex direction={{ base: "column", md: "row" }} align="start" gap={4}>
											<Button
												fontSize={14}
												colorScheme="yellow"
												color="purple.900"
												leftIcon={<BiPlay size={26} />}
												px={6}
											>
												Step {i + 1}
											</Button>
											<Text w="full">
												{i + 1}. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
											</Text>
										</Flex>
									</Skeleton>
							  ))
							: data?.steps.map((el, i) => (
									<Skeleton rounded="md" isLoaded={!loading} key={i}>
										<Flex direction={{ base: "column", md: "row" }} align="start" gap={4}>
											<Button
												fontSize={14}
												colorScheme="yellow"
												color="purple.900"
												leftIcon={<BiPlay size={26} />}
												px={6}
												onClick={() => {
													const videoURL =
														data?.videos?.filter((item) => item.name === `Step ${i + 1}`)[0].video || null;
													if (videoURL) {
														window.open(videoURL, "_blank");
													}
												}}
											>
												Step {i + 1}
											</Button>
											<Text w="full">
												{i + 1}. {el}
											</Text>
										</Flex>
									</Skeleton>
							  ))}
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
