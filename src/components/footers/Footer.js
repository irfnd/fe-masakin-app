// Styles + Icons
import { Flex, VStack, HStack, Wrap, WrapItem, Text } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Flex direction="column" w="full" color="white" bg="orange.500">
			<VStack textAlign="center" w="full" spacing={{ base: 2, md: 4 }} p={{ base: 50, md: 100 }}>
				<Text fontSize={{ base: 30, sm: 36, md: 45, lg: 54 }} fontWeight="medium">
					Eat, Cook, Repeat
				</Text>
				<Text fontSize={{ base: 12, sm: 14, md: 16, lg: 18 }}>Share your best recipe by uploading here!</Text>
			</VStack>
			<HStack
				justify="center"
				fontSize={{ base: 12, sm: 14, md: 16 }}
				spacing={{ base: 4, md: 6 }}
				w="full"
				pb={{ base: 50 }}
			>
				<Wrap px={9} justify="center" spacing={{ base: 4, md: 8 }}>
					<WrapItem>Product</WrapItem>
					<WrapItem>Company</WrapItem>
					<WrapItem>Learn more</WrapItem>
					<WrapItem>Get in touch</WrapItem>
				</Wrap>
			</HStack>
		</Flex>
	);
}
