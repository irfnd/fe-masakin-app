import parse from "parse-duration";
import env from "helpers/env";

const cookiesOptions = {
	path: "/",
	maxAge: parse(env.cookieExpires) / 1000,
};

export default cookiesOptions;
