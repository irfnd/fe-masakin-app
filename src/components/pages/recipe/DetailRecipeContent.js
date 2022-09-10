// Styles + Icons
import { Flex, Text, Image, ListItem, UnorderedList, Button } from "@chakra-ui/react";
import { BiPlay } from "react-icons/bi";

// Components + Images
import PlaceholderImage from "assets/images/recipe-placeholder.png";

export default function DetailRecipeContent() {
	return (
		<Flex direction="column" gap={10} boxSize="full">
			<Flex rounded="xl" h={{ base: 250, md: 350 }} w="full">
				<Image boxSize="full" objectFit="cover" rounded="xl" src={PlaceholderImage} />
			</Flex>
			<Flex direction="column" w="full" gap={10}>
				<Flex direction="column" gap={3}>
					<Text fontSize={18} fontWeight="semibold" color="purple.800">
						Description
					</Text>
					<Text fontSize={16}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque suscipit odit quia reprehenderit autem
						vel ducimus eligendi iusto distinctio voluptatem! Magnam dolorum suscipit commodi unde exercitationem quis
						alias, impedit eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque suscipit odit
						quia reprehenderit autem vel ducimus eligendi iusto distinctio voluptatem! Magnam dolorum suscipit commodi
						unde exercitationem quis alias, impedit eligendi!
					</Text>
					<Text fontSize={14} color="gray.500">
						September 12, 2022, 24:00 WIB
					</Text>
				</Flex>
				<Flex direction="column" gap={3}>
					<Text fontSize={18} fontWeight="semibold" color="purple.800">
						Ingredients
					</Text>
					<UnorderedList>
						<ListItem fontSize={16}>Lorem ipsum dolor sit amet</ListItem>
						<ListItem fontSize={16}>Consectetur adipiscing elit</ListItem>
						<ListItem fontSize={16}>Integer molestie lorem at massa</ListItem>
						<ListItem fontSize={16}>Facilisis in pretium nisl aliquet</ListItem>
					</UnorderedList>
				</Flex>
				<Flex direction="column" gap={3}>
					<Text fontSize={18} fontWeight="semibold" color="purple.800">
						Steps
					</Text>
					<Flex direction="column" gap={6}>
						{[...Array(5)].map((el, i) => (
							<Flex direction={{ base: "column", md: "row" }} align="start" gap={4} key={i}>
								<Button fontSize={14} colorScheme="yellow" color="purple.900" leftIcon={<BiPlay size={26} />} px={6}>
									Step {i + 1}
								</Button>
								<Text w="full">
									{i + 1}. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
								</Text>
							</Flex>
						))}
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
