import { useTitle } from "react-use";
import { useCookies } from "react-cookie";
import crypto from "helpers/crypto";

// Components
import Navbar from "components/navbars/Navbar";
import Footer from "components/footers/Footer";

export default function FullLayout(props) {
	const { title, children } = props;
	useTitle(`${title} - Masakin App`);
	const [cookie] = useCookies(["user"]);
	const user = cookie.user ? crypto.decryptData(cookie.user) : null;

	return (
		<main>
			<Navbar user={user} />
			{children}
			<Footer />
		</main>
	);
}
