import { useEffect, useState } from "react";
import { User } from "../../../types/User";
import { requicicaoLogin } from "../../../services/requisicoesLogin";
import { AuthContext } from "./AuthContext";

interface IAuthProvaider {
    children: JSX.Element;
}

export const AuthProvider = (props: IAuthProvaider) => {

    const [user, setUSer] = useState<User | null>(null);
    const userApi = requicicaoLogin()

   
    useEffect(() => {
        const validateToken = async() => {
            const storageData = localStorage.getItem('authToken');
            if(storageData){
                const data = await userApi.validateToken(storageData);
                if(data.user){
                    setUSer(data.user);
                }
            }
        };
        validateToken();
    }, []);
    

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token)
    }

    const signin = async( email: string, password: string ) => {
        const data = await userApi.signin(email, password);
        if (data.token) {
            setToken(data.token)
            return true
        }

        return false;
    }

    const signout = async () => {
        setUSer(null);
        setToken('');
        await userApi.logout();
    } 

    

    return(
        <AuthContext.Provider value={{ user, signin, signout }}>
            {props.children}
        </AuthContext.Provider>
    );
}


