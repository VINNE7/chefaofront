import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../../pages/login";

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
