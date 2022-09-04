import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

// Styles + Icons
import {
	Box,
	Flex,
	Stack,
	Heading,
	Image,
	AspectRatio,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

// Components + Images
import CustomContainer from "components/layouts/CustomContainer";
import DiscoverImg from "assets/images/discover.jpg";

export default function Discover() {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const onEnter = (e) => e.key === "Enter" && navigate(`/search?search=${search}`);

	return (
		<CustomContainer position="relative">
			<Flex
				direction={{ base: "column", md: "row" }}
				align="center"
				gap={{ base: 10, md: 0 }}
				pt={{ base: "120px", md: "140px" }}
				pb={{ base: 10, md: "60px" }}
				px={{ base: 5, md: 0 }}
			>
				<Box
					display={{ base: "none", md: "block" }}
					position="absolute"
					right={0}
					w="25%"
					h="full"
					bg="orange.500"
					zIndex={-1}
				>
					{" "}
				</Box>
				<Stack w={{ base: "full", sm: "80%", md: "50%" }} spacing={6}>
					<Heading
						color="purple.800"
						textAlign={{ base: "center", md: "start" }}
						fontSize={{
							base: "2xl",
							sm: "3xl",
							md: 38,
							lg: 58,
						}}
						lineHeight="sm"
					>
						Discover Recipe & Delicious Food
					</Heading>
					<InputGroup w={{ base: "full", md: "90%" }}>
						<InputLeftElement display="flex" justifyContent="center" alignItems="center" p={7} h="full">
							<Icon as={BiSearch} color="gray.400" boxSize={7} />
						</InputLeftElement>
						<Input
							type="text"
							placeholder="Search Recipe"
							_placeholder={{ color: "gray.400" }}
							rounded="xl"
							fontSize={14}
							bg="gray.100"
							color="gray.600"
							borderColor="gray.400"
							focusBorderColor="yellow.400"
							_hover={{ borderColor: "gray.500" }}
							_focus={{ backgroundColor: "white", shadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11)" }}
							p={7}
							pl={12}
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							onKeyDown={onEnter}
						/>
					</InputGroup>
				</Stack>
				<Flex justify={{ base: "center", md: "end" }} align="center" w={{ base: "full", sm: "80%", md: "50%" }}>
					<AspectRatio w="450px" ratio={1}>
						<Image src={DiscoverImg} rounded="2xl" alt="Photo Section 1" objectFit="cover" />
					</AspectRatio>
				</Flex>
			</Flex>
		</CustomContainer>
	);
}
