import { Routes, Route } from "react-router-dom";

// Components + Images
import Home from "pages/Home";
import Register from "pages/auth/Register";
import Login from "pages/auth/Login";
import Profile from "pages/profile/Profile";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="login" element={<Login />} />
			<Route path="register" element={<Register />} />
			<Route path="profile">
				<Route index element={<Profile />} />
			</Route>
		</Routes>
	);
}
