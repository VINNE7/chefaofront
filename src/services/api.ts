import axios from "axios";

const api = axios.create({
    baseURL: 'https://www.google.com',
});

export default api;