import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "helpers/validations";
import Cookies from "js-cookie";
import auth from "helpers/axios/auth";
import Swal from "sweetalert2";
import useCapitalizeError from "hooks/useCapitalizeError";

// Styles + Icons
import { Flex, Heading, Text, Divider, Button, Link } from "@chakra-ui/react";

// Components + Images
import Input from "components/inputs/Input";

export default function LoginForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const navigate = useNavigate();
	const formOptions = { resolver: yupResolver(LoginSchema) };
	const methods = useForm(formOptions);

	const onSubmit = ({ agreeTerms, ...data }) => {
		setIsSubmitting(true);
		auth
			.login(data)
			.then((res) => {
				Swal.fire({
					icon: "success",
					title: "Login Successfully",
					text: "You have successfully logged in",
				}).then((ok) => (ok.isConfirmed ? navigate("/", { replace: true }) : null));
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "Failed to Login!",
					text: `${useCapitalizeError(err?.response?.data)}`,
				});
			})
			.finally(() => setIsSubmitting(false));
	};

	return (
		<>
			<Flex direction="column" align="center" textAlign="center" w="full" gap={6}>
				<Heading fontSize={30} fontWeight="bold" color="yellow.400">
					Welcome
				</Heading>
				<Text fontSize={18} color="gray.500">
					Log in into your exiting account
				</Text>
				<Divider borderColor="gray.300" />
			</Flex>
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(onSubmit)}
					style={{ display: "flex", flexDirection: "column", width: "100%" }}
				>
					<Flex direction="column" w="full" gap={4}>
						<Input type="email" name="email" label="E-mail" placeholder="examplexxx@mail.com" />
						<Input type="password" name="password" label="Password" placeholder="Password" />
						<Input type="checkbox" name="agreeTerms" placeholder="I agree to terms & conditions" />
						<Button
							isLoading={isSubmitting}
							type="submit"
							bg="yellow.400"
							fontSize={16}
							fontWeight="medium"
							color="white"
							_hover={{ bg: "yellow.500" }}
							_active={{ bg: "yellow.400" }}
							py={7}
							my={4}
						>
							Log In
						</Button>
						<Divider borderColor="gray.300" />
					</Flex>
				</form>
			</FormProvider>
			<Text textAlign="center" w="full" fontSize={14} color="gray.500">
				Don&apos;t have an account?
				<Link color="yellow.400" fontWeight="semibold" ml={1} onClick={() => navigate("/register")}>
					Sign Up
				</Link>
			</Text>
		</>
	);
}
