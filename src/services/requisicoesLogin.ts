import api from "./api";

export const requisicaoLogin = () => ({
    signin: async (email: string, password: string) => {
        const response = await api.post('/login', {email, password});        
        return response.data;
    },

    logout: async () => {
        const response = await api.post('/logout');
        return response.data;
    },
})