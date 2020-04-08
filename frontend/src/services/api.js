
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

api.interceptors.request.use(async config => {
    try {
        let token = localStorage.getItem("x-access-token");
        if (token) {
            config.headers["x-access-token"] = `${token}`;
        }
        return config;
    } catch (err) {
        console.tron.log(err);
    }
});

export default api;