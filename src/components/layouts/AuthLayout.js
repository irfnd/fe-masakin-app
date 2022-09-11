import { useTitle } from "react-use";

// Styles + Icons
import { Flex, Image } from "@chakra-ui/react";

// Components + Images
import BgLogin from "assets/images/background-login.jpg";
import BrandLogo from "assets/images/brand-logo-1.png";

export default function AuthLayout(props) {
	const { title, children } = props;
	useTitle(`${title} - Masakin App`);

	return (
		<Flex position="relative" justify={{ base: "start", sm: "center", md: "start" }}>
			<Flex
				position={{ base: "absolute", md: "fixed" }}
				justify="center"
				align="center"
				bgImage={`linear-gradient(rgba(230, 98, 0, 0.7), rgba(230, 98, 0, 0.7)), url(${BgLogin})`}
				bgPosition="top"
				bgSize="cover"
				bgRepeat="no-repeat"
				minH={{ base: "full", md: "100vh" }}
				w={{ base: "full", md: "50%" }}
			>
				<Flex direction="column" align="center">
					<Image src={BrandLogo} boxSize="140px" />
				</Flex>
			</Flex>
			<Flex
				position={{ base: "relative", md: "absolute" }}
				justify="center"
				align="center"
				right={0}
				py={{ base: 5, md: 10 }}
				px={{ base: 5, md: 2, lg: 10, xl: 100 }}
				minH="100vh"
				w={{ base: "full", sm: "90%", md: "50%" }}
			>
				<Flex
					direction="column"
					bg="white"
					w="full"
					justify="center"
					align="center"
					rounded={{ base: "xl" }}
					p={10}
					gap={6}
				>
					{children}
				</Flex>
			</Flex>
		</Flex>
	);
}
