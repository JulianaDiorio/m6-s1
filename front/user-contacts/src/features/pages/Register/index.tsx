import { useNavigate } from "react-router-dom";
import { ButtonThird } from "../../../components/button";
import { FormRegister } from "../../../components/FormRegister";
import { Title1 } from "../../../components/texts";
import { Main } from "../Login/styled";
import { DivHeader } from "./styled";

export const Register = () => {
    const navigate = useNavigate();

    return (
        <Main>
            <DivHeader>
                <Title1>Agenda</Title1>
                <ButtonThird onClick={() => navigate("/")}>Voltar</ButtonThird>
            </DivHeader>
            <FormRegister />
        </Main>
    );
};
