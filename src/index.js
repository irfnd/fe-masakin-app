import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "helpers/axios/api";

// Fonts
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "@fontsource/concert-one/400.css";

// Styles
import { ChakraProvider } from "@chakra-ui/react";
import theme from "styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ChakraProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
	</ChakraProvider>
);

reportWebVitals();
