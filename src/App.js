import { Routes, Route } from "react-router-dom";

// Components + Images
import Home from "pages/Home";
import Register from "pages/Register";
import Login from "pages/Login";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="login" element={<Login />} />
			<Route path="register" element={<Register />} />
		</Routes>
	);
}
