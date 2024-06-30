import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import OpenCV from "../../Assets/Projects/OpenCV.png";
import Metaphor from "../../Assets/Projects/Metaphor.png";
import Chatbot from "../../Assets/Projects/Chatbot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Metaphor}
              title="Metaphor Generation | NVIDIA"
              description="The project at NVIDIA focused on developing models capable of generating creative and contextually appropriate metaphors. Utilizing advanced neural network architectures, including Transformers and LSTM models, and NVIDIA's GPU acceleration for efficient large-scale data training."
              certifyLink="https://www.dropbox.com/scl/fi/2uuz77o0ho6b4lg4m4g9r/Ajinkya%20Bhalerao%20NVAITC%20LoA.pdf?rlkey=5iwogebld43kn2xppkss89zoz&e=1&dl=0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chatbot}
              title="Chatbot Development | Mane"
              description="Developed and deployed a Chatbot with interactive UI to ease the intranetwork hassle of communication for the employees of Mane company, to boost productivity and reduce latency in processes."
              ghLink="https://github.com/AjinkyaBhalerao/Mane-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OpenCV}
              title="Real Time Age, Gender and Emotion Detection"
              description="A university team project that takes live video feed from the webcam, breaks down and preprocesses frames to identify the nature of the human being present in the visual feed. The app leverages MTCNN, OpenCV and Python Imaging Library for production."
              ghLink="https://github.com/AjinkyaBhalerao/Real-Time-Age-Gender-and-Emotion-Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
