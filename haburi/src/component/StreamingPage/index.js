import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import MyNav from "../MyNav";

const StreamingPage = () => {
  let history = useHistory();

  const { videoNum } = useParams();
  const videoList = useSelector((state) => state.video.videoList);

  return (
    <>
      <MyNav />
      {videoList.length ? (
        <div>
          <video controls width="500">
            <source src={videoList.filter((v) => v.id === videoNum)[0].video} />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      ) : (
        history.push(`/components`)
      )}
    </>
  );
};

export default StreamingPage;
