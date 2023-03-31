import {
    ButtonClose,
    ButtonRegister,
    DivForm,
    DivTitleModal,
    ErrorRegister,
    FormModal,
    InputModal,
    LabelModal,
    SectionModal,
    TitleRegister,
} from "./styled";
import { RiCloseLine } from "react-icons/ri";
import { useContext } from "react";
import { DataContext, IContactUpdate } from "../../../Context";
import { instance } from "../../../features/service/axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";

export const ModalEdit = ({id}: any) => {
    const { sucess, negative, openModalEdit, setUpdate, especificUser } = useContext(DataContext);

    const onUpdateContact = (id: string, data: FieldValues) => Edit(id, data)

    const Edit = async (id: string, data: FieldValues) => {
        
        try {
            const response = await instance.patch(`/contacts/${id}`, data);
            setUpdate(true);
            sucess("Contato alterado com sucesso!");
        } catch (error) {
            negative("Contato não pode ser alterado!");
            console.log(error);
        } finally {
            setUpdate(false);
            openModalEdit();
        }
    };

    const formYup = yup.object().shape({
        name: yup.string().required("Nome é obrigatório"),
        email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
        phone: yup.string().required("Telefone é obrigatório"),
    });
    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IContactUpdate>({ resolver: yupResolver(formYup) });


    return (
        <SectionModal>
            <FormModal 
            onSubmit={ handleSubmit((data) => onUpdateContact(especificUser.id, data))}
            >
                <DivTitleModal>
                    <TitleRegister>Editar Contato</TitleRegister>
                    <ButtonClose onClick={() => openModalEdit()}>
                        {" "}
                        <RiCloseLine
                            style={{
                                color: "white",
                                width: "1.2rem",
                                height: "1.2rem",
                            }}
                        />{" "}
                    </ButtonClose>
                </DivTitleModal>

                <DivForm>

                    <LabelModal htmlFor="name">
                    Nome:
                    <InputModal
                        type="text"
                        placeholder="Name"
                        defaultValue={especificUser.name}
                        {...register("name")}
                        />
                    </LabelModal>
                    <ErrorRegister>{errors.name?.message}</ErrorRegister>
                    <LabelModal htmlFor="email">
                    Email:
                    <InputModal
                        type="text"
                        placeholder="E-mail"
                        defaultValue={especificUser.email}
                        {...register("email")}
                    />
                    </LabelModal>
                    <ErrorRegister>{errors.email?.message}</ErrorRegister>
                    <LabelModal htmlFor="phone">
                    Telefone:
                    <InputModal
                        type="text"
                        placeholder="Telefone"
                        defaultValue={especificUser.phone}
                        {...register("phone")}
                    />
                    </LabelModal>
                    <ErrorRegister>{errors.phone?.message}</ErrorRegister>
                <ButtonRegister >
                    Confirmar
                </ButtonRegister>
                </DivForm>

            </FormModal>
        </SectionModal>
    );
};
