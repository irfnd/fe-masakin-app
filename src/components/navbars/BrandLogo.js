import { useNavigate } from "react-router-dom";

// Styles + Icons
import { Flex, Image } from "@chakra-ui/react";

// Components + Images
import BrandLogo2 from "assets/images/brand.logo-2.png";

export default function BrandLogo() {
	const navigate = useNavigate();

	return (
		<Flex
			display={{ base: "flex", md: "none" }}
			align="center"
			color="orange.400"
			cursor="pointer"
			h="full"
			gap={1}
			onClick={() => navigate("/")}
		>
			<Image src={BrandLogo2} w="120px" />
		</Flex>
	);
}
