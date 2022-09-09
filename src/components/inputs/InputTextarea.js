import { useFormContext } from "react-hook-form";

// Styles + Icons
import { Textarea, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

export default function InputTextarea(props) {
	const { name, label, placeholder, isGray } = props;
	const { register, formState } = useFormContext();
	const { errors } = formState;

	return (
		<FormControl display="flex" flexDirection="column" gap={2} isInvalid={errors[name]}>
			{label && (
				<FormLabel fontSize={16} fontWeight="medium" color="gray.600">
					{label}
				</FormLabel>
			)}
			<Textarea
				type="text"
				placeholder={placeholder}
				_placeholder={{ color: "gray.400" }}
				fontSize={14}
				bg={isGray ? "gray.100" : "white"}
				color="gray.600"
				borderColor="gray.400"
				focusBorderColor={!errors[name] ? "yellow.400" : "red.500"}
				_hover={{ borderColor: "gray.500" }}
				_focus={{ shadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11)" }}
				p={7}
				{...register(name)}
			/>
			{errors[name] && <FormErrorMessage>{errors[name].message}</FormErrorMessage>}
		</FormControl>
	);
}
