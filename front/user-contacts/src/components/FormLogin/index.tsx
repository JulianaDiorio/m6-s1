import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormLog, Header, Input } from "./styles";
import { ButtonPrimary, ButtonSecundary } from "../button";
import { ContainerLogin } from "../container";
import { instance } from "./../../features/service/axios"
import { useContext } from "react";
import { DataContext } from "./../../Context/index";
import { Headline, Label, Title2 } from "../texts";
import React from "react";

interface ILogin {
    email: string;
    password: string;
}

export const FormLogin = () => {
    const { navigate, sucess, negative } = useContext(DataContext);

    const onSubmit = async (data: ILogin) => {
        try {
            const response = await instance.post(`/login`, data);
            localStorage.setItem("@token:token", response.data.token);
            localStorage.setItem("id", response.data.user.id);
            sucess("Login realizado com sucesso!");
            navigate("/dashboard");
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
        email: yup
            .string()
            .required("Email obrigatório")
            .email("Email inválido"),
        password: yup.string().required("Senha obrigatória"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILogin>({
        resolver: yupResolver(formYup),
    });

    return (
        <ContainerLogin>
            <Header>
                <Title2>Login</Title2>
            </Header>
            <FormLog onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="email">
                    Email
                    <Input
                        type="email"
                        placeholder="Digite aqui seu email"
                        {...register("email")}
                    />
                    <p>{errors.email?.message}</p>
                </Label>
                <Label htmlFor="">
                    Senha
                    <Input
                        type="password"
                        placeholder="Digite aqui sua senha"
                        {...register("password")}
                    />
                    <p>{errors.password?.message}</p>
                </Label>
                <ButtonPrimary type="submit">Entrar</ButtonPrimary>
            </FormLog>

            <Headline>Ainda não possui uma conta?</Headline>

            <ButtonSecundary to="/register">Cadastre-se</ButtonSecundary>
        </ContainerLogin>
    );
};
