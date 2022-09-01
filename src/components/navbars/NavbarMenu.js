import { useMatch, useNavigate } from "react-router-dom";

// Styles + Icons
import { Stack, HStack, Button, Link } from "@chakra-ui/react";

// Constants
import { NAV_ITEMS } from "constants/NavbarConst";

export default function NavbarMenu(props) {
	const { isMobile = false } = props;

	if (isMobile) {
		return (
			<Stack align="end" spacing={4}>
				<Menu />
			</Stack>
		);
	}
	return (
		<HStack spacing={12} display={{ base: "none", md: "flex" }}>
			{NAV_ITEMS.map((item) => (
				<Menu key={item.url} navLink={item} />
			))}
		</HStack>
	);
}

function Menu(props) {
	const { navLink } = props;
	const isMatch = useMatch(navLink.url);
	const navigate = useNavigate();

	return (
		<Button
			as={Link}
			variant="link"
			color="purple.900"
			fontSize={16}
			fontWeight="medium"
			textDecoration={isMatch ? "underline" : "none"}
			onClick={() => navigate(navLink.url)}
		>
			{navLink.text}
		</Button>
	);
}
