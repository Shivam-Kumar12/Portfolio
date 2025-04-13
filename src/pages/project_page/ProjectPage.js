import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode } from "react-icons/fa";
import nuc from "../../images/nuc.png";
import nyc from "../../images/nyc.png";
import ci from "../../images/ci.png";
import hd from "../../images/hd.png";
import pp from "../../images/pp.png";
import dc from "../../images/dc.png";

export default function ProjectPage() {
  const projects = [
    {
      title: "Job Tracker App(..cont)",
      img: nuc,
      link: "https://github.com/Shivam-Kumar12/Internship_project",
      desc: "Job Tracking App is just about what a job is created by the admin and any user can view and track the status of their job. I added a module with company-wise tracking.",
      lang: "HTML, CSS, JavaScript, Reactjs, MongoDB, Expressjs, NodeJs"
    },
    {
      title: "Social Media App",
      img: hd,
      link: "https://github.com/Shivam-Kumar12/Social_Media_React-JS/tree/main/Social_Media",
      desc: "A dynamic web application built using React that serves as a platform to manage and display a collection of posts. It provides a user-friendly interface for viewing, adding, and managing posts with real-time updates and smooth interactions.",
      lang: "Reactjs, JavaScript, Bootstrap, Redux"
    },
    {
      title: "Tech-World (MERN)",
      img: ci,
      link: "https://github.com/Shivam-Kumar12/Mern-Stack",
      desc: "A simple dynamic web application designed using MERN Technologies about a company.",
      lang: "CSS, JavaScript, MERN (Reactjs, MongoDB, Expressjs, NodeJs)"
    },
    {
      title: "Personal Portfolio",
      img: pp,
      link: "https://github.com/Shivam-Kumar12/Portfolio-Reactjs",
      desc: "Welcome to my personal portfolio. Explore my work, skills, and achievements in a concise and visually appealing format.",
      lang: "HTML, CSS, Bootstrap, React, JavaScript"
    },
    {
      title: "Food-Api",
      img: nyc,
      link: "https://github.com/Shivam-Kumar12/React-js/tree/main/Mini_Projects/Food_App%20Api",
      desc: "This is simple Reactjs Application where i laernt about sorting and with Price as well as With Category and abot API Integration ",
      lang: "HTML, CSS, Bootstrap, React, JavaScript"
    },
    {
      title: "To-Do App",
      img:dc ,
      link: "https://github.com/Shivam-Kumar12/React-js/tree/main/To-Do-App%20_ContextAPI",
      desc: "This my  first React App (To-Do), in which I have  Learnt about React js,fetch Api and its various tools like Redux, Context Api to Add the To Do List",
      lang: "HTML, CSS, Bootstrap, React, JavaScript"
    }
  ];

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div className="d-flex justify-content-center" style={{ backgroundColor: "#fbd9ad" }}>
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <Container fluid className="certificate-section" id="about">
            <Container>
              <Row className="gy-4"> {/* Added Bootstrap gap utility class */}
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
                            <a href={project.link} target="_blank" rel="noreferrer" className="iconBtn" aria-labelledby={`code${index}`}>
                              <FaCode id={`code${index}`} className="icon" aria-label="Code" />
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
            
            </Container>
          </Container>
        </Container>
      </Container>
    </section>
  );
}
