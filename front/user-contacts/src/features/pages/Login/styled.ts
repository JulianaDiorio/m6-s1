import styled from "styled-components";
import bg from "./../../../assets/bg.jpg";

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
