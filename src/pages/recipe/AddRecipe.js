import { useForm, FormProvider } from "react-hook-form";

// Styles + Icons
import { Flex, Heading } from "@chakra-ui/react";

// Components + Images
import FullLayout from "components/layouts/FullLayout";
import CustomContainer from "components/layouts/CustomContainer";
import AddRecipeForm from "components/pages/recipe/AddRecipeForm";

export default function AddRecipe() {
	return (
		<FullLayout title="Add Recipe">
			<CustomContainer>
				<Flex
					direction="column"
					pt={{ base: "120px", md: "140px" }}
					pb="120px"
					px={{ base: 5, md: 0 }}
					gap={6}
				>
					<Heading
						textAlign={{ base: "center", md: "start" }}
						color="purple.800"
						fontSize={{ base: "2xl", sm: "3xl" }}
					>
						Add Recipe
					</Heading>
					<AddRecipeForm />
				</Flex>
			</CustomContainer>
		</FullLayout>
	);
}
