export interface IFormInputs {
    email: string;
    senha: string;
};

export type User = {
    id?: number;
    name?: string;
    email?: string;
    senha?: string;
    token?: string;
}

export type  AuthContextType = {
    user: User | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}