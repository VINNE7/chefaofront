import { useEffect, useState } from "react";
import { IAuthProvaider, User } from "../../../types";
import { requisicaoLogin } from "../../../services/requisicoes";
import { AuthContext } from "./AuthContext";


export const AuthProvider = (props: IAuthProvaider) => {

    const [user, setUSer] = useState<User | null>(null);
    const useRequisicao = requisicaoLogin();

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    useEffect(() => {

        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if (storageData) {
                setToken(storageData);
            }
            return undefined;
        };

        // validateToken();

    }, []);


    const signin = async (email: string, password: string) => {
        const data = await useRequisicao.signin(email, password);
        if (!data) return false;
        setUSer(data)
        setToken(data);
        return true
    }

    const signout = () => {
        setUSer(null);
        setToken('');
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {props.children}
        </AuthContext.Provider>
    );
}