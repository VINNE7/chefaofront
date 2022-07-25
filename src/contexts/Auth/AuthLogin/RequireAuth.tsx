import { useContext } from "react";
import Login from "../../../pages/login";
import { AuthContext } from "./AuthContext";

type IProps = {
    children: JSX.Element;
}

export const RequireAuth = (props: IProps) => {
    const auth = useContext(AuthContext); 

    if (!auth.user) {
        return <Login/>
    }

    return (
        <>
            {props.children}
        </>
    )
}