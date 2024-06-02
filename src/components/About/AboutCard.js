import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ajinkya Bhalerao </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently working as a Data Science intern at Kheops.Ai in 
            <span className="purple"> Nice, France </span>
            <br />
            I am pursiuing my <span className="purple">Mastère Spécialisé </span>
            in Data Science at <span className="purple">Ecole Centrale de Marseille</span>
            <br />
            This is also my final year of 
            <i>
              <span className="purple"> B.Tech in Computer Science and Engineering </span>
            </i>at <span className="purple">Mahindra University, India</span>
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
