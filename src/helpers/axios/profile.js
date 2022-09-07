import api from "helpers/axios/api";

const setBearer = (token) => ({ headers: { Authorization: `Bearer ${token}` } });

const profile = {
	uploadPhoto: (token, data) => api.post("/profile/photo", data, setBearer(token)).then((res) => res.data),
	deletePhoto: (token) => api.delete("/profile/photo", setBearer(token)).then((res) => res.data),
};

export default profile;
