import api from "./api";

export const requisicaoLogin = () => ({
    signin: async (email: string, password: string) => {
        const res = await api.post('/login', {email, senha: password});        
        return res.data;
    },

    logout: async () => {
        const res = await api.post('/logout');
        return res.data;
    },
});