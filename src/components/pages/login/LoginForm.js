// Styles + Icons
import { Flex, Heading, Text, Divider, Button, Link } from "@chakra-ui/react";

// Components
import Input from "components/inputs/Input";

export default function LoginForm() {
	return (
		<Flex direction="column" w="full" gap={6}>
			<Flex direction="column" align="center" gap={6}>
				<Heading fontSize={30} fontWeight="bold" color="yellow.400">
					Welcome
				</Heading>
				<Text fontSize={18} color="gray.500">
					Log in into your exiting account
				</Text>
				<Divider borderColor="gray.300" />
			</Flex>
			<Flex direction="column" gap={4}>
				<Input type="email" label="E-mail" placeholder="examplexxx@mail.com" />
				<Input type="password" label="Password" placeholder="Password" />
				<Input type="checkbox" placeholder="I agree to terms & conditions" />
				<Button
					bg="yellow.400"
					fontSize={16}
					fontWeight="medium"
					color="white"
					_hover={{ bg: "yellow.500" }}
					_active={{ bg: "yellow.400" }}
					py={7}
					my={4}
				>
					Log in
				</Button>
				<Divider borderColor="gray.300" />
			</Flex>
			<Text textAlign="center" fontSize={14} color="gray.500">
				Don&apos;t have an account?
				<Link color="yellow.400" fontWeight="semibold" href="#" ml={1}>
					Sign Up
				</Link>
			</Text>
		</Flex>
	);
}
