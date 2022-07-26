import axios from "axios";
import api from "./api";

export const requicicaoLogin = () => ({
    validateToken: async ( token: string) => {
        const res = await api.post('/validate', { token });
        return res.data;
    },

    signin: async (email: string, password: string) => {
        const res = await api.post('/login', {email, password});
        return res.data;
    },

    logout: async () => {
        const res = await api.post('/login');
        return res.data;
    },
})