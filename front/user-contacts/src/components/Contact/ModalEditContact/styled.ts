import styled from "styled-components";

export const SectionModal = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormModal = styled.form`
  width: 30%;
  height: 45%;
  border-radius: var(--Border-radius);
  background-color: var(--primary-color);
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
    height: 60%;
  }
`;

export const DivTitleModal = styled.div`
  width: 100%;
  height: 2.5rem;
  background-color: var(--primary-color);
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--Border-radius) var(--Border-radius) 0 0;
`;

export const TitleRegister = styled.h2`
  font-size: var(--Title2-size);
  color: var(--second-color);
  font-weight: var(--Title-weight-Bold);
  margin-left: 1rem;

  @media (max-width: 768px) {
    font-size: var(--Title3-size);
  }
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const LabelModal = styled.label`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

export const SpanLabel = styled.span`
  position: absolute;
  left: 0;
  font-size: var(--Headline-size);
  color: white;
  margin-left: 1rem;
  margin-top: -1rem;
`;

export const InputModal = styled.input`
  padding: 0.5rem;
  border-radius: var(--Border-radius);
  font-size: var(--Title3-size);
  border: 1px solid white;
  color: var(--second-color);
  background-color: var(--fourth-color);
  width: 100%;
  margin-top: 0.5rem;
`;

export const SelectModal = styled.select`
  padding: 0.5rem;
  border-radius: var(--Border-radius);
  font-size: var(--Title3-size);
  border: 1px solid white;
  color: white;
  background-color: var(--second-color);
  width: 91%;
  margin-top: 0.5rem;
`;

export const ButtonRegister = styled.button`
  background-color: var(--third-color);
  color: white;
  border-radius: var(--Border-radius);
  border: none;
  padding: 1rem 5.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    white-space: nowrap;
    padding: 1rem 4rem;
  }
`;

export const ErrorRegister = styled.p`
  color: white;
  font-size: 12px;
  margin-top: 0.5rem;
`;
