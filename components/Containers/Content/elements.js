import styled from "styled-components";

export const StyledContent = styled.div`
  width: 80vw;
  height: 70vh;
  display: flex;
  margin-top: 2.5rem;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
