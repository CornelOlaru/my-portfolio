import React from "react";
import { Link } from "react-router-dom";
import "./AboutPageStyle.css";
import img1 from "../assets/[008729].jpg";
const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          My name is Corneliu Olaru, 23 y.o and I am a student learning Software
          Development highly motivated that is trying to improve himself by
          creating diferent kind of projects that includes responsive and secure
          web and mobile applications using different framworks.
        </p>

        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <img src={img1} alt="cover" className="img" />
      </div>
    </div>
  );
};

export default AboutPage;
