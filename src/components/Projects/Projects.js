import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/cms_admin_demo.png";
import editor from "../../Assets/Projects/blog_demo.png";
import chatify from "../../Assets/Projects/chat_demo.png";
import bitsOfCode from "../../Assets/Projects/booking_demo.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chat Demo"
              description="Personal chat room with vuejs ,nestjs ,socket.io, have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/duytuit/genal-chat"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Booking Demo"
              description="Booking application, hotel, air ticket. Built with nestjs, nextjs, nestjs cdn. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/duytuit/vivu_today"
              demoLink="http://103.107.183.175:8084/blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blog Demo"
              description="Digital world - Information sharing channel. Update the fastest and most accurate information about social and political fields, real estate, learning, traveling, and making money online. Built with php codeigniter combined with nestjs to synchronize reputable news websites"
              ghLink="https://github.com/duytuit/cms_blog"
              demoLink="https://thegioiso.pro/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CMS ADMIN"
              description="The admin page is used to manage the content of websites, handle functional operations as required. Manage cronjobs that automatically retrieve updated data. built with nestjs and reactjs. UserName: admin, Pass: admin123"
              ghLink="https://github.com/duytuit/ui_cms_admin"
              demoLink="http://103.107.183.175:4000/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
