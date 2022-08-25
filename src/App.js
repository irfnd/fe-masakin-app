import { Routes, Route } from "react-router-dom";

// Components
import Home from "pages/Home";
import Login from "pages/Login";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="login" element={<Login />} />
		</Routes>
	);
}