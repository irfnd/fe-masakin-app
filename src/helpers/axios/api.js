import axios from "axios";
const { REACT_APP_MODE_ENV, REACT_APP_REST_API, REACT_APP_REST_API_LOCAL } = process.env;

const api = axios.create({
	baseURL: REACT_APP_MODE_ENV === "production" ? REACT_APP_REST_API : REACT_APP_REST_API_LOCAL,
});

export default api;
