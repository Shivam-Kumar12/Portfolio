import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import ucsc from "../../images/ucsc.png";
import ufm from "../../images/ufm.jpeg";
import nh from "../../images/nh.png";
import Particle from "../../Particle";
import kub from "../../images/kub.png"
import postman from "../../images/postman.png"


export default function CertificatePage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)" }}>Certificates</h1>
            </Zoom>
          </div>
          <Container fluid className="certificate-section" id="about">
            <Container>
              <Row>
                <Col md={12} className="mt-5">
                  <Row className="g-5">
                    <Col md={4}>
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                          <div className="content">
                            <a
                              href="https://www.hackerrank.com/certificates/f5fd2054d610"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="content-overlay"></div>
                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                <img className="logo_img" src={ucsc} alt="UCSC" />
                              </div>
                              <div className="content-details fadeIn-top">
                                <h3
                                  className="content-title"
                                  style={{ color: "black" }}
                                >
                                  Certificate
                                </h3>
                              </div>
                            </a>
                          </div>
                          <div className="cert-body">
                            <h2
                              className="cert-body-title"
                              style={{ fontWeight: 700, color: "#fbd9ad" }}
                            >
                              Problem Solving Basic: Programming Fundamentals
                            </h2>
                            <h3
                              className="cert-body-subtitle"
                              style={{
                                color: "#eb90ff",
                                marginBottom: "0px",
                              }}
                            >
                              - HackerRank✅
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>
                    <Col md={4}>
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                          <div className="content">
                            <a
                              href="https://www.credly.com/badges/9350ce55-4935-4fda-9fa5-25a1e58304ef/public_url"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="content-overlay"></div>
                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                <img className="logo_img" src={ufm} alt="UFM" />
                              </div>
                              <div className="content-details fadeIn-top">
                                <h3
                                  className="content-title"
                                  style={{ color: "black" }}
                                >
                                  Certificate
                                </h3>
                              </div>
                            </a>
                          </div>
                          <div className="cert-body">
                            <h2
                              className="cert-body-title"
                              style={{ fontWeight: 700, color: "#fbd9ad" }}
                            >
                              Discovering SAP Business Technology Platform - Record of Achievement
                            </h2>
                            <h3
                              className="cert-body-subtitle"
                              style={{
                                color: "#eb90ff",
                                marginBottom: "0px",
                              }}
                            >
                              - issued by SAP✅
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>
                    <Col md={4}>
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                          <div className="content">
                            <a
                              href="https://www.cloudskillsboost.google/public_profiles/daf78b63-5c0f-43dc-a9d0-caa6559eb5a4/badges/4613854"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="content-overlay"></div>
                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                <img className="logo_img" src={kub} alt="UFM" />
                              </div>
                              <div className="content-details fadeIn-top">
                                <h3
                                  className="content-title"
                                  style={{ color: "black" }}
                                >
                                  Certificate
                                </h3>
                              </div>
                            </a>
                          </div>
                          <div className="cert-body">
                            <h2
                              className="cert-body-title"
                              style={{ fontWeight: 700, color: "#fbd9ad" }}
                            >
                              Kubernetes in Google Cloud
                            </h2>
                            <h3
                              className="cert-body-subtitle"
                              style={{
                                color: "#eb90ff",
                                marginBottom: "0px",
                              }}
                            >
                              - issued by Google Cloud✅
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>
                    <Col md={4}>
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                          <div className="content">
                            <a
                              href="https://www.hackerrank.com/certificates/9b695be6cdd1"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="content-overlay"></div>
                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                <img className="logo_img" src={ucsc} alt="UCSC" />
                              </div>
                              <div className="content-details fadeIn-top">
                                <h3
                                  className="content-title"
                                  style={{ color: "black" }}
                                >
                                  Certificate
                                </h3>
                              </div>
                            </a>
                          </div>
                          <div className="cert-body">
                            <h2
                              className="cert-body-title"
                              style={{ fontWeight: 700, color: "#fbd9ad" }}
                            >
                              CSS (Basic) Certificate
                            </h2>
                            <h3
                              className="cert-body-subtitle"
                              style={{
                                color: "#eb90ff",
                                marginBottom: "0px",
                              }}
                            >
                              - HackerRank✅
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>
                    <Col md={4}>
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                          <div className="content">
                            <a
                              href="https://www.cloudskillsboost.google/public_profiles/daf78b63-5c0f-43dc-a9d0-caa6559eb5a4/badges/4597600"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="content-overlay"></div>
                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                <img className="logo_img" src={nh} alt="NH" />
                              </div>
                              <div className="content-details fadeIn-top">
                                <h3
                                  className="content-title"
                                  style={{ color: "black" }}
                                >
                                  Certificate
                                </h3>
                              </div>
                            </a>
                          </div>
                          <div className="cert-body">
                            <h2
                              className="cert-body-title"
                              style={{ fontWeight: 700, color: "#fbd9ad" }}
                            >
                              Build a Website on Google Cloud Skill Badge
                            </h2>
                            <h3
                              className="cert-body-subtitle"
                              style={{
                                color: "#eb90ff",
                                marginBottom: "0px",
                              }}
                            >
                              - issued By Google Cloud✅
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>
                    <Col md={4}>
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                          <div className="content">
                            <a
                              href="https://api.badgr.io/public/assertions/WpfUBQ2wSwmfrdQEo2oASw?identity__email=shivamkumar250403%40gmail.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="content-overlay"></div>
                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                <img className="logo_img" src={postman} alt="UFM" />
                              </div>
                              <div className="content-details fadeIn-top">
                                <h3
                                  className="content-title"
                                  style={{ color: "black" }}
                                >
                                  Certificate
                                </h3>
                              </div>
                            </a>
                          </div>
                          <div className="cert-body">
                            <h2
                              className="cert-body-title"
                              style={{ fontWeight: 700, color: "#fbd9ad" }}
                            >

                              Postman API Fundamentals Student Expert
                            </h2>
                            <h3
                              className="cert-body-subtitle"
                              style={{
                                color: "#eb90ff",
                                marginBottom: "0px",
                              }}
                            >
                              - issued by letsupgrade && POSTMAN✅
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </Container>
    </section>
  );
}
