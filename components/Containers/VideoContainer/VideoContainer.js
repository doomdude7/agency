import { StyledVideoContainer } from "./elements";
import Image from "next/image";
import image from "../../../assets/video.png";
import styles from "../../../styles/VideoContainer.module.css";
export const VideoContainer = ({ ...props }) => {
  return (
    <StyledVideoContainer {...props}>
      <Image className={styles["video-img"]} src={image} />
    </StyledVideoContainer>
  );
};
