import styled from "styled-components";

export const FormLog = styled.form`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: max-content;
  align-items: center;
  background-color: var(--white-color);
  opacity: 0.8;
`;

export const Input = styled.input`
  background-color: var(--fourth-color);
  border: none;
  border-radius: var(--Border-radius);
  width: 100%;
  height: 2.5rem;
  margin: 0.7rem auto;
  color: var(--second-color);
  padding: 0.5rem;
`;

export const Header = styled.header`
  margin-bottom: 1rem;
`;
