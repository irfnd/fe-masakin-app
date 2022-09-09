import { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

// Styles + Icons
import { Flex, Text, Input, InputGroup, InputLeftElement, InputRightElement, Icon, Button } from "@chakra-ui/react";
import { BiX, BiPlus } from "react-icons/bi";

export default function InputNestedMultiple(props) {
	const { name, label, isGray } = props;
	const [inputFocus, setInputFocus] = useState([]);
	const [inputHover, setInputHover] = useState([]);

	const { register, control } = useFormContext();
	const { fields, append, remove } = useFieldArray({ control, name });
	const nested = (i, field) => register(`${name}[${i}].[${field}]`);

	const updateState = (i, type) => {
		if (type === "focus") {
			setInputFocus((prev) => prev.map((el) => (el.id === i + 1 ? { ...el, state: !el.state } : el)));
		} else {
			setInputHover((prev) => prev.map((el) => (el.id === i + 1 ? { ...el, state: !el.state } : el)));
		}
	};

	const iconColor = (i) => {
		const focus = inputFocus.map((el) => el.id === i + 1 && el.state)[0];
		const hover = inputHover.map((el) => el.id === i + 1 && el.state)[0];
		return (focus && "yellow.400") || (hover && "gray.400") || "gray.500";
	};

	return (
		<Flex direction="column" h="full" gap={4}>
			<Text fontSize={16} fontWeight="medium" color="gray.600">
				{label}
			</Text>
			<Flex direction="column" h="full" gap={6}>
				{fields.map((el, i) => (
					<InputGroup position="relative" key={i}>
						<InputLeftElement position="absolute" mt={2} ms={2}>
							<Text fontSize={14} rounded="md">
								{i + 1}.
							</Text>
						</InputLeftElement>
						<Flex direction={{ base: "column", md: "row" }} w="full" h="full" gap={4}>
							<Input
								type="text"
								name={nested(i, "step").name}
								fontSize={14}
								bg={isGray ? "gray.100" : "white"}
								color="gray.600"
								borderColor="gray.400"
								focusBorderColor="yellow.400"
								_hover={{ borderColor: "gray.500" }}
								_focus={{ shadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11)" }}
								py={7}
								px={10}
								onFocus={() => updateState(i, "focus")}
								onBlur={() => updateState(i, "focus")}
								onMouseOver={() => updateState(i, "hover")}
								onMouseLeave={() => updateState(i, "hover")}
								onChange={nested(i, "step").onChange}
								ref={nested(i, "step").ref}
							/>
							<Input
								type="text"
								name={nested(i, "video").name}
								fontSize={14}
								bg={isGray ? "gray.100" : "white"}
								color="gray.600"
								borderColor="gray.400"
								focusBorderColor="yellow.400"
								placeholder="Enter youtube video URL or leave it empty"
								_hover={{ borderColor: "gray.500" }}
								_focus={{ shadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11)" }}
								py={7}
								pl={7}
								pe={12}
								onFocus={() => updateState(i, "focus")}
								onBlur={() => updateState(i, "focus")}
								onMouseOver={() => updateState(i, "hover")}
								onMouseLeave={() => updateState(i, "hover")}
								onChange={nested(i, "video").onChange}
								ref={nested(i, "video").ref}
							/>
						</Flex>
						<InputRightElement position="absolute" mt={2} me={2}>
							<Button
								type="button"
								variant="ghost"
								color={iconColor(i)}
								_hover={{ color: "yellow.400" }}
								onClick={() => {
									setInputFocus((prev) => prev.filter((obj) => obj.id !== i + 1));
									setInputHover((prev) => prev.filter((obj) => obj.id !== i + 1));
									remove(i);
								}}
							>
								<Icon as={BiX} boxSize={7} />
							</Button>
						</InputRightElement>
					</InputGroup>
				))}
				<Flex align="center" w="full">
					<Button
						w={{ base: "full", sm: "fit-content" }}
						fontSize={14}
						colorScheme="yellow"
						color="purple.900"
						leftIcon={<BiPlus size={20} />}
						onClick={() => {
							append({ id: fields.length + 1, step: "", video: "" });
							setInputFocus((prev) => [...prev, { id: fields.length + 1, state: false }]);
							setInputHover((prev) => [...prev, { id: fields.length + 1, state: false }]);
						}}
					>
						Add
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
