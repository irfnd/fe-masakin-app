// Styles + Icons
import { Checkbox, Text } from "@chakra-ui/react";

export default function InputCheckbox(props) {
	const { name, placeholder } = props;

	return (
		<Checkbox
			colorScheme="yellow"
			size="lg"
			borderColor="gray.400"
			_hover={{ borderColor: "gray.500" }}
			_focus={{ borderColor: "yellow.400" }}
		>
			<Text fontSize={16} fontWeight="medium" color="gray.600">
				{placeholder}
			</Text>
		</Checkbox>
	);
}
