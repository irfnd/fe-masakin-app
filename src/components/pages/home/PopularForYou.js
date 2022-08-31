// Styles + Icons
import {
	Box,
	Flex,
	Stack,
	Heading,
	Text,
	Divider,
	Image,
	AspectRatio,
	Button,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

// Components + Images
import CustomContainer from "components/layouts/CustomContainer";
import DiscoverImg from "assets/images/discover.jpg";

export default function PopularForYou() {
	return (
		<CustomContainer>
			<Flex direction={{ base: "column", md: "row" }} py={{ base: 10, md: "60px" }} px={{ base: 5, md: 0 }}>
				<Flex direction="column" w="full" align="center" gap={{ base: 10, md: 20 }}>
					<Flex w={{ base: "full", sm: "80%", md: "full" }} align="center">
						<Stack direction="row" align="center" h="90px" gap={4} py={4}>
							<Divider orientation="vertical" borderWidth={6} borderColor="orange.500" opacity={1} />
							<Text
								color="purple.900"
								fontWeight="medium"
								fontSize={{
									base: "2xl",
									sm: "3xl",
									md: 28,
									lg: 40,
								}}
								lineHeight={0}
								w="full"
							>
								Popular For You !
							</Text>
						</Stack>
					</Flex>
					<Flex direction={{ base: "column", md: "row" }} w="full" align="center" gap={{ base: 10, md: 14 }}>
						<Flex
							position="relative"
							justify={{ base: "center", md: "start" }}
							align="center"
							w={{ base: "full", sm: "80%", md: "50%" }}
						>
							<Box
								display={{ base: "none", md: "block" }}
								bg="transparent"
								borderColor="orange.500"
								borderWidth={2}
								rounded="2xl"
								position="absolute"
								w={{ base: "full", lg: "450px" }}
								mt={{ md: 10, lg: 14, xl: 20 }}
								ml={{ md: 5, lg: 6, xl: 10 }}
								h="full"
								zIndex={-1}
							>
								{" "}
							</Box>
							<AspectRatio w="450px" ratio={1}>
								<Image src={DiscoverImg} rounded="2xl" alt="Photo Section 1" objectFit="cover" />
							</AspectRatio>
						</Flex>
						<Flex
							direction="column"
							justify={{ base: "center", md: "start" }}
							align={{ base: "center", md: "start" }}
							w={{ base: "full", sm: "80%", md: "50%" }}
							gap={4}
						>
							<Text
								color="purple.900"
								fontWeight="semibold"
								fontSize={{
									base: "2xl",
									sm: "3xl",
									md: 28,
									lg: 40,
									xl: 48,
								}}
								w="full"
							>
								Healthy Bone Broth Ramen (Quick & Easy)
							</Text>
							<Divider borderColor="gray.800" w={{ base: "full", sm: "50%", md: "20%" }} />
							<Text fontSize={{ base: 16, md: 18, lg: 20 }}>
								Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!
							</Text>
							<Button
								bg="yellow.400"
								fontSize={16}
								fontWeight="medium"
								color="white"
								_hover={{ bg: "yellow.500" }}
								_active={{ bg: "yellow.400" }}
								w={{ base: "full", md: "fit-content" }}
								py={7}
								px={10}
							>
								Learn More
							</Button>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</CustomContainer>
	);
}
