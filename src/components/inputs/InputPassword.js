import { useState } from "react";

// Styles + Icons
import {
	Input,
	InputGroup,
	InputRightElement,
	FormControl,
	FormLabel,
	Icon,
	Button,
} from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";

export default function InputPassword(props) {
	const { name, label, placeholder } = props;
	const [showPass, setShowPass] = useState(false);
	const [inputFocus, setInputFocus] = useState(false);
	const [inputHover, setInputHover] = useState(false);

	const iconColor = (inputFocus && "yellow.400") || (inputHover && "gray.500") || "gray.400";

	return (
		<FormControl display="flex" flexDirection="column" gap={2}>
			<FormLabel fontSize={16} fontWeight="medium" color="gray.600">
				{label}
			</FormLabel>
			<InputGroup>
				<Input
					type={showPass ? "text" : "password"}
					placeholder={placeholder}
					_placeholder={{ color: "gray.400" }}
					fontSize={14}
					color="gray.600"
					borderColor="gray.400"
					focusBorderColor="yellow.400"
					_hover={{ borderColor: "gray.500" }}
					_focus={{ shadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11)" }}
					p={7}
					onFocus={() => setInputFocus(!inputFocus)}
					onBlur={() => setInputFocus(!inputFocus)}
					onMouseOver={() => setInputHover(!inputHover)}
					onMouseLeave={() => setInputHover(!inputHover)}
				/>
				<InputRightElement
					display="flex"
					justifyContent="center"
					alignItems="center"
					p={7}
					h="full"
				>
					<Button
						variant="ghost"
						color={iconColor}
						_hover={{ color: "yellow.400" }}
						onClick={() => setShowPass(!showPass)}
					>
						<Icon as={showPass ? BiHide : BiShow} boxSize={7} />
					</Button>
				</InputRightElement>
			</InputGroup>
		</FormControl>
	);
}
