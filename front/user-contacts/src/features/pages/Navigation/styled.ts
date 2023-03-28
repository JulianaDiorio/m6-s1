import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  background-color: var(--fourth-color);
  width: 100%;
  height: 5rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 1;

  @media (max-width: 768px) {
    height: 3.5rem;
  }
`;

export const DivButtonNav = styled.div`
  width: 17%;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem 0 0.5rem;

  @media (max-width: 600px) {
    width: 60%;
    justify-content: space-around;
  }
`;
