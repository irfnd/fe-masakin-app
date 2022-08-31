// Styles + Icons
import { Button, Link, HStack, StackDivider } from "@chakra-ui/react";

export default function AuthButton() {
	return (
		<HStack spacing={3} divider={<StackDivider borderColor="gray.300" />}>
			<Button
				as={Link}
				variant="ghost"
				colorScheme="yellow"
				fontWeight="medium"
				color="purple.900"
				_hover={{ textDecoration: "none", bg: "yellow.400", color: "white" }}
				_active={{ bg: "yellow.500" }}
			>
				Log In
			</Button>
			<Button as={Link} colorScheme="yellow" color="white" _hover={{ textDecoration: "none", bg: "yellow.500" }}>
				Daftar
			</Button>
		</HStack>
	);
}
