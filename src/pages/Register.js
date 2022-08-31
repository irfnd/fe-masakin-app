// Components + Images
import AuthLayout from "components/layouts/AuthLayout";
import RegisterForm from "components/pages/auth/RegisterForm";

export default function Login() {
	return (
		<AuthLayout title="Register">
			<RegisterForm />
		</AuthLayout>
	);
}
