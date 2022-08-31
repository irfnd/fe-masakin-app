// Styles + Icons
import { HStack, Flex, Box, Text, Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BiUser, BiLogOut } from "react-icons/bi";

// Components + Images
import ProfileImg from "assets/images/profile-placeholder.png";

export default function UserAvatar(props) {
	const { user } = props;

	return (
		<HStack color="gray.500" fontSize={16} spacing={3}>
			<Flex>
				<Text>Hi,</Text>
				<Text ms={1} fontWeight="semibold" color="purple.900">
					{user.name.split(" ")[0]}
				</Text>
			</Flex>
			<Box>
				<Menu isLazy>
					<MenuButton>
						<Avatar boxSize={10} borderWidth={2} borderColor="orange.400" src={ProfileImg} />
					</MenuButton>
					<MenuList mt={4}>
						<MenuItem color="purple.900" icon={<BiUser size={18} />}>
							Profile
						</MenuItem>
						<MenuItem color="purple.900" icon={<BiLogOut size={18} />}>
							Logout
						</MenuItem>
					</MenuList>
				</Menu>
			</Box>
		</HStack>
	);
}
