import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const VideoThumbnail = ({ video }) => {
  let history = useHistory();

  const onPassVideo = () => {
    if (video.isBlock) {
      alert("블락된 영상입니다. ");
      return;
    }
    history.push(`/streamingPage/${video.id}`);
  };

  return (
    <>
      <Wrapper onClick={onPassVideo}>
        <ThumbnailImage src={video.thumbnail} alt="" />
        <Title>{video.title}</Title>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 80%;
`;

const Title = styled.div`
  text-align: center;
  height: 20%;
  font-size: large;
`;

export default VideoThumbnail;
