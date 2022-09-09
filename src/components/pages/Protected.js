import { Navigate } from "react-router-dom";
import useGetDataUser from "hooks/useGetDataUser";

export function WhenNotLogin(props) {
	const { children } = props;
	const { user } = useGetDataUser();

	if (!user.data) {
		return <Navigate to="/register" replace />;
	}
	return children;
}

export function WhenLogin(props) {
	const { children } = props;
	const { user } = useGetDataUser();

	if (user.data) {
		return <Navigate to="/" replace />;
	}
	return children;
}

export default {
	WhenNotLogin,
	WhenLogin,
};
