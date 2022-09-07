import { useCookie } from "react-use";
import crypto from "helpers/crypto";

export default function useCookieDecrypt() {
	const [user, setUser, deleteUser] = useCookie("user");
	const [token, setToken, deleteToken] = useCookie("token");

	return {
		user: { data: user ? JSON.parse(crypto.decryptData(user)) : null, setUser, deleteUser },
		token: { data: token ? JSON.parse(crypto.decryptData(token)) : null, setToken, deleteToken },
	};
}
