import React from "react";
import { useHistory } from "react-router-dom";

const VideoThumbnail = ({ video }) => {
  let history = useHistory();

  const onPassVideo = () => {
    history.push(`/streamingPage/${video.id}`);
  };

  return (
    <>
      <img src={video.thumbnail} alt="" />
      <div onClick={onPassVideo}>{video.title}</div>
    </>
  );
};

export default VideoThumbnail;
