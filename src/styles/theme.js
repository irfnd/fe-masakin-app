import { extendTheme } from "@chakra-ui/react";

// Foundations
import colors from "styles/foundations/colors";
import fonts from "styles/foundations/fonts";
import fontWeights from "styles/foundations/fontWeights";

const theme = extendTheme({
	colors,
	fonts,
	fontWeights,
});

export default theme;
