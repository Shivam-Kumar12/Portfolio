import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import vs from "../../../images/Vs.png";
import pc from "../../../images/pc.png";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import cb from "../../../images/cb.png";
import pg from "../../../images/pg.jpeg";
import pm from "../../../images/pm.png";
import chrome from "../../../images/chorme.svg";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function Toolkit() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary" to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Zoom left cascade>
        <h1 className="mt-4">Tools I Use</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={6} md={3} className="tech-icons text-center">
            <img src={vs} alt="Visual Studio Code" style={{ width: "65%", height: "65%" }} />
            <p className="mt-2" style={{ fontSize: "14px" }}>Visual Studio Code</p>
          </Col>
          <Col xs={6} md={3} className="tech-icons text-center">
            <img src={pc} alt="Postman" style={{ width: "65%", height: "65%" }} />
            <p className="mt-2" style={{ fontSize: "14px" }}>Postman</p>
          </Col>
          <Col xs={6} md={3} className="tech-icons text-center">
            <img src={git} alt="Git" style={{ width: "65%", height: "65%" }} />
            <p className="mt-2" style={{ fontSize: "14px" }}>Git</p>
          </Col>
          <Col xs={6} md={3} className="tech-icons text-center">
            <img
              src={github}
              alt="GitHub"
              style={{
                width: "65%",
                height: "65%",
                filter: "grayscale(1) invert(1)",
              }}
            />
            <p className="mt-2" style={{ fontSize: "14px" }}>GitHub</p>
          </Col>
          <Col xs={6} md={3} className="tech-icons text-center">
            <img src={cb} alt="Code Blocks" style={{ width: "75%", height: "75%" }} />
            <p className="mt-2" style={{ fontSize: "14px" }}>Code Blocks</p>
          </Col>
          <Col xs={6} md={3} className="tech-icons text-center">
            <img src={pg} alt="PgAdmin" style={{ width: "75%", height: "75%" }} />
            <p className="mt-2" style={{ fontSize: "14px" }}>ThunderClient</p>
          </Col>
          <Col xs={6} md={3} className="tech-icons text-center">
            <img src={pm} alt="Postman" style={{ width: "75%", height: "75%" }} />
            <p className="mt-2" style={{ fontSize: "14px" }}>Postman</p>
          </Col>
          <Col xs={6} md={3} className="tech-icons text-center">
            <img src={chrome} alt="Chrome" style={{ width: "75%", height: "75%" }} />
            <p className="mt-2" style={{ fontSize: "14px" }}>Chrome</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
