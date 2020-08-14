import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import classnames from "classnames";

import VideoThumbnail from "../VideoThumbnail";
import { saveVideo } from "../../modules/video";
import { getVideolist } from "../../util/api";

const Tab = (props) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const videoList = useSelector((state) => state.video.videoList);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const getVideoList = async () => {
    const data = await getVideolist();
    dispatch(saveVideo(data));
  };

  useEffect(() => {
    getVideoList();
  }, []);

  const VideoList =
    videoList &&
    videoList.map((video, index) => (
      <Col sm="6" style={{ maxWidth: "30%", minHeight: "200px", paddingBottom: "30px" }}>
        <div className="card" style={{ height: "100%" }}>
          <VideoThumbnail key={index} video={video}></VideoThumbnail>
        </div>
      </Col>
    ));

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
            {VideoList}
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
