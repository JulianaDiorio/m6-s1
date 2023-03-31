import {
    ButtonClose,
    ButtonRegister,
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
import { DataContext, IContact } from "../../../Context";
import { instance } from "../../../features/service/axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { DivForm } from "../ModalEditContact/styled";

export const Modal = () => {
    const { sucess, negative, openModal, setUpdate } = useContext(DataContext);

    const Register = async (data: IContact) => {
        setUpdate(true);

        try {
            const response = await instance.post("/contacts", data);
            sucess("Contato cadastrado com sucesso!");
        } catch (error) {
            negative("Contato já cadastrado!");
            console.log(error);
        } finally {
            setUpdate(false);
            openModal();
        }
    };

    const formYup = yup.object().shape({
        name: yup.string().required("Nome do contato obrigatório"),
        email: yup.string().required("E-mail do contato obrigatório").email("E-mail inválido"),
        phone: yup.string().required("Telefone do contato obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IContact>({ resolver: yupResolver(formYup) });

    return (
        <SectionModal>
            <FormModal onSubmit={handleSubmit(Register)}>
                <DivTitleModal>
                    <TitleRegister>Cadastrar Contato</TitleRegister>
                    <ButtonClose onClick={() => openModal()}>
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
                        placeholder=" Nome"
                        {...register("name")}
                    />
                </LabelModal>
    
                    <ErrorRegister>{errors.name?.message}</ErrorRegister>
                <LabelModal htmlFor="email">
                    E-mail:
                    <InputModal
                        type="text"
                        placeholder="E-mail"
                        {...register("email")}
                    />
                </LabelModal>
                
                    <ErrorRegister>{errors.email?.message}</ErrorRegister>
                <LabelModal htmlFor="phone">
                    Telefone:
                    <InputModal
                        type="text"
                        placeholder="Telefone"
                        {...register("phone")}
                    />
                    <ErrorRegister>{errors.phone?.message}</ErrorRegister>
                </LabelModal>

                <ButtonRegister type="submit">
                    Cadastrar
                </ButtonRegister>
                </DivForm>
            </FormModal>
        </SectionModal>
    );
};
