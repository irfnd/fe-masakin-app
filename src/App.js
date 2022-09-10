import { Routes, Route } from "react-router-dom";

// Components + Images
import Home from "pages/Home";
import Register from "pages/auth/Register";
import Login from "pages/auth/Login";
import Profile from "pages/profile/Profile";
import Search from "pages/Search";
import AddRecipe from "pages/recipe/AddRecipe";
import DetailRecipe from "pages/recipe/DetailRecipe";
import { WhenLogin, WhenNotLogin } from "components/pages/Protected";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route
				path="login"
				element={
					<WhenLogin>
						<Login />
					</WhenLogin>
				}
			/>
			<Route
				path="register"
				element={
					<WhenLogin>
						<Register />
					</WhenLogin>
				}
			/>
			<Route path="profile">
				<Route
					index
					element={
						<WhenNotLogin>
							<Profile />
						</WhenNotLogin>
					}
				/>
			</Route>
			<Route path="search" element={<Search />} />
			<Route path="recipe">
				<Route path=":id" element={<DetailRecipe />} />
				<Route
					path="add"
					element={
						<WhenNotLogin>
							<AddRecipe />
						</WhenNotLogin>
					}
				/>
			</Route>
		</Routes>
	);
}
