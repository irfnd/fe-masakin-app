import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export function WhenNotLogin(props) {
	const { children } = props;
	const [cookie] = useCookies(["user"]);

	if (!cookie.user) {
		return <Navigate to="/register" replace />;
	}
	return children;
}

export function WhenLogin(props) {
	const { children } = props;
	const [cookie] = useCookies(["user"]);

	if (cookie.user) {
		return <Navigate to="/" replace />;
	}
	return children;
}

export default {
	WhenNotLogin,
	WhenLogin,
};
