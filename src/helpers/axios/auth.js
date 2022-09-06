import api from "helpers/axios/api";

const auth = {
	register: (data) => api.post("/auth/register", data).then((res) => res.data),
	login: (data) => api.post("/auth/login", data).then((res) => res.data),
};

export default auth;
