// Styles + Icons
import { Input, FormControl, FormLabel } from "@chakra-ui/react";

export default function InputText(props) {
	const { name, label, placeholder } = props;

	return (
		<FormControl display="flex" flexDirection="column" gap={2}>
			<FormLabel fontSize={16} fontWeight="medium" color="gray.600">
				{label}
			</FormLabel>
			<Input
				type="text"
				placeholder={placeholder}
				_placeholder={{ color: "gray.400" }}
				fontSize={14}
				color="gray.600"
				borderColor="gray.400"
				focusBorderColor="yellow.400"
				_hover={{ borderColor: "gray.500" }}
				_focus={{ shadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11)" }}
				p={7}
			/>
		</FormControl>
	);
}
