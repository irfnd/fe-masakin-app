import { useNavigate } from "react-router-dom";
import useCookieDecrypt from "hooks/useCookieDecrypt";
import Swal from "sweetalert2";

// Styles + Icons
import { HStack, Flex, Box, Text, Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BiUser, BiLogOut } from "react-icons/bi";

// Components + Images
import ProfileImg from "assets/images/profile-placeholder.png";

export default function UserAvatar(props) {
	const { onClose } = props;
	const { user, token } = useCookieDecrypt();
	const navigate = useNavigate();

	const onLogout = () => {
		onClose();
		Swal.fire({
			icon: "question",
			title: "Log out",
			text: "Are you sure to log out?",
			showCancelButton: true,
			confirmButtonText: "Sure",
			cancelButtonText: "No",
		}).then((result) => {
			if (result.isConfirmed) {
				user.deleteUser("user");
				token.deleteToken("token");
				return navigate("/register");
			}
			return null;
		});
	};

	return (
		<HStack color="gray.500" fontSize={16} spacing={3}>
			<Flex>
				<Text>Hi,</Text>
				<Text ms={1} fontWeight="semibold" color="purple.900">
					{user?.data?.name?.split(" ")[0]}
				</Text>
			</Flex>
			<Box>
				<Menu isLazy>
					<MenuButton>
						<Avatar boxSize={10} borderWidth={2} borderColor="orange.400" src={user?.data?.photo || ProfileImg} />
					</MenuButton>
					<MenuList mt={4}>
						<MenuItem
							color="purple.900"
							icon={<BiUser size={18} />}
							onClick={() => {
								onClose();
								navigate("/profile");
							}}
						>
							Profile
						</MenuItem>
						<MenuItem color="purple.900" icon={<BiLogOut size={18} />} onClick={onLogout}>
							Logout
						</MenuItem>
					</MenuList>
				</Menu>
			</Box>
		</HStack>
	);
}
