import { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

// Styles + Icons
import { Flex, Text, Input, InputGroup, InputRightElement, Icon, Button } from "@chakra-ui/react";
import { BiX, BiPlus } from "react-icons/bi";

export default function InputNested(props) {
	const { name, label, isGray } = props;
	const [inputFocus, setInputFocus] = useState([]);
	const [inputHover, setInputHover] = useState([]);

	const { register, control } = useFormContext();
	const { fields, append, remove } = useFieldArray({ control, name });
	const nested = (i) => register(`${name}[${i}]`);

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
		console.log(i + 1, focus, hover);
		return (focus && "yellow.400") || (hover && "gray.400") || "gray.500";
	};

	return (
		<>
			<Text fontSize={16} fontWeight="medium" color="gray.600">
				{label}
			</Text>
			<Flex direction="column" h="full">
				{fields.map((el, i) => (
					<InputGroup key={i}>
						<Input
							type="text"
							name={nested(i).name}
							fontSize={14}
							bg={isGray ? "gray.100" : "white"}
							color="gray.600"
							borderColor="gray.400"
							focusBorderColor="yellow.400"
							_hover={{ borderColor: "gray.500" }}
							_focus={{ shadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11)" }}
							p={7}
							onFocus={() => updateState(i, "focus")}
							onBlur={() => updateState(i, "focus")}
							onMouseOver={() => updateState(i, "hover")}
							onMouseLeave={() => updateState(i, "hover")}
							onChange={nested(i).onChange}
							ref={nested(i).ref}
						/>
						<InputRightElement display="flex" justifyContent="center" alignItems="center" p={7} h="full">
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
				<BiPlus
					size={26}
					onClick={() => {
						append(`${fields.length + 1}. `);
						setInputFocus((prev) => [...prev, { id: fields.length + 1, state: false }]);
						setInputHover((prev) => [...prev, { id: fields.length + 1, state: false }]);
					}}
				/>
			</Flex>
		</>
	);
}
