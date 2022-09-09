import useGetDataUser from "hooks/useGetDataUser";

// Styles + Icons
import {
	Box,
	Stack,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerCloseButton,
	DrawerOverlay,
	Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

// Components + Images
import NavbarMenu from "components/navbars/NavbarMenu";
import UserAvatar from "components/navbars/UserAvatar";
import AuthButton from "components/navbars/AuthButton";

export default function NavbarMobile() {
	const { user } = useGetDataUser();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box display={{ base: "flex", md: "none" }} boxSize={10}>
			<Button variant="link" onClick={onOpen} color="purple.900">
				<HamburgerIcon h={8} w={8} />
			</Button>
			<Drawer isOpen={isOpen} size="xs" placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerBody display="flex" justifyContent="center" py={20}>
						<Stack spacing={10} h="full" w="80%">
							<NavbarMenu isMobile />
							<Stack align="end" spacing={4} h="full">
								{user.data ? <UserAvatar onClose={onClose} /> : <AuthButton />}
							</Stack>
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
}
