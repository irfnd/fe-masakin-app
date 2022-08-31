import { useTitle } from "react-use";

// Components
import Navbar from "components/navbars/Navbar";
import Footer from "components/footers/Footer";

export default function FullLayout(props) {
	const { title, children } = props;
	useTitle(`${title} - Masakin App`);

	return (
		<main>
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}
