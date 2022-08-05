import { useEffect, useState } from "react";
import { IAuthProvaider, User } from "../../../types";
import { requisicaoLogin } from "../../../services/requisicoes";
import { AuthContext } from "./AuthContext";

export const AuthProvider = (props: IAuthProvaider) => {
  const [user, setUser] = useState<User | null>(null);
  const useRequisicao = requisicaoLogin();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (!storageData) return undefined;
      setUser({ token: storageData });
    };
    validateToken();
  }, []);
  const signin = async (email: string, password: string) => {
    const data = await useRequisicao.signin(email, password);
    if (!data) return false;
    localStorage.setItem("authToken", data);
    setUser(data);
    return true;
  };
  const signout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
  };
  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
