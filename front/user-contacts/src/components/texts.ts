import styled from "styled-components";

export const Title1 = styled.h1`
  font-size: var(--Title1-size);
  font-weight: var(--Title-weight-Bold);
  color: var(--third-color);

  @media (max-width: 768px) {
    font-size: var(--Title4-size);
  }
`;

export const Title2 = styled.h2`
  font-size: var(--Title2-size);
  font-weight: var(--Title-weight-Bold);
  color: var(--second-color);
`;

export const Title3 = styled.h2`
  font-size: var(--Title2-size);
  font-weight: var(--Title-weight-Bold);
  color: var(--third-color);
`;

export const Headline = styled.h4`
  font-size: var(--Headline-size);
  font-weight: var(--Title-weight-Regular);
  color: var(--primary-color);
  margin: 1rem auto;
`;

export const Label = styled.label`
  font-size: var(--Headline-size);
  font-weight: var(--Title-weight-Regular);
  color: var(--primary-color);
  margin: 0.5rem auto;
  width: 100%;
`;
