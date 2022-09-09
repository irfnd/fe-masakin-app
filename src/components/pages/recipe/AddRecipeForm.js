import { useForm, FormProvider } from "react-hook-form";

// Styles + Icons
import { Flex, Text } from "@chakra-ui/react";

// Components + Images
import Input from "components/inputs/Input";

export default function AddRecipeForm() {
	const methods = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Flex direction="column" gap={6}>
					<Flex gap={6} w="full" h={300}>
						<Flex h="full" w="50%" bg="gray.100" rounded="xl" borderWidth="1px" borderColor="gray.400">
							{" "}
						</Flex>
						<Flex direction="column" w="50%" gap={6}>
							<Input label="Recipe Name" name="name" placeholder="Nasi Goreng Spesial" isGray />
							<Input type="nested" label="Ingredients" name="ingredients" isGray />
						</Flex>
					</Flex>
					<Input type="textarea" name="ingredients" placeholder="Ingredients" isGray />
				</Flex>
			</form>
		</FormProvider>
	);
}
