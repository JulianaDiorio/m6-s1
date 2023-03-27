import { createContext, ReactNode, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";

export const DataContext = createContext({} as IUserContext);

interface IChildrenProps {
    children: ReactNode
}

export interface IUser {
    phone: string;
    created_at: Date;
    email: string;
    id: string;
    name: string;
    contacts: IContact[];
    updated_at: Date;
    password?: string;
    confirmPassword?: string;
}

export interface IUserUpdate {
    name: string;
    email: string;
    phone: string;
}

export interface IContact {
    created_at?: Date;
    id: string;
    name: string;
    email: string;
    phone:string;
    updated_at: Date
}

export interface IContactUpdate {
    name: string;
    email: string;
    phone:string;
}

interface IUserContext {
    username: string,
    setUsername: React.Dispatch<React.SetStateAction<string>>,
    user: IUser,
    setUser: React.Dispatch<React.SetStateAction<IUser>>,
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    navigate: NavigateFunction,
    sucess: (text: string) => void,
    negative: (text: string) => void,
    token: string | null,
    openModal: () => void,
    openModalEdit: () => void,
    modal: boolean,
    modalEdit: boolean,
    cont: IContact[],
    setCont: React.Dispatch<React.SetStateAction<IContact[]>>,
    update: boolean,
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>,
    especificUser: string,
    setEspecificUser: React.Dispatch<React.SetStateAction<string>>,
}

/* CRIA O CONTEXTO, EXPORTA A LÓGICA POR MEIO DO PROVIDER */

export const UserProvider = ({ children }: IChildrenProps) => {
    const [user, setUser] = useState<IUser>({} as IUser);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [cont, setCont] = useState<IContact []>([]);
    const [update, setUpdate] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [modalEdit, setModalEdit] = useState<boolean>(false);
    const [especificUser, setEspecificUser] = useState<string>("");
    const navigate = useNavigate();
console.log(update)
    const sucess = (text: string) => {
        toast.success(text, {
            position: "top-center",
            autoClose: 1000,
        });
    };

    const negative = (text: string) => {
        toast.error(text, {
            position: "top-center",
            autoClose: 1000,
        });
    };

    const token = localStorage.getItem("@token:token");

    useEffect(() => {
        if (token) {
            navigate("/dashboard");
        } else {
            navigate("/");
        }
    }, []);

    const openModal = () => {
        setModal(!modal);
    };

    const openModalEdit = () => {
        setModalEdit(!modalEdit);
    };

    return (
        <DataContext.Provider
            value={{
                username,
                setUsername,
                user,
                setUser,
                password,
                setPassword,
                navigate,
                sucess,
                negative,
                token,
                openModal,
                openModalEdit,
                modalEdit,
                modal,
                cont,
                setCont,
                update,
                setUpdate,
                especificUser, 
                setEspecificUser
            }}
        >
            {children}
        </DataContext.Provider>
    );
};