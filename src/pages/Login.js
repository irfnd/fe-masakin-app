// Styles + Icons
import { Flex, Text } from "@chakra-ui/react";

// Components
import LoginForm from "components/pages/login/LoginForm";

export default function Login() {
	return (
		<Flex position="relative">
			<Flex position="fixed" justify="center" align="center" bg="yellow.400" minH="100vh" w="50%">
				<Text>Logo</Text>
			</Flex>
			<Flex
				position="absolute"
				right={0}
				justify="center"
				align="center"
				p="120px"
				minH="100vh"
				w="50%"
			>
				<LoginForm />
			</Flex>
		</Flex>
	);
}
