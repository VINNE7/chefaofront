import axios from "axios";

const api = axios.create({
    baseURL: 'Para api',
});

export default api;