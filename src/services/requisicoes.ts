import api from "./api";

export const requisicaoLogin = () => ({
  signin: async (email: string, senha: string) => {
    const res = await api.post("/login", { email, senha });
    return res.data;
  },
});
