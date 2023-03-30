import {
    DeleteContact,
    ListContact,
    ContactItem,
    InfoContact,
    ContainerContacts,
    DivInfos,
    DivButtons,
    DivContact,
    ButtonDeleteorEdit,
} from "./styled";
import { BiTrash, BiPencil } from "react-icons/bi";
import { useContext } from "react";
import { DataContext, IContact } from "../../Context";
import { instance } from "../../features/service/axios";
import axios from "axios";
import { ModalEdit } from "./ModalEditContact";

export const Contacts = () => {
    const { cont, token, setUpdate, openModalEdit, setEspecificUser, modalEdit } = useContext(DataContext);

    const deleteCont = async (id: string): Promise<void> => {
        setUpdate(true);
        try {
            instance.defaults.headers.authorization = `Bearer ${token}`;
            await instance.delete(`/contacts/${id}`);
        } catch (error: any) {
            if(axios.isAxiosError(error)){
                console.log(error.message)
            }
        } finally {
            setUpdate(false);
        }
    };

    const editCont = async (id: string, data: IContact): Promise<void> => {
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

    const names = cont
    cont.sort(function(a, b) { 
        if (a.name < b.name) { 
            return -1
        }
        if (a.name > b.name) {
            return 1
        }
        return 0})

    return (
        <ListContact>
            <ContainerContacts>
                {names.map((contact) => (
                    <ContactItem key={contact.id}>
                        {modalEdit && (<ModalEdit id={contact.id}/>)}
                        <DivContact>
                            <DivInfos>
                                <InfoContact> Nome: {contact?.name} </InfoContact>
                                <InfoContact> E-mail: {contact?.email} </InfoContact>
                                <InfoContact> Telefone: {contact?.phone} </InfoContact>
                            </DivInfos>
                            <DivButtons>

                                <DeleteContact>
                                    <ButtonDeleteorEdit id={contact.id}
                                        onClick={() => {
                                            setEspecificUser(contact)
                                            openModalEdit()}}

                                        >
                                        <BiPencil style={{ color: "black" }} />
                                    </ButtonDeleteorEdit>
                                </DeleteContact>

                                <DeleteContact>
                                    <ButtonDeleteorEdit
                                        onClick={() => deleteCont(contact.id)}
                                        >
                                        <BiTrash style={{ color: "black" }} />
                                    </ButtonDeleteorEdit>
                                </DeleteContact>

                            </DivButtons>
                        </DivContact>
                    </ContactItem>
                ))}
            </ContainerContacts>
        </ListContact>
    );
};
