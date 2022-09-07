import { Navigate } from "react-router-dom";
import useCookieDecrypt from "hooks/useCookieDecrypt";

export function WhenNotLogin(props) {
	const { children } = props;
	const { user } = useCookieDecrypt();

	if (!user.data) {
		return <Navigate to="/register" replace />;
	}
	return children;
}

export function WhenLogin(props) {
	const { children } = props;
	const { user } = useCookieDecrypt();

	if (user.data) {
		return <Navigate to="/" replace />;
	}
	return children;
}

export default {
	WhenNotLogin,
	WhenLogin,
};
