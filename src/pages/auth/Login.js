// Components + Images
import AuthLayout from "components/layouts/AuthLayout";
import LoginForm from "components/pages/auth/LoginForm";

export default function Login() {
	return (
		<AuthLayout title="Login">
			<LoginForm />
		</AuthLayout>
	);
}
