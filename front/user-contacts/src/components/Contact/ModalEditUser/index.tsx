
import { RiCloseLine } from "react-icons/ri";
import { useContext } from "react";
import { DataContext, IUserUpdate} from "../../../Context";
import { instance } from "../../../features/service/axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import {     ButtonClose,
    ButtonRegister,
    DivForm,
    DivTitleModal,
    ErrorRegister,
    FormModal,
    InputModal,
    LabelModal,
    SectionModal,
    TitleRegister, } from "../ModalEditContact/styled";

export const ModalEditUser = ({ userId }: any) => {
    const { sucess, negative, openModalEditUser, setUpdate, user, token, setUser } = useContext(DataContext);

    const onUpdateUser = (id: string, data: FieldValues) => Edit(id, data)

    const Edit = async (id: string, data: FieldValues) => {
        setUpdate(true);
        
        try {
            instance.defaults.headers.authorization = `Bearer ${token}`;
            const response = await instance.patch(`/users/${id}`, data);
            setUser(response.data)
            sucess("Perfil alterado com sucesso!");
        } catch (error) {
            negative("Perfil não pode ser alterado!");
            console.log(error);
        } finally {
            openModalEditUser();
            setUpdate(false);
        }
    };

    const formYup = yup.object().shape({
        name: yup.string().required("Nome é obrigatório"),
        email: yup.string().required("E-mail é obrigatório"),
        phone: yup.string().required("Telefone é obrigatório"),
    });
    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserUpdate>({ resolver: yupResolver(formYup) });


    return (
        <SectionModal>
            <FormModal 
            onSubmit={ handleSubmit((data: IUserUpdate) => onUpdateUser(user.id, data))}
            >
                <DivTitleModal>
                    <TitleRegister>Editar perfil</TitleRegister>
                    <ButtonClose onClick={() => openModalEditUser()}>
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
                        defaultValue={user.name}
                        {...register("name")}
                        />
                    </LabelModal>
                    <ErrorRegister>{errors.name?.message}</ErrorRegister>
                    <LabelModal htmlFor="email">
                    Email:
                    <InputModal
                        type="text"
                        placeholder="E-mail"
                        defaultValue={user.email}
                        {...register("email")}
                    />
                    </LabelModal>
                    <ErrorRegister>{errors.email?.message}</ErrorRegister>
                    <LabelModal htmlFor="phone">
                    Telefone:
                    <InputModal
                        type="text"
                        placeholder="Telefone"
                        defaultValue={user.phone}
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
