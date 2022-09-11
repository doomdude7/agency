import styled from "styled-components";
export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  transform: translateY(-8%);
  list-style: none;
  @media screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
  }
`;
