import { useForm, FormProvider } from "react-hook-form";

// Styles + Icons
import { Flex, Button } from "@chakra-ui/react";
import { BiSave } from "react-icons/bi";

// Components + Images
import Input from "components/inputs/Input";

export default function AddRecipeForm() {
	const methods = useForm({
		defaultValues: {
			ingredients: [
				{ id: 1, text: "" },
				{ id: 2, text: "" },
				{ id: 3, text: "" },
			],
			steps: [
				{ id: 1, step: "", video: "" },
				{ id: 2, step: "", video: "" },
				{ id: 3, step: "", video: "" },
			],
		},
	});

	const onSubmit = (data) => console.log(data);

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Flex direction="column" gap={8}>
					<Flex direction={{ base: "column", md: "row" }} gap={6} w="full" h={{ base: "full", md: 250 }}>
						<Flex
							h={{ base: 250, md: "full" }}
							w="full"
							bg="gray.100"
							rounded="xl"
							borderWidth="1px"
							borderColor="gray.400"
						>
							{" "}
						</Flex>
						<Flex direction="column" w="full" gap={6}>
							<Input label="Name" name="name" placeholder="Recipe name" isGray />
							<Input type="textarea" label="Description" name="shortDesc" placeholder="Recipe description" isGray />
						</Flex>
					</Flex>
					<Input type="nested" label="Ingredients" name="ingredients" isGray />
					<Input type="nested-multiple" label="Steps" name="steps" isGray />
					<Flex justify="end" w="full">
						<Button
							w={{ base: "full", sm: "fit-content" }}
							type="submit"
							leftIcon={<BiSave size={20} />}
							colorScheme="yellow"
							fontWeight="medium"
							color="purple.900"
							py={6}
							px={8}
						>
							Simpan
						</Button>
					</Flex>
				</Flex>
			</form>
		</FormProvider>
	);
}
