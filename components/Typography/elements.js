import styled from "styled-components";

export const StyledHeadingTitle = styled.h1`
  font-size: 3.3rem;
  @media screen and (max-width: 1024px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;
export const StyledHeadingSubtitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  font-weight: lighter;
  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;
export const StyledListItemHeader = styled.h2`
  margin-bottom: 0.5rem;
`;
export const StyledListItemDesc = styled.p`
  font-size: 1.2rem;
  line-height: 1.3rem;
`;
