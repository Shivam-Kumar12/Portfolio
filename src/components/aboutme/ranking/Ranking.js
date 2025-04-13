import React from "react";
import { FaHackerrank } from "react-icons/fa";
import {
  SiLeetcode,
  SiHackerearth,
  SiCodechef,
  SiCodeforces,
} from "react-icons/si";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { CodeIcon } from '@mui/icons-material/Code';

export default function Ranking() {
  return (
    <div className="mt-4 ">
      <Zoom left cascade>
        <h1>See my rank</h1>
      </Zoom>
      <div className="d-flex gap-10">
      <Container className="mt-5 ">
        <Row className="g-5">
          <Col md={3} >
            <a
              href="https://www.hackerrank.com/profile/shivamkumar25041"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <FaHackerrank />
              </Zoom>
            </a>
          </Col>
         
        </Row>
      </Container>
      <Container className="mt-5 ">
        <Row className="g-5">
          <Col md={3} >
            <a
              href="https://www.codechef.com/users/glad_joke_49"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                < SiCodechef />
              </Zoom>
            </a>
          </Col>
         
        </Row>
      </Container>
      </div>
    </div>
  );
}
