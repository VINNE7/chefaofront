import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../../pages/Login";

type IProps = {
  children: JSX.Element;
};

export const RequireAuth = (props: IProps) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Login />;
  }

  return <>{props.children}</>;
};
