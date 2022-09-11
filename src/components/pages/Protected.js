import { Navigate } from "react-router-dom";
import useGetDataUser from "hooks/useGetDataUser";
import useDecodeJwt from "hooks/useDecodeJwt";

export function WhenNotLogin(props) {
	const { children } = props;
	const { user, token } = useGetDataUser();

	if (user.data && token.data) {
		const { isExpired } = useDecodeJwt(token.data.accessToken);
		if (isExpired) {
			user.deleteUser();
			token.deleteToken();
			return <Navigate to="/register" replace />;
		}
		return children;
	}

	if (!user.data && !token.data) {
		return <Navigate to="/register" replace />;
	}
	return children;
}

export function WhenLogin(props) {
	const { children } = props;
	const { user, token } = useGetDataUser();

	if (user.data && token.data) return <Navigate to="/" replace />;
	return children;
}

export default {
	WhenNotLogin,
	WhenLogin,
};
