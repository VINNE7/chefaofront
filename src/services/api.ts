import axios from "axios";

const api = axios.create({
    baseURL: 'https://gama-menu.herokuapp.com',
    headers:{
        contentType: 'application/json',
    }
});

export default api;