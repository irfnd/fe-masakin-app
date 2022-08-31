// Styles + Icons
import { Box, Container } from "@chakra-ui/react";

export default function CustomContainer({ children, ...box }) {
	return (
		<Box {...box}>
			<Container
				maxW={{
					base: "sm",
					sm: "container.sm",
					md: "container.md",
					lg: "container.lg",
					xl: "container.xl",
				}}
				h="full"
			>
				{children}
			</Container>
		</Box>
	);
}
