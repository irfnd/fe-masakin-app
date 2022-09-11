import { useNavigate } from "react-router-dom";

// Styles + Icons
import { Flex, Image } from "@chakra-ui/react";

// Constants
import ASSETS from "constants/AssetsConst";

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
			<Image src={ASSETS.brandLogo2.url} alt={ASSETS.brandLogo2.alt} w="120px" />
		</Flex>
	);
}
