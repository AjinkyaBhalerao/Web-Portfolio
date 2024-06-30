import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}

        {/* If the component contains certify link and if it's not a certificate then, it will render the below component  */}

        {!props.ghLink && props.certifyLink && (
          <Button
            variant="primary"
            href={props.certifyLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"See Certification"}
          </Button>
        )}

        {props.ghLink && !props.certifyLink && (
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
          >
            <BsGithub /> &nbsp;
              {"GitHub"}
          </Button>        
        )}

        {props.ghLink && props.certifyLink && (
        <>
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
          >
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>

          <Button
            variant="primary"
            href={props.certifyLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"See Certification"}
          </Button>
        </>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;