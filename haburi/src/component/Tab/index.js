import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import classnames from "classnames";
import { useHistory } from "react-router-dom";

const Tab = (props) => {
  let history = useHistory();
  const [activeTab, setActiveTab] = useState("1");

  const passVideo = () => {
    history.push(`/streamingPage`);
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

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
            <Col sm="6">
              <div class="card">
                <div class="embed-responsive embed-responsive-4by3">
                  <div onClick={passVideo}>동영상1</div>
                </div>
              </div>
            </Col>
            <Col sm="6">
              <div class="card">
                <div class="embed-responsive embed-responsive-4by3">
                  <video controls autoplay loop class="embed-responsive-item">
                    <source src="https://youtu.be/uILTpGsOF4w"></source>
                  </video>
                </div>
              </div>
            </Col>
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
