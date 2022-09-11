import styled from "styled-components";
import {
  HeadingTitle,
  HeadingSubtitle,
  SectionContainer,
  Header,
  Content,
  VideoContainer,
  ListContainer,
} from "../../components";
import { List } from "../../collections/List/List";
export const StyledHeaderTitle = styled((props) => <HeadingTitle {...props} />)`
  color: #202020;
`;
export const StyledHeaderSubtitle = styled((props) => (
  <HeadingSubtitle {...props} />
))`
  color: rgb(90, 89, 89);
`;
export const StyledSectionContainer = styled((props) => (
  <SectionContainer {...props} />
))`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledHeader = styled((props) => <Header {...props} />)``;

export const StyledContent = styled((props) => <Content {...props} />)``;

export const StyledVideoContainer = styled((props) => (
  <VideoContainer {...props} />
))``;
export const StyledListContainer = styled((props) => (
  <ListContainer {...props} />
))``;
export const StyledList = styled((props) => <List {...props} />)``;
