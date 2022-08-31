// Styles + Icons
import { Stack, HStack, Button, Link } from "@chakra-ui/react";

// Constants
import { NAV_ITEMS } from "constants/NavbarConst";

export default function NavbarMenu({ isMobile = false }) {
	if (isMobile) {
		return (
			<Stack align="end" spacing={4}>
				<Menu />
			</Stack>
		);
	}
	return (
		<HStack spacing={12} display={{ base: "none", md: "flex" }}>
			<Menu />
		</HStack>
	);
}

function Menu() {
	return (
		<>
			{NAV_ITEMS.map((item) => (
				<Button key={item.url} as={Link} variant="link" color="purple.900" fontSize={16} fontWeight="medium">
					{item.text}
				</Button>
			))}
		</>
	);
}
