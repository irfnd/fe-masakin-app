// Styles + Icons
import { Flex, Avatar, Text, Button, Icon } from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";

// Components + Images
import ProfileImg from "assets/images/profile-placeholder.png";

export default function UserPhoto() {
	return (
		<Flex direction="column" align="center" gap={6}>
			<Flex position="relative" boxSize="140px">
				<Avatar boxSize="full" borderWidth={2} borderColor="orange.400" src={ProfileImg} />
				<Button
					position="absolute"
					bottom={0}
					right={0}
					variant="ghost"
					bg="white"
					colorScheme="yellow"
					fontWeight="medium"
					color="purple.900"
					_hover={{ textDecoration: "none", bg: "yellow.400", color: "white" }}
					_active={{ bg: "yellow.500" }}
					rounded="full"
					shadow="md"
					p={0}
				>
					<Icon as={BiEditAlt} />
				</Button>
			</Flex>
			<Text fontSize={18} fontWeight="semibold" color="purple.900">
				Irfandi Iqbal Abimanyu
			</Text>
		</Flex>
	);
}
