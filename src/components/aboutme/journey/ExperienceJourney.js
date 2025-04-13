import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid rgb(78 22 112)" }}
          date="2024-Continuing"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Tech Creature-Solution
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            MERN Stack Intern
          </h6>
          <p>
            • Interned as a Web Developer at Tech Creature Solutions for 3-4
            months.
          </p>
          <p>
            • Developed and maintained the JOB TRACKING APP, focusing on
            improving workflow efficiency.
          </p>
          <p>
            • Responsibilities included coding, debugging, and collaborating
            with the team.
          </p>
          <p>
            • Added a company module in the Job Tracking System.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="July-August 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Brainy Beam Technologies
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Web Design with React JS (15 days Internship)
          </h6>
          <p>
            • Learned basic fundamentals of React during the 15-day internship.
          </p>
          <p>
            • Worked on a dynamic project named "RENTAL HUB" to apply learning in a practical scenario.
          </p>
          <p>
            • Enhanced skills in front-end development techniques like
            responsive design and cross-browser compatibility.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="Feb-Mar 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">Oasis Infobyte</h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Web Development Intern (HTML, CSS, JavaScript)
          </h6>
          <p>
            • One-month online internship in web development covering HTML, CSS,
            and JavaScript.
          </p>
          <p>
            • Completed tasks including creating a responsive Landing Page,
            designing a Temperature App, and building a dynamic Portfolio
            website.
          </p>
          <p>
            • Enhanced skills in front-end development techniques such as
            responsive design and cross-browser compatibility.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="Dec(2022)-June(2023)"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">SAP</h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Systems, Applications and Products in Data Processing
          </h6>
          <p>
            • College Program at SAP focusing on enterprise software solutions
              and business analytics.
          </p>
          <p>
            • Contributed to the Product Recommendation System project,
            enhancing customer experience through personalized recommendations.
          </p>
          <p>
            • Participated in mock test projects to ensure software reliability
            and scalability.
          </p>
          <p>
            • Improved skills in Java, problem-solving, and software development
            in a corporate setting.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
