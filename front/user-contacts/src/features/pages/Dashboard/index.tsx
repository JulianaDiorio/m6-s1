import { useContext, useEffect } from "react";
import { ButtonThird } from "../../../components/button";
import { Contacts } from "../../../components/Contact";
import { Title3 } from "../../../components/texts";
import { DataContext } from "../../../Context";
import { instance } from "../../service/axios";
import {
    DivDashboard,
    HeaderDashboard,
} from "./styled";
import { Main } from "../Login/styled";
import { Modal } from "../../../components/Contact/ModalNewContact";
import { NavigationDash } from "../Navigation";
import { ModalEditUser } from "../../../components/Contact/ModalEditUser";



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
        userEdit

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
    }, [update, modalEdit, userEdit]);

    return (
        <>
        
        <NavigationDash />
        <Main>
            {modal && <Modal />}
            {userEdit && <ModalEditUser />}
            <HeaderDashboard>
                <Title3> Olá, {user?.name} </Title3>
            </HeaderDashboard>
            <DivDashboard>
                <Title3>Contatos </Title3>
                <ButtonThird onClick={() => openModal()}>
                    Novo
                </ButtonThird>
            </DivDashboard>
            <Contacts />
        </Main></>
    );
};
