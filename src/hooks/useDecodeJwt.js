import jwtDecode from "jwt-decode";

export default function useDecodeJwt(jwt) {
	const decoded = jwtDecode(jwt);
	if (decoded.exp * 1000 < Date.now()) return { isExpired: true };
	return { isExpired: false };
}
