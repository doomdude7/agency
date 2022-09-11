import styled from "styled-components";
export const StyledListItem = styled.li`
  background-color: rgba(218, 218, 218, 0.199);
  margin: 1rem 0rem;
  padding: 0rem 1rem;
  width: 35vw;
  display: flex;
  flex-direction: row;
  border-radius: 0.5rem;
  text-decoration: none;

  &:hover {
    border: 3px solid blue;
  }
  &:hover h2 {
    color: blue;
    text-decoration: underline;
  }
  @media screen and (max-width: 1024px) {
    width: 65vw;
  }
`;
