import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import classnames from "classnames";

import VideoThumbnail from "../VideoThumbnail";
import { saveVideo } from "../../modules/video";
import { videoFilterAPI } from "../../util/api";

const Tab = (props) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // const list = [
  //   {
  //     id: 0,
  //     title: "동영상0",
  //     thumbnail: "https://user-images.githubusercontent.com/45891045/90220944-2b128d80-de44-11ea-9e68-bb5695d193ee.png",
  //     video: "https://sightengine.com/assets/stream/examples/compilation.mp4",
  //     isBlock: false,
  //   },
  //   {
  //     id: 1,
  //     title: "동영상1",
  //     thumbnail: "https://user-images.githubusercontent.com/45891045/90224873-52b92400-de4b-11ea-87c6-eaefd111977b.png",
  //     video: "http://video.mrporter.com/videos/productPage/173037_detail.mp4",
  //     isBlock: false,
  //   },
  //   {
  //     id: 2,
  //     title: "블락된 동영상",
  //     thumbnail: "https://user-images.githubusercontent.com/45891045/90224873-52b92400-de4b-11ea-87c6-eaefd111977b.png",
  //     video: "http://video.mrporter.com/videos/productPage/173037_detail.mp4",
  //     isBlock: true,
  //   },
  //   {
  //     id: 3,
  //     title: "동영상3",
  //     thumbnail: "https://user-images.githubusercontent.com/45891045/90224873-52b92400-de4b-11ea-87c6-eaefd111977b.png",
  //     video: "http://video.mrporter.com/videos/productPage/173037_detail.mp4",
  //     isBlock: false,
  //   },
  //   {
  //     id: 4,
  //     title: "동영상3",
  //     thumbnail: "https://user-images.githubusercontent.com/45891045/90224873-52b92400-de4b-11ea-87c6-eaefd111977b.png",
  //     video: "http://video.mrporter.com/videos/productPage/173037_detail.mp4",
  //     isBlock: false,
  //   },
  //   {
  //     id: 5,
  //     title: "동영상3",
  //     thumbnail: "https://user-images.githubusercontent.com/45891045/90224873-52b92400-de4b-11ea-87c6-eaefd111977b.png",
  //     video: "http://video.mrporter.com/videos/productPage/173037_detail.mp4",
  //     isBlock: false,
  //   },
  //   {
  //     id: 6,
  //     title: "동영상3",
  //     thumbnail: "https://user-images.githubusercontent.com/45891045/90224873-52b92400-de4b-11ea-87c6-eaefd111977b.png",
  //     video: "http://video.mrporter.com/videos/productPage/173037_detail.mp4",
  //     isBlock: false,
  //   },
  //   {
  //     id: 7,
  //     title: "동영상3",
  //     thumbnail: "https://user-images.githubusercontent.com/45891045/90224873-52b92400-de4b-11ea-87c6-eaefd111977b.png",
  //     video: "http://video.mrporter.com/videos/productPage/173037_detail.mp4",
  //     isBlock: false,
  //   },
  // ];

  const list = videoFilterAPI();
  dispatch(saveVideo(list));

  // const VideoList = list.map((video, index) => (
  //   <Col sm="6" style={{ maxWidth: "30%", paddingBottom: "30px" }}>
  //     <div class="card" style={{ height: "100%" }}>
  //       <VideoThumbnail key={index} video={video}></VideoThumbnail>
  //     </div>
  //   </Col>
  // ));

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            ✨ Best
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            👍 월 랭킹
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            💕 맞춤영상
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            🎁 etc
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <br />
              <h6>Best Video 👏</h6>
            </Col>
            {/* {VideoList} */}
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <br />
              <h6> Monthly ranking 👏</h6>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <br />
              <h6> Custom video 👏</h6>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <br />
              <h6> etc 👏</h6>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tab;
