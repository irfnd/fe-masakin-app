import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import useGetDataUser from "hooks/useGetDataUser";
import useCapitalizeError from "hooks/useCapitalizeError";
import { getIngredients, getSteps, getVideos } from "helpers/addRecipeFilter";
import recipes from "helpers/axios/recipes";
import Swal from "sweetalert2";

// Styles + Icons
import { Flex, Button } from "@chakra-ui/react";
import { BiSave } from "react-icons/bi";

// Components + Images
import Input from "components/inputs/Input";
import RecipeUploadPhoto from "components/pages/recipe/RecipeUploadPhoto";

export default function AddRecipeForm() {
	const { token } = useGetDataUser();
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const methods = useForm({
		defaultValues: {
			ingredients: [{ id: 1, text: "" }],
			steps: [{ id: 1, step: "", video: "" }],
		},
	});

	const onSubmit = (data) => {
		const { photo, name, shortDesc, ingredients, steps } = data;
		const formData = new FormData();

		const ingredientsData = getIngredients(ingredients);
		const stepsData = getSteps(steps);
		const videosData = getVideos(steps);

		formData.append("photo", photo ? photo[0] : "");
		formData.append("name", name);
		formData.append("shortDesc", shortDesc);
		formData.append("ingredients", ingredientsData);
		formData.append("steps", stepsData);
		formData.append("videos", videosData !== "" ? JSON.stringify(videosData) : "");

		setLoading(true);
		recipes
			.addRecipe(token.data.accessToken, formData)
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Recipe Added Successfully",
					text: "You have successfully add new recipe",
				}).then((ok) => (ok.isConfirmed ? navigate("/") : null));
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "Failed to Add New Recipe!",
					text: `${useCapitalizeError(err?.response?.data)}`,
				});
			})
			.finally(() => setLoading(false));
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Flex direction="column" gap={8}>
					<Flex direction={{ base: "column", md: "row" }} gap={6} w="full" h={{ base: "full", md: 300 }}>
						<RecipeUploadPhoto name="photo" loading={loading} />
						<Flex direction="column" w="full" gap={6}>
							<Input label="Name" name="name" placeholder="Recipe name" isGray />
							<Input type="textarea" label="Description" name="shortDesc" placeholder="Recipe description" isGray />
						</Flex>
					</Flex>
					<Input type="nested" label="Ingredients" name="ingredients" isGray />
					<Input type="nested-multiple" label="Steps" name="steps" isGray />
					<Flex justify="end" w="full">
						<Button
							isLoading={loading}
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
