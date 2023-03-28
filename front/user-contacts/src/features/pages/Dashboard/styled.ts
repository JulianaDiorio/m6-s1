import styled from "styled-components";

export const MainDashboard = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--second-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const NavDashboard = styled.nav`
  width: 60%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const HeaderDashboard = styled.header`
  width: 60%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--primary-color);
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    width: 90%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

export const HeadlineDashboard = styled.h4`
  font-size: var(--Headline-size);
  font-weight: var(--Title-weight-Regular);
  color: var(--primary-color);
`;

export const AddContacts = styled.button`
  font-size: var(--Title-size);
  font-weight: var(--Title-weight-Regular);
  color: white;
  margin: 1rem 0;
  background-color: var(--third-color);
  border: none;
  border-radius: var(--Border-radius);
  padding: 0.4rem 0.6rem;
`;

export const DivDashboard = styled.div`
  width: 60%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    width: 90%;
    height: 4rem;
  }
`;
