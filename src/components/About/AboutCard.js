import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">TU </span>
            from <span className="purple">Hai Boi, Dong Anh, Ha Noi.</span>
            <br /> 
             Previously, I studied information technology at Electric Power University.
            <br />
            I have worked at several companies:
            <br />
            GOKO SPRING VIET NAM
            <br />
            TNHH SUNCALL TECHNOLOGY VIET NAM
            <br />
            MEIKO ELECTRONICS VIETNAM CO., LTD.
            <br />
            CO PHAN DICH VU & DIA OC DAT XANH MIEN BAC
            <br />
            TNHH CONG NGHE S-TECH
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
