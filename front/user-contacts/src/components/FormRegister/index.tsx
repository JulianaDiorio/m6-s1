import { useForm } from "react-hook-form";
import { FormReg } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Label, Title2 } from "../texts";
import { ContainerRegister } from "../container";
import { Input } from "../FormLogin/styles";
import { ButtonPrimary } from "../button";
import { instance } from "../../features/service/axios";
import { useContext } from "react";
import { DataContext, IUser } from "../../Context";

export const FormRegister = () => {
    const { sucess, negative, navigate } = useContext(DataContext);

    const onSubmit = async (data: IUser) => {
        try {
            const response = await instance.post("/users", data);
            sucess("Cadastro realizado com sucesso! :)");
            navigate("/");
        } catch (error: any) {
            const messageToast = error.response.data.message;
            negative(
                `${messageToast}`
            );
            console.log(messageToast);
        } finally {
        }
    };

    const formYup = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup
            .string()
            .required("Email obrigatório")
            .email("Email inválido"),
        phone: yup.string().required("Telefone obrigatório"),
        password: yup
            .string()
            .required("Password Obrigatório")
            .min(8, "Minimo de 8 caracter")
            .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiuscula ")
            .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula ")
            .matches(/(\d)/, "Deve conter ao menos 1 número")
            .matches(/(\W)|_/, "Deve conter ao menos 1 caracater especial")
            .matches(/.{8,}/, "Deve conter no minimo 8 caracater"),
        confirmPassword: yup
            .string()
            .required("Confirmação de senha obrigatória")
            .oneOf([yup.ref("password")], "A senha é divergente"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser>({
        resolver: yupResolver(formYup),
    });

    return (
        <ContainerRegister>
            <Title2>Crie sua conta</Title2>
            <FormReg onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <Label htmlFor="name">
                        Nome
                        <Input
                            type="text"
                            placeholder="Digite aqui seu nome"
                            {...register("name")}
                        />
                        <p>{errors.name?.message}</p>
                    </Label>
                    <Label htmlFor="email">
                        Email
                        <Input
                            type="email"
                            placeholder="Digite aqui seu email"
                            {...register("email")}
                        />
                        <p>{errors.email?.message}</p>
                    </Label>
                    <Label htmlFor="phone">
                        Telefone
                        <Input
                            type="text"
                            placeholder="Opção de contato"
                            {...register("phone")}
                        />
                        <p>{errors.phone?.message}</p>
                    </Label>
                    <Label htmlFor="password">
                        Senha
                        <Input
                            type="password"
                            placeholder="Digite aqui sua senha"
                            {...register("password")}
                        />
                        <p>{errors.password?.message}</p>
                    </Label>
                    <Label htmlFor="confirmPassword">
                        Confirmar senha
                        <Input
                            type="password"
                            placeholder="Digite novamente sua senha"
                            {...register("confirmPassword")}
                        />
                        <p>{errors.password?.message}</p>
                    </Label>


                </fieldset>
                <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
            </FormReg>
        </ContainerRegister>
    );
};

