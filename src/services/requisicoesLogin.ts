import axios from "axios";
import api from "./api";

export const requicicaoLogin = () => ({
    validateToken: async ( token: string) => {
        const response = await api.post('/validate', { token });
        return response.data;
    },

    signin: async (email: string, password: string) => {
        const response = await api.post('/login', {email, password});
        return response.data;
    },

    signout: async () => {
        const response = await api.post('/logout');
        return response.data;
    },
})