import useGetDataUser from "hooks/useGetDataUser";

// Styles + Icons
import { Flex, HStack, Spacer } from "@chakra-ui/react";

// Components + Images
import CustomContainer from "components/layouts/CustomContainer";
import NavbarMenu from "components/navbars/NavbarMenu";
import NavbarMobile from "components/navbars/NavbarMobile";
import UserAvatar from "components/navbars/UserAvatar";
import AuthButton from "components/navbars/AuthButton";

export default function Navbar() {
	const { user } = useGetDataUser();

	return (
		<CustomContainer w="full" position="fixed" zIndex={10} top={0} py={5} bg="white" boxShadow="xl">
			<Flex>
				<Spacer display={{ base: "flex", md: "none" }} />
				<NavbarMobile />
				<NavbarMenu />
				<Spacer display={{ base: "none", md: "flex" }} />
				<HStack display={{ base: "none", md: "flex" }}>{user?.data ? <UserAvatar /> : <AuthButton />}</HStack>
			</Flex>
		</CustomContainer>
	);
}
