import styled from "styled-components";

export const FormReg = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: max-content;
  align-items: center;
`;

export const LabelSelect = styled.label`
  font-size: var(--Headline-size);
  font-weight: var(--Title-weight-Regular);
  color: var(--second-color);
  margin: 0.5rem auto;
`;

export const SelectRegister = styled.select`
  background-color: var(--second-color);
  border: none;
  border-radius: var(--Border-radius);
  width: 100%;
  height: 2.5rem;
  margin: 0.7rem auto;
  color: var(--second-color);
`;
