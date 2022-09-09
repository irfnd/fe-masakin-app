import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "helpers/validations";
import auth from "helpers/axios/auth";
import Swal from "sweetalert2";
import useCapitalizeError from "hooks/useCapitalizeError";

// Styles + Icons
import { Flex, Heading, Text, Divider, Button, Link } from "@chakra-ui/react";

// Components + Images
import Input from "components/inputs/Input";

export default function RegisterForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const navigate = useNavigate();

	const formOptions = { resolver: yupResolver(RegisterSchema) };
	const methods = useForm(formOptions);

	const onSubmit = ({ agreeTerms, confirmPassword, ...data }) => {
		setIsSubmitting(true);
		auth
			.register(data)
			.then(() => {
				Swal.fire({
					icon: "success",
					text: "Register Successfully",
				}).then((result) => (result.isConfirmed ? navigate("/login", { replace: true }) : null));
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "Failed to Register!",
					text: `${useCapitalizeError(err?.response?.data)}`,
				});
			})
			.finally(() => setIsSubmitting(false));
	};

	return (
		<>
			<Flex direction="column" align="center" textAlign="center" w="full" gap={6}>
				<Heading fontSize={30} fontWeight="bold" color="yellow.400">
					Let&apos;s Get Started !
				</Heading>
				<Text fontSize={18} color="gray.500">
					Create new account to access all features
				</Text>
				<Divider borderColor="gray.300" />
			</Flex>
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(onSubmit)}
					style={{ display: "flex", flexDirection: "column", width: "100%" }}
				>
					<Flex direction="column" w="full" gap={4}>
						<Input name="name" label="Name" placeholder="Enter your name" />
						<Input type="email" name="email" label="Email address*" placeholder="Enter your email address" />
						<Input label="Phone Number" name="phoneNumber" placeholder="Enter your phone number" />
						<Input
							type="password"
							name="password"
							label="Create New Password"
							placeholder="Create new password"
						/>
						<Input
							type="password"
							name="confirmPassword"
							label="Confirm Password"
							placeholder="Confirm Password"
						/>
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
							Sign Up
						</Button>
						<Divider borderColor="gray.300" />
					</Flex>
				</form>
			</FormProvider>
			<Text textAlign="center" w="full" fontSize={14} color="gray.500">
				Already have account?
				<Link color="yellow.400" fontWeight="semibold" ml={1} onClick={() => navigate("/login")}>
					Log In
				</Link>
			</Text>
		</>
	);
}
