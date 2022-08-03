import { useEffect, useState } from "react";
import { IAuthProvaider, User } from "../../../types";
import { requisicaoLogin } from "../../../services/requisicoes";
import { AuthContext } from "./AuthContext";
import Home from "../../../pages/homepage";

export const AuthProvider = (props: IAuthProvaider) => {

    const [user, setUser] = useState<User | null>(null);
    // const [loading, setLoading] = useState(true);
    const useRequisicao = requisicaoLogin();

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    useEffect(() => {

        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if (!storageData) return undefined;
            return setToken(storageData);  
        };

        validateToken();

    }, []);


    const signin = async (email: string, password: string) => {
        const data = await useRequisicao.signin(email, password);
        if (!data) return false;
        setUser(data)
        setToken(data);
        return true
    }

    const signout = () => {
        setUser(null);
        setToken('');
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {props.children}
        </AuthContext.Provider>
    );
}