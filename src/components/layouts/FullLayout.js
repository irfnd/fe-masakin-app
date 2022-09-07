import useCookieDecrypt from "hooks/useCookieDecrypt";
import { useTitle } from "react-use";

// Components
import Navbar from "components/navbars/Navbar";
import Footer from "components/footers/Footer";

export default function FullLayout(props) {
	const { title, children } = props;
	const { user } = useCookieDecrypt();
	useTitle(`${title} - Masakin App`);

	return (
		<main>
			<Navbar user={user.data} />
			{children}
			<Footer />
		</main>
	);
}
