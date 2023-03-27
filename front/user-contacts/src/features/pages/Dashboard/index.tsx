import { useContext, useEffect } from "react";
import { ButtonThird } from "../../../components/button";
import { Contacts } from "../../../components/Contact";
import { Title2 } from "../../../components/texts";
import { DataContext } from "../../../Context";
import { instance } from "../../service/axios";
import {
    DivDashboard,
    HeaderDashboard,
} from "./styled";
import { Main } from "../Login/styled";
import { Modal } from "../../../components/Contact/ModalNewContact";
import { NavigationDash } from "../Navigation";



export const Dashboard = () => {
    const {

        token,
        user,
        setUser,
        modalEdit,
        openModal,
        modal,
        setCont,
        update,

    } = useContext(DataContext);

    const idUser = localStorage.getItem("id");

    useEffect(() => {
        const userInfo = async () => {
            try {
                instance.defaults.headers.authorization = `Bearer ${token}`;
                const response = await instance.get(`/users/${idUser}`);
                setUser(response.data);
                setCont(response.data?.contacts);
            } catch (error) {
                console.log(error);
            }
        };
        userInfo();
    }, [update, modalEdit]);

    return (
        <>
        <NavigationDash />
        <Main>
            {modal && <Modal />}
            <HeaderDashboard>
                <Title2> Olá, {user?.name} </Title2>
            </HeaderDashboard>
            <DivDashboard>
                <Title2>Contatos </Title2>
                <ButtonThird onClick={() => openModal()}>
                    Novo
                </ButtonThird>
            </DivDashboard>
            <Contacts />
        </Main></>
    );
};
