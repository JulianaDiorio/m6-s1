
import axios from "axios";
import { useContext, useEffect } from "react";
import { ButtonThird } from "../../../components/button"
import { ModalEditUser } from "../../../components/Contact/ModalEditUser";
import { Title1 } from "../../../components/texts"
import { DataContext, IUser } from "../../../Context";
import { instance } from "../../service/axios";
import { DivButtonNav, StyledNav } from "./styled"

export const NavigationDash = () => {
    const {openModalEditUser, navigate, setUser, token, update, setUpdate} = useContext(DataContext);

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
    }, [update, ModalEditUser]);


    const editUser = async (id: string, data: IUser): Promise<void> => {
        setUpdate(true);
        try {
            instance.defaults.headers.authorization = `Bearer ${token}`;
            await instance.patch(`/contacts/${id}`, data);
        } catch (error: any) {
            if(axios.isAxiosError(error)){
                console.log(error.message)
            }
        } finally {
            setUpdate(false);
        }
    };

    return(
        <StyledNav>
            <Title1>Agenda</Title1>
            <DivButtonNav>
                <ButtonThird onClick={() => { openModalEditUser()}}>
                        Editar Perfil </ButtonThird>

                <ButtonThird
                    onClick={() => [navigate("/"), localStorage.clear()]}>
                    Logout
                </ButtonThird>
            </DivButtonNav>
        </StyledNav>
    )
}