import { useLocalStorage } from "react-use";
import crypto from "helpers/crypto";

export default function useGetDataUser() {
	const [user, setUser, deleteUser] = useLocalStorage("user", null);
	const [token, setToken, deleteToken] = useLocalStorage("token", null);

	return {
		user: { data: user ? JSON.parse(crypto.decryptData(user)) : null, setUser, deleteUser },
		token: { data: token ? JSON.parse(crypto.decryptData(token)) : null, setToken, deleteToken },
	};
}
