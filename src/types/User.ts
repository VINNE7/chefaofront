export interface IFormInputs {
    email: string;
    password: string;
};

export type User = {
    id: number;
    name?: string;
    email: string;
    password: string;
    token: string;
}

export type  AuthContextType = {
    user: User | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => Promise<void>;
}

export interface IAuthProvaider {
    children: JSX.Element;
}