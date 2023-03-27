import styled from "styled-components";

export const ContainerContacts = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ListContact = styled.ul`
  width: 60%;
  max-height: 50%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: var(--second-color);
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--second-color);
    border-radius: 100px;
  }

  display: flex;
  flex-direction: column;
  /* background-color: var(--second-color); */
  border-radius: var(--Border-radius);
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    max-height: 40%;
  }
`;
export const DivInfos = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ContactItem = styled.li`
  width: 45%;
  height: 7rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--fourth-color);
  border-radius: var(--Border-radius);
  border: 1px solid var(--primary-color);
  justify-content: space-between;
  padding: 0 1rem;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const DivContact = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContact = styled.h3`
  font-size: var(--Title3-size);
  color: var(--third-color);
  font-weight: var(--Title-weight-Bold);
`;

export const DivButtons = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
`;

export const DeleteContact = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StatusContact = styled.span`
  font-size: var(--Headline-size);
  font-weight: var(--Title-weight-Regular);
  color: var(--second-color);
`;

export const ButtonDeleteorEdit = styled.button`
  background: transparent;
  border: none;
  color: white;
`;
