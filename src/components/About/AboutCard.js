import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <i><span className="purple">Ajinkya Bhalerao </span></i>
            from <i><span className="purple"> Pune, India.</span></i>
            <br />
            I am currently working as a Data Science intern at Kheops.Ai in 
            <i><span className="purple"> Nice, France </span></i>
            <br />
            I am pursiuing my <i><span className="purple">Mastère Spécialisé </span></i>
            in Data Science at <i><span className="purple">Ecole Centrale de Marseille</span></i>
            <br />
            This is also my final year of 
            <i>
              <span className="purple"> B.Tech in Computer Science and Engineering </span>
            </i>at <i><span className="purple">Mahindra University, India</span></i>
            <br />
            What I absolutely love to do out of my work desk:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel Around The World
            </li>
            <li className="about-activity">
              <ImPointRight /> Cook
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
