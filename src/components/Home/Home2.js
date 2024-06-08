import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
/*import Tilt from "react-parallax-tilt";*/
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.4em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              When I first began playing Scratch for fun 7 years ago, 
              little did I know this small passion had potential of making a change.
              <br />
              <br />
              I am fluent in programming languages like 
              <i>
                <b className="purple"> Python3, C++, and Javascript.</b>
              </i>
              <br />
              <br />
              Key interests in:
              <i>
                <b className="purple"> Machine Learning, Natural Language Processing, Big Data, and Software Development.</b>
              </i>
              <br />
              <br />
              I am fascinated about building core insights from raw data by leveraging modern &nbsp;
              <i>
                <b className="purple">Data Analytics and Vizualization </b>
                tools like{" "}
                <b className="purple">
                SQL, Oracle DB and Python3.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Express.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid rounded-img" alt="avatar" />
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-experience-section">
            <h1 className="experience-heading">
              EXPERIENCE
            </h1>
            <ul className="experience-list">
              <li className="experience-item">
                <div className="experience-content">
                  <strong>Data Science Intern – Kheops.ai France </strong>
                  <b>
                    (March 2024 – August 2024)</b>
                </div>
                <p>Responsible for leveraging a Software as a Service (SaaS) model by <br></br>
                  implementing NLP based autonomous agents for enterprises.</p>
                <p><i>Tech stack: API Handling, Python, SQL, Mistral LM, Docker, Git</i></p>
              </li>
              <li className="experience-item">
              <div className="experience-content">
                <strong>Project Intern – ORACLE India</strong> <b>(June 2023 – August 2023)</b>
              </div>
                <p>Integrated disparate data sources into a centralized data warehouse using <br></br>
                Oracle Data Integrator (ODI). Additionally, gained insights on core banking procedures.</p>
                <p><i>Tech stack: PLSQL, Oracle DB, FLEXCUBE, JMS, Apache Kafka, VBA</i></p>
              </li>
              <li className="experience-item">
              <div className="experience-content">
                <strong>Summer Intern – SICSS</strong> <b>(July 2022)</b>
              </div>
                <p>Contributed in a socio-analysis mental health study to address issues in the <br></br>
                Indian educational sector, where I played a pivotal role in Data Collection, <br></br>
                Pre-Processing, and Analysis to derive foundational conclusions.</p>
                <p><i>Tech Stack: Web-Scraping, Pandas, MatplotLib, ScikitLearn</i></p>
              </li>
              <li className="experience-item">
              <div className="experience-content">  
                <strong>Finance & Accounting Coordinator – MARC, Mahindra University</strong> <b>(April 2022 – Jan 2023)</b>
              </div>
                <p>Authorized with overlooking direct incoming funds from Mahindra Ecole Centrale alumni <br></br>
                  and managing allowances for alumni events and functions as investments for University career building.</p>
              </li> 
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h5>
            I'm excited to leverage my skills to tackle complex problems 
            and contribute to innovative projects. <span className="purple">Let's connect!</span>
            </h5>
            <br />
            <br />            
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AjinkyaBhalerao"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Ajinkya07718684"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ajinkya-bhalerao-71224b141/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ajinkyaxbhalerao"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
