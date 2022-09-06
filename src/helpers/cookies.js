import parse from "parse-duration";
import env from "helpers/env";

const cookiesOptions = {
	path: "/",
	maxAge: parse(env.cookieExpires) / 1000,
	domain: env.modeEnv === "production" ? "masakin-app.vercel.app" : "localhost",
	sameSite: env.modeEnv === "production" ? "none" : "lax",
};

export default cookiesOptions;
