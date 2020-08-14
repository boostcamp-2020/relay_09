import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import ReportButton from "../ReportButton";
// import "./StreamingPage.css";
import MyNav from "../MyNav";

const StreamingPage = () => {
  let history = useHistory();

  const { videoNum } = useParams();
  const videoList = useSelector((state) => state.video.videoList);
  const video = videoList && videoList.filter((v) => v.id === videoNum)[0];

  return (
    <>
      <MyNav />
      {videoList.length ? (
        <Wrapper>
          <Video className="video" controls autoPlay width="500">
            <source src={video.video} />
            Sorry, your browser doesn't support embedded videos.
          </Video>
          <TitleWrapper>
            <Text>{video.title}</Text>
            <ReportButton videoUrl={video.video} className="Reportbutton" />
          </TitleWrapper>
        </Wrapper>
      ) : (
        history.push(`/components`)
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 5%;
`;

const Video = styled.video`
  width: 100%;
  height: 50%;
`;

const Text = styled.div`
  font-size: 35px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default StreamingPage;
