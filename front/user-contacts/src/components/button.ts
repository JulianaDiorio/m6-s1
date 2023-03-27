import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonPrimary = styled.button`
  background-color: var(--second-color);
  width: 100%;
  height: 2.5rem;
  border: none;
  border-radius: var(--Border-radius);
  color: white;
  margin: 1rem auto;
`;

export const ButtonSecundary = styled(Link)`
  background-color: var(--primary-color);
  width: 90%;
  height: 2.5rem;
  border: none;
  border-radius: var(--Border-radius);
  color: var(--third-color);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: var(--Headline-size);
`;

export const ButtonThird = styled.button`
  background-color: var(--third-color);
  opacity: 0.7;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: var(--Border-radius);
  color: white;
`;
