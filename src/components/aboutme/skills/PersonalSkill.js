import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import LightSpeed from 'react-reveal/LightSpeed';

const skills = [
  { name: "Communication Skills", color: "#fe3e57", progress: 75 },
  { name: "Project Management", color: "#54faae", progress: 85 },
  { name: "Problem Solving", color: "#ff8c2f", progress: 81 },
  { name: "Analytical Abilities", color: "#f1f965", progress: 77 },
  { name: "Organization", color: "#ff0173", progress: 87 },
  { name: "Creativity", color: "#39c4ff", progress: 79 },
];

export default function PersonalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">Technical Skill</Link>
        <Link className="btn btn-primary me-3" to="/personalskill">Personal Skill</Link>
        <Link className="btn btn-primary" to="/toolkit">Toolkit</Link>
      </div>
      <LightSpeed left cascade>
        <h1 className="mt-4">Personal Skills</h1>
      </LightSpeed>
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
                      textAlign: "left",
                      flex: 1,
                    }}
                  >
                    {skill.name}
                  </h2>
                  <div style={{ flex: 3, display: "flex", alignItems: "center", paddingLeft: "20px" }}>
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
