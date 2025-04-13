import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import nuc from "../../images/nuc.png";
import ci from "../../images/ci.png";
import hd from "../../images/hd.png";
import pp from "../../images/pp.png";

const projects = [
  {
    title: "Job Tracker App(..cont)",
    img: nuc,
    link: "https://github.com/Shivam-Kumar12/Internship_project",
    desc: "Job Tracking App is just about a What a job is created by the admin and any user that can be viwed by anyone track the status of their Job, in this i added a module with company wise",
    lang: "HTML, CSS, JavaScript, Reactjs,MonGoDb, Expressjs, NodeJs"
  },

  {
    title: "Tech-World(Mern)",
    img: ci,
    link: "https://github.com/Shivam-Kumar12/Mern-Stack",
    desc: "This is Simple dynamic web appliaction that I have designed using MERN Technologies about a company",
    lang: "CSS, JavaScript, MERN( Reactjs,MonGoDb, Expressjs, NodeJs)"
  },
  {
    title: "Personal Portfolio",
    img: pp,
    link: "https://github.com/Shivam-Kumar12/Portfolio-Reactjs",
    desc: "Welcome to my personal portfolio. Explore my work, skills, and achievements in a concise and visually appealing format.",
    lang: "HTML, CSS, Bootstrap, React, JavaScript"
  }
];

export default function Projects() {
  return (
    <Container fluid className="certificate-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="certificate-description d-flex justify-content-start">
            <Zoom left cascade>
              <h1 className="aboutme-heading">Projects</h1>
            </Zoom>
          </Col>
          {projects.map((project, index) => (
            <Col md={4} key={index}>
              <Fade bottom>
                <div className="singleProject" style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}>
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>{project.title}</h5>
                    <img src={project.img} alt={project.title} />
                    <div className="project--showcaseBtn">
                      <a href={project.link} target="_blank" rel="noreferrer" className={"iconBtn"} aria-labelledby={`code${index}`}>
                        <FaCode id={`code${index}`} className={"icon"} aria-label="Code" />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p className="project--desc" style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}>
                      {project.desc}
                    </p>
                  </h6>
                  <div className="project--lang" style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}>
                    {project.lang}
                  </div>
                </div>
              </Fade>
            </Col>
          ))}
        </Row>
        <div className="blog--viewAll">
          <Link to="/projectspage">
            <button className="btn btn-primary">
              View All <HiArrowRight className="viewArr" />
            </button>
          </Link>
        </div>
      </Container>
    </Container>
  );
}
