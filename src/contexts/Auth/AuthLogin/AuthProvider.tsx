import { useEffect, useState } from "react";
import { IAuthProvaider, User } from "../../../types";
import { requisicaoLogin } from "../../../services/requisicoesLogin";
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
            if (storageData === null) {
                return undefined;
            }
            setToken(storageData);
            return storageData
        };

        validateToken();

    }, []);


    const signin = async (email: string, password: string) => {
        const data = await useRequisicao.signin(email, password);

        if (data == null) {
            return false;
        }

        return true;
    }

    const signout = async () => {
        setUSer(null);
        setToken('');
        await useRequisicao.logout();
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {props.children}
        </AuthContext.Provider>
    );
}