import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Tada from "react-reveal/Tada";

const skills = [
  { name: "C", color: "#fe3e57", progress: 85 },
  { name: "HTML", color: "#ff5733", progress: 90 },
  { name: "CSS", color: "#2965f1", progress: 85 },
  { name: "JavaScript", color: "#f1f965", progress: 81 },
  { name: "React", color: "#61dafb", progress: 86 },
  { name: "Node Js", color: "#68a063", progress: 86 },
  { name: "Express Js", color: "#353535", progress: 80 },
  { name: "Mongo Db", color: "#4db33d", progress: 75 },
  { name: "Java", color: "#54faae", progress: 85 },
  { name: "Python", color: "#39c4ff", progress: 90 },
];

export default function TechnicalSkill() {
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
      <Tada>
        <h1 className="mt-4">Technical Skills</h1>
      </Tada>
      <div className="mt-5">
        <Container>
          <Row className="g-5">
            {skills.map((skill, index) => (
              <Col md={6} key={index}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h2
                    style={{
                      color: skill.color,
                      fontSize: "25px",
                      fontWeight: 700,
                      flex: 1,
                      textAlign: "left",
                    }}
                  >
                    {skill.name}
                  </h2>
                  <div style={{ flex: 3, paddingLeft: "20px", display: "flex", alignItems: "center" }}>
                    <ProgressBar
                      now={skill.progress}
                      style={{ height: "2rem", flex: 1, backgroundColor: skill.color }}
                    />
                    <span
                      style={{
                        color: skill.color,
                        fontSize: "20px",
                        fontWeight: 700,
                        marginLeft: "10px",
                      }}
                    >
                      {skill.progress}%
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
