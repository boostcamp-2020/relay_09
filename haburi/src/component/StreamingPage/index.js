import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReportButton from '../ReportButton';
import './StreamingPage.css'
import MyNav from "../MyNav";

const StreamingPage = () => {
  let history = useHistory();

  const { videoNum } = useParams();
  const videoList = useSelector((state) => state.video.videoList);

  return (
    <>
      <MyNav />
      {videoList.length ? (
        <div className = "wrapper">
          <video className="video" controls width="500">
            <source src={videoList[videoNum].video} />
            Sorry, your browser doesn't support embedded videos.
          </video>
          <div>
            <div className = "text">
              {"videoList.title"}
            </div>
            <div className = "Reportbutton"><ReportButton videoNum = {videoList.id} className = "Reportbutton"/></div>
          </div>
        </div>
      ) : (
        history.push(`/components`)
      )}
    </>
  );
};

export default StreamingPage;
