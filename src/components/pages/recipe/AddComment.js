import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

// Styles + Icons
import { Flex, Text, Button } from "@chakra-ui/react";
import { BiCommentAdd } from "react-icons/bi";

// Components + Images
import Input from "components/inputs/Input";

export default function AddComment() {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const methods = useForm();

	const onSubmit = (data) => console.log(data);
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Flex direction="column" align="end" gap={3} h={{ base: 250, md: 350 }}>
					<Text textAlign="left" fontSize={18} fontWeight="semibold" color="purple.800" w="full">
						Comments
					</Text>
					<Input type="textarea" name="comment" placeholder="Add Comment" isGray />
					<Button
						type="submit"
						isLoading={loading}
						colorScheme="yellow"
						fontWeight="medium"
						color="purple.900"
						leftIcon={<BiCommentAdd size={24} />}
						w={{ base: "full", sm: "fit-content" }}
						py={6}
						px={8}
					>
						Add Comment
					</Button>
				</Flex>
			</form>
		</FormProvider>
	);
}
