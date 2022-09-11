import { StyledList } from "./elements";
import Image from "next/image";
import image1 from "../../assets/Capture1.png";
import image2 from "../../assets/Capture2.png";
import image3 from "../../assets/Capture3.png";
import {
  TextContainer,
  ListItemDesc,
  ListItemHeader,
  ListItem,
} from "../../components";
export const List = ({ ...props }) => {
  return (
    <StyledList {...props}>
      <ListItem {...props}>
        <Image src={image1} objectFit="contain" alt="icon" />
        <TextContainer {...props}>
          <ListItemHeader {...props}>Brief</ListItemHeader>
          <ListItemDesc {...props}>
            Complete{" "}
            <b>
              brief writing or <br />
              simple guidance
            </b>{" "}
            on what to <br />
            include, we've got you covered.
          </ListItemDesc>
        </TextContainer>
      </ListItem>
      <ListItem {...props}>
        <Image src={image2} objectFit="contain" alt="icon" />
        <TextContainer {...props}>
          <ListItemHeader {...props}>Search</ListItemHeader>
          <ListItemDesc {...props}>
            {" "}
            In-depth agency search covering; <br />
            <b>criteria matching</b>, door knocking <br />
            and due-dilligence vetting.
          </ListItemDesc>
        </TextContainer>
      </ListItem>
      <ListItem {...props}>
        <Image src={image3} objectFit="contain" alt="icon" />
        <TextContainer {...props}>
          <ListItemHeader {...props}>Pitch</ListItemHeader>
          <ListItemDesc {...props}>
            {" "}
            Comprehensive{" "}
            <b>
              pitch management, <br />
            </b>
            including comms, diary management <br />
            and pitch hosting.
          </ListItemDesc>
        </TextContainer>
      </ListItem>
    </StyledList>
  );
};
