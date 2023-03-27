
import { useContext, useEffect } from "react";
import { ButtonThird } from "../../../components/button"
import { Title1 } from "../../../components/texts"
import { DataContext } from "../../../Context";
import { instance } from "../../service/axios";
import { DivButtonNav, StyledNav } from "./styled"

export const NavigationDash = () => {
    const {openModalEdit, setUser, token, update, modalEdit, openModal} = useContext(DataContext);

    const idUser = localStorage.getItem("id");

    useEffect(() => {
        const userInfo = async () => {
            try {
                instance.defaults.headers.authorization = `Bearer ${token}`;
                const response = await instance.get(`/users/${idUser}`);
                setUser(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        userInfo();
    }, [update, modalEdit]);

    return(
        <StyledNav>
            <Title1>Agenda</Title1>
            <DivButtonNav>
            <ButtonThird onClick={() => {openModalEdit()}}>
                    Editar Perfil </ButtonThird>

            <ButtonThird
                onClick={() =>openModal()}>
                Logout
            </ButtonThird>
            </DivButtonNav>
        </StyledNav>
    )
}