import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCookieDecrypt from "hooks/useCookieDecrypt";

// Components
import FullLayout from "components/layouts/FullLayout";
import Discover from "components/pages/home/Discover";
import PopularForYou from "components/pages/home/PopularForYou";
import NewRecipe from "components/pages/home/NewRecipe";
import PopularRecipe from "components/pages/home/PopularRecipe";

export default function Home() {
	return (
		<FullLayout title="Home">
			<Discover />
			<PopularForYou />
			<NewRecipe />
			<PopularRecipe />
		</FullLayout>
	);
}
