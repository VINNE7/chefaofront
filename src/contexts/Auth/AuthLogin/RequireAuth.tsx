import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Home from "../../../pages/homepage";

type IProps = {
    children: JSX.Element;
}

export const RequireAuth = (props: IProps) => {
    const auth = useContext(AuthContext); 

    if (auth.user) {
        return <Home/>
    }

    return (
        <>
            {props.children}
        </>
    )
}