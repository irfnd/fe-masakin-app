import { useFormContext } from "react-hook-form";

// Styles + Icons
import { Checkbox, FormControl, FormErrorMessage, Text } from "@chakra-ui/react";

export default function InputCheckbox(props) {
	const { name, placeholder } = props;
	const { register, formState } = useFormContext();
	const { errors } = formState;

	return (
		<FormControl display="flex" flexDirection="column" isInvalid={errors[name]}>
			<Checkbox
				colorScheme="yellow"
				borderColor="gray.400"
				_hover={{ borderColor: "gray.500" }}
				_focus={{ borderColor: "yellow.400" }}
				{...register(name)}
			>
				<Text fontSize={16} fontWeight="medium" color="gray.600">
					{placeholder}
				</Text>
			</Checkbox>
			{errors[name] && <FormErrorMessage>{errors[name].message}</FormErrorMessage>}
		</FormControl>
	);
}
