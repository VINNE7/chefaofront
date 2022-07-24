import { useState } from "react";
import { User } from "../../types/User";
import { requicicaoLogin } from "../../services/requisicoesLogin";
import { AuthContext } from "../Auth/AuthLogin/AuthContext";

interface IAuthProvaider {
    children: JSX.Element;
}

export const AuthProvider = (props: IAuthProvaider) => {

    const [user, setUSer] = useState<User | null>(null);
    const userApi = requicicaoLogin()

    const signin = async( email: string, password: string ) => {
        const data = await userApi.signin(email, password);
        if ( data.user && data.token) {
            setUSer(data.user);
            return true
        }

        return false;
    }

    const signout = async () => {
        await userApi.logout();
        setUSer(null)
    } 

    return(
        <AuthContext.Provider value={{ user, signin, signout }}>
            {props.children}
        </AuthContext.Provider>
    );
}


