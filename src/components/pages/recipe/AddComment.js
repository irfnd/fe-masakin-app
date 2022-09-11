import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import useGetDataUser from "hooks/useGetDataUser";
import useCapitalizeError from "hooks/useCapitalizeError";
import recipes from "helpers/axios/recipes";
import Swal from "sweetalert2";

// Styles + Icons
import { Flex, Button } from "@chakra-ui/react";
import { BiCommentAdd } from "react-icons/bi";

// Components + Images
import Input from "components/inputs/Input";

export default function AddComment(props) {
	const { id, mutate } = props;
	const { token } = useGetDataUser();
	const [loading, setLoading] = useState(false);

	const methods = useForm();

	const onSubmit = ({ comment }) => {
		setLoading(true);
		recipes
			.addComment({ comment, recipeId: id }, token.data.accessToken)
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Comment Added Successfully",
					text: "You have successfully add new comment",
				});
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "Failed to Add New Recipe!",
					text: `${useCapitalizeError(err?.response?.data)}`,
				});
			})
			.finally(() => {
				mutate();
				setLoading(false);
			});
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Flex direction="column" align="end" gap={3} h={{ base: 250, md: 350 }}>
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
