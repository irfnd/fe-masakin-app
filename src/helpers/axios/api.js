import axios from "axios";
import env from "helpers/env";

const server = env.modeEnv === "production" ? env.restApi : env.restApiLocal;

const api = axios.create({ baseURL: server, withCredentials: true });

export default api;
