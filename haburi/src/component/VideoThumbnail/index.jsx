import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const VideoThumbnail = ({ video }) => {
  let history = useHistory();

  const onPassVideo = () => {
    if (video.isBlock === "true") {
      alert("블락된 영상입니다. ");
      return;
    }
    history.push(`/streamingPage/${video.id}`);
  };

  return (
    <>
      <Wrapper onClick={onPassVideo}>
        {video.thumbnail === "imgLink" ? (
          video.isBlock === "true" ? (
            <ThumbnailImage
              src={
                "https://user-images.githubusercontent.com/45891045/90220944-2b128d80-de44-11ea-9e68-bb5695d193ee.png"
              }
              alt="썸네일 이미지 - block"
            />
          ) : (
            <ThumbnailImage
              src={
                "https://user-images.githubusercontent.com/45891045/90224873-52b92400-de4b-11ea-87c6-eaefd111977b.png"
              }
              alt="썸네일 이미지"
            />
          )
        ) : (
          <ThumbnailImage src={video.thumbnail} alt="썸네일 이미지" />
        )}
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
