import axios from "axios";
import api from "./api";

export const requicicaoLogin = () => ({
    validateToken: async ( token: string) => {
        //testando o login
        return {
            user: {id: 1, name: 'Time', email: 'teste@teste.com', password: '12345678'},
        }
        const res = await api.post('/validate', { token });
        return res.data;
    },

    signin: async (email: string, password: string) => {
        //testando o login
        return {
            user: {id: 1, name: 'Time', email: 'teste@teste.com', password: '12345678'},
            token: 'HandsPuxado2022'
        }
        const res = await api.post('/api/login', {email, password});
        return res.data;
    },

    logout: async () => {
        const res = await api.post('/logout');
        return res.data;
    },
})