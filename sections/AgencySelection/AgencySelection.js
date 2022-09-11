import {
  StyledHeaderTitle,
  StyledHeaderSubtitle,
  StyledSectionContainer,
  StyledHeader,
  StyledContent,
  StyledVideoContainer,
  StyledListContainer,
  StyledList,
} from "./elements";

export const AgencySelection = () => {
  return (
    <StyledSectionContainer>
      <StyledHeader>
        <StyledHeaderTitle />
        <StyledHeaderSubtitle />
      </StyledHeader>
      <StyledContent>
        <StyledVideoContainer></StyledVideoContainer>
        <StyledListContainer>
          <StyledList></StyledList>
        </StyledListContainer>
      </StyledContent>
    </StyledSectionContainer>
  );
};
